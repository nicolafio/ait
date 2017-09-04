/*
 ~  Copyright (c) 2017 Nicola Fiori (JD342)
 ~
 ~  This file is part of the Arc Integration for Thunderbird, licensed under
 ~  the terms of the GNU General Public License 3.0.
 ~
 */

/* eslint-env node */

const file = `${__dirname}/../../source/xpi-content/params.json`;
require('fs').readFile(file, (err, data) => {
    console.log('verifying parameters');
    const start = Date.now();
    var error;
    (() => {
        if (err) { error = err.message; return; }
        var obj;
        try { obj = JSON.parse(data); }
        catch (err) { error = err.message; return; }
        const msg = verifyParams(obj);
        if (msg !== null) error = `malformed parameters: ${msg}`;
    })();
    if (error) {
        console.error(error);
        process.exitCode = -1;
    }
    else console.log('verification completed successfully ' +
                     `(${ Date.now() - start } ms)`);
});

function verifyParams(obj) {
    const isObj = v => typeof v === 'object' && !Array.isArray(v);
    // Verify root object
    if (!isObj(obj)) return 'the JSON content must have an object as root';
    // Verify root[...]
    for (let key in obj)
        if (key !== 'windowsToRestyle' && key !== 'preferences')
            return `root object has an unrecognized property name "${key}"`;
    for (let key of ['windowsToRestyle', 'preferences'])
        if (!(key in obj))
            return `"${key}" property must exist in the root object`;
    // Verify .windowsToRestyle
    if (!Array.isArray(obj.windowsToRestyle))
        return '"windowsToRestyle" must be an array';
    // Verify .windowsToRestyle[...]
    for (let winURL of obj.windowsToRestyle)
        if (typeof winURL !== 'string')
            return '"windowsToRestyle" must have only strings';
    for (let winURL of obj.windowsToRestyle)
        try { new (require('url').URL)(winURL); }
        catch (e) {
            const str = JSON.stringify(winURL);
            return `${str} in "windowsToRestyle" is not a valid URL`;
        }
    // Verify .preferences
    if (!isObj(obj.preferences)) return '"perferences" must be a JSON object';
    // Verify .preferences[...]
    const isDashCased = str => /^[a-z]+(?:\-[a-z]+)*$/.test(str);
    for (let prefName in obj.preferences)
        if (!isDashCased(prefName))
            return `preference name "${prefName}" does not follow the ` +
                   'dash-separated lowercase words syntax';
    for (let [prefName, prefDescr] of Object.entries(obj.preferences))
        if (!isObj(prefDescr))
            return '"preferences" must have objects as properties, and ' +
                   `"${prefName}" is not an object`;
    // Verify .preferences[...][...]
    for (let [prefName, prefDescr] of Object.entries(obj.preferences))
        for (let key in prefDescr)
            if (key !== 'options' && key !== 'presets')
                return `"${prefName}" has an unrecognized property name ` +
                       `"${key}"`;
    // Verify .preferences[...].options
    for (let [prefName, prefDescr] of Object.entries(obj.preferences))
        if (!('options' in prefDescr))
            return `"options" property missing in "${prefName}"`;
    for (let [prefName, prefDescr] of Object.entries(obj.preferences))
        if (!Array.isArray(prefDescr.options))
            return `"options" property in "${prefName}" is not an array`;
    for (let [prefName, prefDescr] of Object.entries(obj.preferences))
        if (prefDescr.options.length === 0)
            return `"options" array in "${prefName}" is empty`;
    // Verify .preferences[...].options[...]
    for (let [prefName, prefDescr] of Object.entries(obj.preferences))
        for (let option of prefDescr.options)
            if (typeof option !== 'string')
                return `"options" array in "${prefName}" does not have only` +
                       'strings';
    for (let [prefName, prefDescr] of Object.entries(obj.preferences))
        for (let option of prefDescr.options)
            if (!isDashCased(option))
                return `options in "${prefName}" are not following the ` +
                       'dash-separated lowercase words syntax';
    // Verify .preferences[...].presets
    const prefEntriesWithPresets =
        Object.entries(obj.preferences)
            .filter(([, v]) => 'presets' in v);
    for (let [prefName, prefDescr] of prefEntriesWithPresets)
        if (!isObj(prefDescr.presets))
            return `"presets" attribute in "${prefName}" is not an object`;
    for (let [prefName, prefDescr] of prefEntriesWithPresets)
        if (Object.keys(prefDescr.presets).length === 0)
            return `"presets" object in "${prefName}" is empty`;
    // Verify .preferences[...].presets[...]
    for (let [prefName, prefDescr] of prefEntriesWithPresets)
        for (let presetDescr of Object.values(prefDescr.presets))
            if (!Array.isArray(presetDescr))
                return `"presets" property in "${prefName}" is not an object ` +
                       'that contains only array properties';
    for (let [prefName, prefDescr] of prefEntriesWithPresets)
        for (let presetPrefName in prefDescr.presets)
            if (!(presetPrefName in obj.preferences))
                return `"${prefName}" has a preset for an undefined ` +
                       `preference named "${presetPrefName}"`;
    for (let [prefName, prefDescr] of prefEntriesWithPresets)
        for (let presetPrefName in prefDescr.presets)
            if (presetPrefName === prefName)
                return `"${prefName}" has a preset for itself, this would ` +
                       'cause an infinite loop';
    for (let [prefName, prefDescr] of prefEntriesWithPresets)
        for (let presetEntry of Object.entries(prefDescr.presets)) {
            const [presetPrefName, presetDescr] = presetEntry;
            if (presetDescr.length !== prefDescr.options.length)
                return `number of items of preset for "${presetPrefName}" in ` +
                       `"${prefName}" is not the same as the number of ` +
                       `options in "${prefName}"`;
        }
    const parentsMap = new Map();
    for (let [prefName, prefDescr] of prefEntriesWithPresets)
        for (let presetPrefName in prefDescr.presets) {
            if (parentsMap.has(presetPrefName))
                return `"${prefName}" has a preset for "${presetPrefName}" ` +
                       'while there already exists one for the same ' +
                       `preference in "${parentsMap.get(presetPrefName)}"; ` +
                       'there cannot be multiple presets for the same ' +
                       'preference';
            parentsMap.set(presetPrefName, prefName);
        }
    for (let prefName in obj.preferences) {
        if (!parentsMap.has(prefName)) continue;
        let currPrefName = parentsMap.get(prefName);
        const prefParents = [];
        while (parentsMap.has(currPrefName)) {
            prefParents.push(currPrefName);
            currPrefName = parentsMap.get(currPrefName);
            if (prefName === currPrefName)
                return 'There is a cycle in the presets that would cause an ' +
                       `infinite loop: "${prefName}" depends on ` +
                       prefParents
                           .map(v => `"${v}"`)
                           .join(', which depends on ') +
                       `, which depends on "${prefName}" again`;
        }
    }
    // Verify .preferences[...].presets[...][...]
    const sets = new Map();
    const getSetFor = (arr) => {
        if (sets.has(arr)) return sets.get(arr);
        const set = new Set(arr);
        sets.set(arr, set);
        return set;
    };
    for (let [prefName, prefDescr] of prefEntriesWithPresets)
        for (let presetEntry of Object.entries(prefDescr.presets)) {
            const [presetPrefName, presetDescr] = presetEntry;
            const presetPrefDescr = obj.preferences[presetPrefName];
            const presetPrefOpionsSet = getSetFor(presetPrefDescr.options);
            for (let presetOption of presetDescr)
                if (!presetPrefOpionsSet.has(presetOption))
                    return `preset for "${presetPrefName}" in "${prefName}" ` +
                           'has items that are not defined the options list ' +
                           `of "${presetPrefName}"`;
        }
    return null;
}
