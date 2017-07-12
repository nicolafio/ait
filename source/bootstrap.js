/*
 ~  Copyright (c) 2017 Nicola Fiori (JD342)
 ~
 ~  This file is part of the Arc Integration for Thunderbird, licensed under
 ~  the terms of the GNU General Public License 3.0.
 ~
 */

/* -- parameters ------------------------------------------------------------ */

// Windows to restyle
//
const WINDOWS = new Map();
{
    let toolsetButtonVariants;
    toolsetButtonVariants = (name) => [
        `toolset-active-button-${name}`,
        `toolset-button-${name}`
    ];
    // New/Edit Task/Event Dialogs
    WINDOWS.set('chrome://calendar/content/calendar-event-dialog.xul', {
        iconsToInclude: [
            {
                graphics: 'chrome://ait/content/icons/down.svg',
                variants: toolsetButtonVariants('down-arrow')
            },
            {
                graphics: 'chrome://ait/content/icons/drive.svg',
                variants: toolsetButtonVariants('save')
            },
            {
                graphics: 'chrome://ait/content/icons/lock.svg',
                variants: toolsetButtonVariants('lock')
            },
            {
                graphics: 'chrome://ait/content/icons/attachment.svg',
                variants: toolsetButtonVariants('attachment')
            },
            {
                graphics: 'chrome://ait/content/icons/delete.svg',
                variants: toolsetButtonVariants('delete')
            },
            {
                graphics: 'chrome://ait/content/icons/important.svg',
                variants: toolsetButtonVariants('important')
            },
            {
                graphics: 'chrome://ait/content/icons/globe.svg',
                variants: toolsetButtonVariants('globe')
            },
            {
                graphics: 'chrome://ait/content/icons/status.svg',
                variants: toolsetButtonVariants('status')
            },
            {
                graphics: 'chrome://ait/content/icons/avatar.svg',
                variants: toolsetButtonVariants('avatar')
            },
            {
                graphics: 'chrome://ait/content/icons/time.svg',
                variants: toolsetButtonVariants('time')
            }
        ]
    });
    // Address Book
    WINDOWS.set('chrome://messenger/content/addressbook/addressbook.xul', {
        iconsToInclude: [
            {
                graphics: 'chrome://ait/content/icons/search.svg',
                variants: ['toolset-searchbox-search']
            },
            {
                graphics: 'chrome://messenger/skin/icons/mail-toolbar.svg',
                excludedElements: ':root > :not(#newmsg)',
                variants: toolsetButtonVariants('write')
            },
            {
                graphics: 'chrome://ait/content/icons/properties.svg',
                variants: toolsetButtonVariants('properties')
            },
            {
                graphics: 'chrome://ait/content/icons/delete.svg',
                variants: toolsetButtonVariants('delete')
            },
            {
                graphics: 'chrome://ait/content/icons/addressbook.svg',
                variants: toolsetButtonVariants('address-book')
            },
            {
                graphics: 'chrome://ait/content/icons/newcontact.svg',
                variants: toolsetButtonVariants('new-contact')
            },
            {
                graphics: 'chrome://ait/content/icons/message.svg',
                variants: toolsetButtonVariants('message')
            }
        ]
    });
    toolsetButtonVariants = (name) => [
        `toolset-active-button-${name}`,
        `frame-toolset-button-${name}`,
        `panel-toolset-button-${name}`
    ];
    // Main Window
    WINDOWS.set('chrome://messenger/content/messenger.xul', {
        iconsToInclude: [
            {
                graphics: 'chrome://ait/content/icons/search.svg',
                variants: [
                    ...toolsetButtonVariants('search'),
                    'frame-toolset-searchbox-search',
                    'panel-toolset-searchbox-search',
                    'panel-content-searchbox-search'
                ]
            },
            {
                graphics: 'chrome://ait/content/icons/down.svg',
                variants: [
                    ...toolsetButtonVariants('down-arrow'),
                    'panel-content-down-arrow'
                ]
            },
            {
                graphics: 'chrome://ait/content/icons/schedule.svg',
                variants: [
                    ...toolsetButtonVariants('schedule'),
                    'panel-content-schedule'
                ]
            },
            {
                graphics: 'chrome://ait/content/icons/new.svg',
                variants: [
                    ...toolsetButtonVariants('new'),
                    'panel-content-new'
                ]
            },
            {
                graphics: 'chrome://ait/content/icons/close.svg',
                variants: [
                    'selected-tab-close',
                    'tab-active-button-close',
                    'tab-hover-button-close',
                    'tab-close',
                ]
            },
            {
                graphics: 'chrome://messenger/skin/icons/mail-toolbar.svg',
                excludedElements: ':root > :not(#newmsg)',
                variants: toolsetButtonVariants('write')
            },
            {
                graphics: 'chrome://messenger/skin/icons/mail-toolbar.svg',
                excludedElements: ':root > :not(#filter)',
                variants: toolsetButtonVariants('filter')
            },
            {
                graphics: 'chrome://ait/content/icons/save.svg',
                variants: toolsetButtonVariants('inbox')
            },
            {
                graphics: 'chrome://ait/content/icons/delete.svg',
                variants: toolsetButtonVariants('delete')
            },
            {
                graphics: 'chrome://ait/content/icons/addressbook.svg',
                variants: toolsetButtonVariants('address-book')
            },
            {
                graphics: 'chrome://ait/content/icons/avatar.svg',
                variants: toolsetButtonVariants('avatar')
            },
            {
                graphics: 'chrome://ait/content/icons/calendar.svg',
                variants: toolsetButtonVariants('calendar')
            },
            {
                graphics: 'chrome://ait/content/icons/message.svg',
                variants: toolsetButtonVariants('message')
            },
            {
                graphics: 'chrome://ait/content/icons/forward.svg',
                variants: toolsetButtonVariants('forward')
            },
            {
                graphics: 'chrome://ait/content/icons/junk.svg',
                variants: toolsetButtonVariants('junk')
            },
            {
                graphics: 'chrome://ait/content/icons/menu.svg',
                variants: toolsetButtonVariants('menu')
            },
            {
                graphics: 'chrome://ait/content/icons/print.svg',
                variants: toolsetButtonVariants('print')
            },
            {
                graphics: 'chrome://ait/content/icons/properties.svg',
                variants: toolsetButtonVariants('properties')
            },
            {
                graphics: 'chrome://ait/content/icons/reply.svg',
                variants: toolsetButtonVariants('reply')
            },
            {
                graphics: 'chrome://ait/content/icons/replyall.svg',
                variants: toolsetButtonVariants('reply-all')
            },
            {
                graphics: 'chrome://ait/content/icons/sync.svg',
                variants: toolsetButtonVariants('sync')
            },
            {
                graphics: 'chrome://ait/content/icons/tag.svg',
                variants: toolsetButtonVariants('tag')
            },
            {
                graphics: 'chrome://ait/content/icons/task.svg',
                variants: toolsetButtonVariants('task')
            }
        ]
    });
}

// Generic preferences are not exposed in the style sheet, they serve the
// purpose of simplifying the configuration for the end user by grouping
// together more specific preferences.
// Generic preferences can group other generic preferences to create a tree-like
// structure.
//
const GENERIC_PREFS = new Map();
GENERIC_PREFS.set('general-look', { options: ['light', 'dark', 'darker'] });
GENERIC_PREFS.set('panel', {
    parentPref: 'general-look',
    options: ['light', 'dark', 'darker', 'none'],
    presets: { light: 'light', dark: 'dark', darker: 'darker' }
});
GENERIC_PREFS.set('frame', {
    parentPref: 'general-look',
    options: ['light', 'dark', 'none'],
    presets: { light: 'light', dark: 'dark', darker: 'dark' }
});
GENERIC_PREFS.set('panel-content', {
    parentPref: 'panel',
    options: ['light', 'dark', 'none'],
    presets: { light: 'light', dark: 'dark', darker: 'light', none: 'none' }
});
GENERIC_PREFS.set('panel-toolbox', {
    parentPref: 'panel',
    options: ['light', 'dark', 'darker', 'none'],
    presets: { light: 'light', dark: 'dark', darker: 'darker', none: 'none' }
});
for (let part of ['background', 'contents', 'icons']) {
    GENERIC_PREFS.set(`frame-${part}-styling`, {
        parentPref: 'frame',
        options: ['enabled', 'disabled'],
        presets: { light: 'enabled', dark: 'enabled', none: 'disabled' }
    });
    GENERIC_PREFS.set(`lightning-extension-dialogs-frame-${part}-styling`, {
        parentPref: `frame-${part}-styling`,
        options: ['enabled', 'disabled'],
        presets: { enabled: 'enabled', disabled: 'disabled' }
    });
}
for (let part of ['mails-panel', 'lightning-panels'])
    GENERIC_PREFS.set(`${part}-content-styling`, {
        parentPref: 'panel-content',
        options: ['enabled', 'disabled'],
        presets: { light: 'enabled', dark: 'enabled', none: 'disabled' }
    });

// Only specific preferences are exposed and used in the style sheet. They
// describe everything that can be tweaked.
// Specific preferences cannot be "parent" preferences of other preferences,
// only the generic ones can.
//
const SPECIFIC_PREFS = new Map();
for (let part of ['background', 'contents', 'icons']) {
    for (let win of ['main', 'message-writing', 'address-book'])
        SPECIFIC_PREFS.set(`${win}-window-frame-${part}-styling`, {
            parentPref: `frame-${part}-styling`,
            options: ['enabled', 'disabled'],
            presets: { enabled: 'enabled', disabled: 'disabled' }
        });
    for (let dialog of ['task', 'event'])
        SPECIFIC_PREFS.set(`lightning-${dialog}-dialog-frame-${part}-styling`, {
            parentPref: `lightning-extension-dialogs-frame-${part}-styling`,
            options: ['enabled', 'disabled'],
            presets: { enabled: 'enabled', disabled: 'disabled' }
        });
}
for (let part of ['box', 'contents', 'icons'])
    SPECIFIC_PREFS.set(`panel-toolbox-${part}-styling`, {
        parentPref: 'panel-toolbox',
        options: ['enabled', 'disabled'],
        presets: {
            light: 'enabled',
            dark: 'enabled',
            darker: 'enabled',
            none: 'disabled'
        }
    });
for (let panel of [
    'address-book',
    'message-writing',
    'filter',
    'extensions-manager',
    'chat',
    'preferences-window'
])
    SPECIFIC_PREFS.set(`${panel}-panel-content-styling`, {
        parentPref: 'panel-content',
        options: ['enabled', 'disabled'],
        presets: { light: 'enabled', dark: 'enabled', none: 'disabled' }
    });
for (let panel of ['calendar', 'tasks', 'side', 'task-window', 'event-window'])
    SPECIFIC_PREFS.set(`lightning-${panel}-panel-content-styling`, {
        parentPref: 'lightning-panels-content-styling',
        options: ['enabled', 'disabled'],
        presets: { enabled: 'enabled', disabled: 'disabled' }
    });
for (let view of ['main', 'mail', 'account-manager'])
    SPECIFIC_PREFS.set(`mails-${view}-view-content-styling`, {
        parentPref: 'mails-panel-content-styling',
        options: ['enabled', 'disabled'],
        presets: { enabled: 'enabled', disabled: 'disabled' }
    });
SPECIFIC_PREFS.set('frame-coloring', {
    parentPref: 'frame',
    options: ['light', 'dark'],
    presets: { light: 'light', dark: 'dark', none: 'light' }
});
SPECIFIC_PREFS.set('panel-toolbox-coloring', {
    parentPref: 'panel-toolbox',
    options: ['light', 'dark', 'darker'],
    presets: { light: 'light', dark: 'dark', darker: 'darker', none: 'light' }
});
SPECIFIC_PREFS.set('panel-content-coloring', {
    parentPref: 'panel-content',
    options: ['light', 'dark'],
    presets: { light: 'light', dark: 'dark', none: 'light' }
});

/* -- globals --------------------------------------------------------------- */

const XHTMLNS = 'http://www.w3.org/1999/xhtml';
const AIT_PREFS_DOMAIN = 'extensions.net.jd342.ait';

const PREFERENECES_DIALOG_LOCATION =
    'chrome://messenger/content/preferences/preferences.xul';

/* global Components */
const Cc = Components.classes;

Components.utils.importGlobalProperties(['fetch']);

const {
    nsIWindowMediator,
    nsIInterfaceRequestor,
    nsIDOMWindow,
    nsIPrefService,
    nsIPrefBranch,
    nsIDOMParser
} = Components.interfaces;

const wm =
    Cc['@mozilla.org/appshell/window-mediator;1']
        .getService(nsIWindowMediator);

const prefs =
    Cc['@mozilla.org/preferences-service;1']
        .getService(nsIPrefService)
        .QueryInterface(nsIPrefBranch);

/* -- root logic ------------------------------------------------------------ */

function initialize(win) {

    const url = win.location.href.split('#')[0];

    if (WINDOWS.has(url)) {
        const info = WINDOWS.get(url);
        StyleIntegration.load(win, info);
    }

    if (url === PREFERENECES_DIALOG_LOCATION) IntegrationPrefsPanel.load(win);

}

function teardown(win) {

    const url = win.location.href.split('#')[0];

    if (WINDOWS.has(url)) StyleIntegration.unload(win);
    if (url === PREFERENECES_DIALOG_LOCATION) IntegrationPrefsPanel.unload(win);

}

function startup() { // eslint-disable-line no-unused-vars

    IntegrationPrefs.main();
    StyleIntegration.main();
    IntegrationPrefsPanel.main();
    IntegrationWindowManager.main();

}

function shutdown() { // eslint-disable-line no-unused-vars

    IntegrationWindowManager.end();
    IntegrationPrefsPanel.end();
    StyleIntegration.end();
    IntegrationPrefs.end();

}

function install(data, reason) { // eslint-disable-line no-unused-vars

    IntegrationPrefs.setup();

}

function uninstall(data, reason) { // eslint-disable-line no-unused-vars

    IntegrationPrefs.clean();

}

/* -- window manager module ------------------------------------------------- */

// The integration window manager has the job to detect existence of DOM windows
// and invoke the `initialize` function for each detected DOM window, and to
// invoke the `teardown` function afterwards when either the window closes or
// the integration window manager is shut down by calling its `end` function.

const IntegrationWindowManager = (() => {

    return { main, end };

    var windowListener;
    var initializedWindows;
    var toreDownWindows;

    function main() {

        initializedWindows = new WeakSet();
        toreDownWindows = new WeakSet();

        windowListener = {

            onOpenWindow(w) {

                handleWindowInitialization(
                    w.QueryInterface(nsIInterfaceRequestor)
                        .getInterface(nsIDOMWindow)
                );

            },

            onCloseWindow(w) {

                handleWindowTearDown(
                    w.QueryInterface(nsIInterfaceRequestor)
                        .getInterface(nsIDOMWindow)
                );

            },

            onWindowTitleChange() {}

        };

        for (let win of getCurrentWindows()) handleWindowInitialization(win);
        wm.addListener(windowListener);

    }

    function end() {

        wm.removeListener(windowListener);
        for (let win of getCurrentWindows()) handleWindowTearDown(win);

        windowListener = null;
        initializedWindows = null;
        toreDownWindows = null;

    }

    // Invokes the window initializer (`initialize` function in the root logic)
    // once the Location interface has meaningful information.
    //
    function handleWindowInitialization(win) {

        // Keep a reference to the current set of tore down windows, as it is
        // possible that `handleLocationAvailabilitySniffing` could be invoked
        // after IntegrationWindowManager.end is invoked and thus reset the
        // `toreDownWindows` variable.
        const currentToreDownWindowsSet = toreDownWindows;

        // At the time of writing (May '17), I did not find any meaningful event
        // in the documentation that can notify that the location interface has
        // been initialized properly. I therefore decided to write a sniffing
        // routine to detect this.

        // In each iteration the delay will be incremented by 1ms. This is done
        // to minimize the performance impact of the sniffing routine.
        let delay = 0;

        handleLocationAvailabilitySniffing();

        function handleLocationAvailabilitySniffing() {

            // Check if the window has been tore down. If yes, then stop
            // sniffing.
            if (currentToreDownWindowsSet.has(win)) return;

            // Location information is deemed available when the URL it is not
            // 'about:blank'.
            // It is assumed that the window location is initially set to
            // 'about:blank', and afterwards an initialization routine assigns
            // the real path of the window to the location interface.
            if (win.location.href !== 'about:blank')
                onceLocationIsAvailable();

            // Even though it is unlikely, it is possible that some routine
            // purposefully opens an 'about:blank' window, in that case the
            // sniffing loop will stop when the document finishes loading.
            else if (win.document.readyState !== 'complete')
                win.setTimeout(handleLocationAvailabilitySniffing, delay++);

        }

        function onceLocationIsAvailable() {

            initializedWindows.add(win);
            initialize(win);

        }

    }

    function handleWindowTearDown(win) {

        toreDownWindows.add(win);

        // Invoke `teardown` only if `initialize` has actually been invoked
        // previously.
        if (initializedWindows.has(win)) teardown(win);

    }

    function* getCurrentWindows() {

        const windows = wm.getEnumerator(null);

        while (windows.hasMoreElements()) yield windows.getNext();

    }


})();

/* -- style integration module ---------------------------------------------- */

// The style integration module has the job to inject styling and icons in a
// specified window when its `load` funtion is invoked, dynamically update
// styling when some preference is modified, and remove everything afterwards on
// its `unload` function invocation.

const StyleIntegration = (() => {

    const PreferenceAttributeDescriptor = {

        init(preference) {

            const name =
                'ait-' +
                preference.name.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`) +
                '-preference';

            Object.assign(this, { name, preference });

            return this;

        }

    };

    return { main, end, load, unload };

    var unloadListenersCollections;
    var iconSampleRetrievalsCache;
    var unalteredIconSampleRetrievalsCache;
    var preferenceAttributeDescriptors;

    function main() {

        unloadListenersCollections = new WeakMap();
        iconSampleRetrievalsCache = new Map();
        unalteredIconSampleRetrievalsCache = new Map();

        preferenceAttributeDescriptors =
            Array.from(IntegrationPrefs.getSpecificPreferences())
                .map(p => Object.create(PreferenceAttributeDescriptor).init(p));

    }

    function end() {

        unloadListenersCollections = null;
        iconSampleRetrievalsCache = null;
        unalteredIconSampleRetrievalsCache = null;

    }

    function load(win, { iconsToInclude }) {

        var unloaded = false;
        const doc = win.document;
        const root = doc.firstElementChild;
        const unloadListeners = [() => { unloaded = true; }];

        unloadListenersCollections.set(win, unloadListeners);

        handlePreferenceAttributes();
        handleStyling();
        handleIconsInclusion();

        function handlePreferenceAttributes() {

            preferenceAttributeDescriptors.forEach(({ name, preference }) => {

                preference.watch(onUpdate);
                unloadListeners.push(onUnload);
                onUpdate();

                function onUnload() {

                    preference.stopWatching(onUpdate);

                }

                function onUpdate() {

                    root.setAttribute(name, preference.value);

                }

            });

        }

        function handleStyling() {

            const style = doc.createElementNS(XHTMLNS, 'style');

            style.textContent =
                '@import url("chrome://ait/content/styling.css");';

            root.appendChild(style);
            unloadListeners.push(() => { style.remove(); });

        }

        function handleIconsInclusion() {

            if (iconsToInclude === undefined) return;

            const icons = doc.createElementNS(XHTMLNS, 'div');

            Object.assign(icons.style, {
                width: '0',
                height: '0',
                overflow: 'hidden'
            });

            root.appendChild(icons);
            unloadListeners.push(() => { icons.remove(); });

            iconsToInclude.forEach((info) => {

                const { graphics, excludedElements, variants } = info;

                retrieveIconSample(graphics, excludedElements)
                    .then((svgDoc) => {

                        if (unloaded) return;

                        const variantsFrangment = new win.DocumentFragment();

                        for (let variantName of variants) {
                            const icon = svgDoc.firstElementChild.cloneNode(true);
                            icon.id = `ait-${variantName}-icon`;
                            variantsFrangment.appendChild(icon);
                        }

                        icons.appendChild(variantsFrangment);

                    });

            });

        }

    }

    function unload(win) {

        for (let fn of unloadListenersCollections.get(win)) fn();

    }

    /**
     * @param   {string} path                        (URL)
     * @param   {string|undefined} excludedElements  (CSS selector)
     * @returns {Promise<XMLDocument>}
     */
    function retrieveIconSample(path, excludedElements) {

        var subCache;

        if (iconSampleRetrievalsCache.has(path)) {
            subCache = iconSampleRetrievalsCache.get(path);
            if (subCache.has(excludedElements))
                return subCache.get(excludedElements);
        }
        else {
            subCache = new Map();
            iconSampleRetrievalsCache.set(path, subCache);
        }

        const retrieval = retrieveUnalteredIconSample(path).then((svgDoc) => {

            const iconDoc = svgDoc.cloneNode(true);

            // Remove excluded content if specified

            if (excludedElements !== undefined)
                for (let el of iconDoc.querySelectorAll(excludedElements))
                    el.remove();

            // Remove id and class attributes in order to avoid css selectors
            // pollution.

            for (let attrName of ['id', 'class'])
                for (let el of iconDoc.querySelectorAll(`[${attrName}]`))
                    el.removeAttribute(attrName);

            return iconDoc;

        });

        subCache.set(excludedElements, retrieval);

        return retrieval;

    }

    /**
     * @param {string} path
     * @returns {Promise<XMLDocument>}
     */
    function retrieveUnalteredIconSample(path) {

        if (unalteredIconSampleRetrievalsCache.has(path))
            return unalteredIconSampleRetrievalsCache.get(path);

        const retrieval = fetch(path).then(r => r.text()).then((svg) => {

            /** @type {DOMParser} */
            const parser =
                Cc['@mozilla.org/xmlextras/domparser;1']
                    .createInstance(nsIDOMParser);

            return parser.parseFromString(svg, 'image/svg+xml');

        });

        unalteredIconSampleRetrievalsCache.set(path, retrieval);

        return retrieval;

    }

})();

/* -- preferences handling module ------------------------------------------- */

// The integration preferences module has the job to interface the whole add-on
// with the XPCOM preferences service. It exposes the preferences in a
// prototypical OOP way and also implements the concept of parent/child
// preferences, where parent preferences generalize more specific child
// preferences, making customization more simple for the end-user.

const IntegrationPrefs = (() => {

    const _init = Symbol('Preference Initializer');
    const _name = Symbol('Preference Name');
    const _type = Symbol('Preference Type');
    const _domain = Symbol('Preference Domain');
    const _value = Symbol('Preference Value');
    const _options = Symbol('Preference Options');
    const _descriptor = Symbol('Preference Descriptor');
    const _watchers = Symbol('Preference Watchers');
    const _handleChange = Symbol('Preference Change Handler');

    const _parent = Symbol('ChildPreference Parent');
    const _configurable = Symbol('ChildPreference Configurability Handle');

    const Preference = {

        get name() { return this[_name]; },

        get options() {

            if (!(_options in this)) {

                const options = Array.from(this[_descriptor].options);

                if (this[_type] === 'generic') options.push('custom');

                this[_options] = Object.freeze(options);

            }

            return this[_options];

        },

        get value() {

            if (!(_value in this))
                this[_value] = prefs.getCharPref(this[_domain]);

            return this[_value];

        },

        set value(value) {

            this[_value] = value;
            prefs.setCharPref(this[_domain], value);
            this[_handleChange]();

            return value;

        },

        [_init](type, name, descriptor) {

            const domain = getPreferenceDomain(type, name);

            this[_name] = name;
            this[_type] = type;
            this[_domain] = domain;
            this[_watchers] = new Set();
            this[_descriptor] = descriptor;

            return this;

        },

        /**
         * @param {function():void} watcher
         */
        watch(watcher) { this[_watchers].add(watcher); },

        /**
         * @param {function():void} watcher
         */
        stopWatching(watcher) { this[_watchers].delete(watcher); },

        [_handleChange]() { for (let fn of this[_watchers]) fn(); }

    };

    const ChildPreference = {

        __proto__: Preference,

        get parent() { return this[_parent]; },

        get configurable() {

            if (!(_configurable in this))
                this[_configurable] = this[_parent].value === 'custom';

            return this[_configurable];

        },

        get value() {

            if (!(_value in this) && !this.configurable)
                this[_value] = this[_descriptor].presets[this[_parent].value];

            return super.value;

        },

        set value(value) {

            if (!this.configurable) return value;

            return super.value = value;

        },

        [_init](type, name, descriptor) {

            super[_init](type, name, descriptor);

            const parent = this[_parent] =
                genericPreferences.get(descriptor.parentPref);

            parent.watch(() => {

                const oldValue = this[_value];
                const oldConfigurability = this[_configurable];

                delete this[_value];
                delete this[_configurable];

                if (oldConfigurability !== this.configurable ||
                    oldValue !== this.value) this[_handleChange]();

            });

            return this;

        }

    };

    return {
        main,
        end,
        setup,
        clean,
        getSpecificPreferences,
        getPreferences,
        isChildPreference
    };

    var genericPreferences;
    var specificPreferences;

    function main() {

        genericPreferences = new Map();
        specificPreferences = new Map();

        for (let [type, instances, descriptors] of [
            ['generic', genericPreferences, GENERIC_PREFS],
            ['specific', specificPreferences, SPECIFIC_PREFS]
        ])
            for (let [name, descr] of descriptors) {
                const isChildPref = 'parentPref' in descr;
                const prefProto = isChildPref ? ChildPreference : Preference;
                const pref = Object.create(prefProto)[_init](type, name, descr);
                instances.set(name, pref);
            }

    }

    function end() {

        genericPreferences = null;
        specificPreferences = null;

    }

    function setup() {

        for (let [type, descriptors] of [
            ['generic', GENERIC_PREFS],
            ['specific', SPECIFIC_PREFS]
        ])
            for (let [name, descr] of descriptors) {
                const defaultOption = descr.options[0];
                const domain = getPreferenceDomain(type, name);
                prefs.setCharPref(domain, defaultOption);
            }

    }

    function clean() { prefs.deleteBranch(AIT_PREFS_DOMAIN); }

    function* getSpecificPreferences() {

        yield* specificPreferences.values();

    }

    function* getGenericPreferences() {

        yield* genericPreferences.values();

    }

    function* getPreferences() {

        yield* getGenericPreferences();
        yield* getSpecificPreferences();

    }

    function isChildPreference(obj) {

        return ChildPreference.isPrototypeOf(obj);

    }

    /**
     * @param {string} type
     * @param {string} name
     */
    function getPreferenceDomain(type, name) {
        const camelCasedName = name.replace(/-[a-z]/g, m => m.toUpperCase());
        return `${AIT_PREFS_DOMAIN}.${type}.${camelCasedName}`;
    }

})();

/* -- preferences panel handling module ------------------------------------- */

// The integration preferences panel module has the job to populate the
// preferences user interface with all the preferences of the integration.

const IntegrationPrefsPanel = (() => {

    return { main, end, load, unload };

    var unloadListenersCollections;

    function main() {

        unloadListenersCollections = new WeakMap();

    }

    function end() {

        unloadListenersCollections = null;

    }

    function load(win) {

        var unloaded = false;
        const doc = win.document;
        const unloadListeners = [() => { unloaded = true; }];

        unloadListenersCollections.set(win, unloadListeners);

        new Promise((onceDocumentLoads) => {

            if (doc.readyState === 'complete') onceDocumentLoads();

            else doc.addEventListener('readystatechange', function listenr() {

                if (unloaded || doc.readyState === 'complete')
                    doc.removeEventListener('readystatechange', listenr);

                if (!unloaded && doc.readyState === 'complete')
                    onceDocumentLoads();

            });

        }).then(() => new Promise((onceDisplayPaneExists) => {

            // In each iteration the delay will be incremented by 1ms. This
            // is done to minimize the performance impact of the sniffing
            // routine.
            var delay = 0;

            (function sniffer() {

                if (unloaded) return;

                const displayPane =
                    doc.firstElementChild.preferencePanes &&
                    doc.firstElementChild.preferencePanes.paneDisplay;

                if (displayPane) onceDisplayPaneExists(displayPane);
                else win.setTimeout(sniffer, delay++);

            })();

        })).then((displayPane) => new Promise((onceDisplayPaneLoads) => {

            if (unloaded) return;

            if (win.location.hash === '#aitTab')
                doc.firstElementChild.showPane(displayPane);

            if (displayPane.loaded) onceDisplayPaneLoads(displayPane);

            else displayPane.addEventListener('paneload', function listener() {

                displayPane.removeEventListener('paneload', listener);

                if (unloaded) return;

                onceDisplayPaneLoads(displayPane);

            });

        })).then(() => new Promise((onceNecessaryElemsExist) => {

            // In each iteration the delay will be incremented by 1ms. This
            // is done to minimize the performance impact of the sniffing
            // routine.
            var delay = 0;

            (function sniffer() {

                if (unloaded) return;

                // Try to retrieve the necessary elements for initializing the
                // preferences panel. If they don't yet exist, postpone
                // initialization.

                const tabsElem = doc.getElementById('displayPrefsTabs');

                if (tabsElem === null) {
                    // #displayPrefsTabs does not exist, try again later.
                    win.setTimeout(sniffer, delay++);
                    return;
                }

                const panelsElem = doc.getElementById('displayPrefsPanels');

                if (panelsElem === null) {
                    // #displayPrefsPanels does not exist, try again later.
                    win.setTimeout(sniffer, delay++);
                    return;
                }

                // #displayPrefsTabs and #displayPrefsPanels both exist
                onceNecessaryElemsExist([tabsElem, panelsElem]);

            })();

        })).then(([tabsElem, panelsElem]) => {

            if (unloaded) return;

            handleTabInitialization(tabsElem);
            handleTabPanelInitialization(panelsElem);

        });

        function handleTabInitialization(tabsElem) {

            const tab = doc.createElement('tab');

            tab.setAttribute('id', 'aitTab');
            tab.setAttribute('label', 'Arc Integration');
            tabsElem.appendChild(tab);

            win.requestAnimationFrame(() => {

                if (win.location.hash === '#aitTab') tab.click();

            });

            unloadListeners.push(() => { tab.remove(); });

        }

        function handleTabPanelInitialization(panelsElem) {

            const tabpanel = doc.createElement('tabpanel');
            const form = doc.createElementNS(XHTMLNS, 'form');
            const divs = new WeakMap();

            unloadListeners.push(() => { tabpanel.remove(); });

            tabpanel.setAttribute('id', 'aitPrefsPanel');
            tabpanel.setAttribute('orient', 'vertical');

            Object.assign(form.style, {
                height: '300px',
                display: 'block',
                overflowY: 'scroll',
                border: `${1 / win.devicePixelRatio}px solid rgba(20,20,20,0.1)`
            });

            const prefs = Array.from(IntegrationPrefs.getPreferences());

            for (let pref of prefs) {
                const div = doc.createElementNS(XHTMLNS, 'div');
                divs.set(pref, div);
            }

            prefs.forEach((pref) => {

                const { type, name } = pref;
                const div = divs.get(pref);
                const span = doc.createElementNS(XHTMLNS, 'span');
                const inputName = `${type}_${name}`;

                span.textContent = `${toCapitalizedWords(name)}:`;
                div.appendChild(span);

                Object.assign(span.style, {
                    display: 'block',
                    overflow: 'hidden',
                    transition: 'opacity 300ms ease, height 300ms ease',
                    lineHeight: '1.3em'
                });

                Object.assign(div.style, {
                    marginLeft: '1ch',
                    transition: 'opacity 300ms ease'
                });

                pref.options.forEach((value) => {

                    const input = doc.createElementNS(XHTMLNS, 'input');
                    const label = doc.createElementNS(XHTMLNS, 'label');
                    const txt = doc.createTextNode(toCapitalizedWords(value));

                    input.type = 'radio';
                    input.name = inputName;

                    input.addEventListener('change', () => {

                        pref.value = value;

                    });

                    label.appendChild(input);
                    label.appendChild(txt);

                    span.appendChild(label);

                    pref.watch(onUpdate);
                    onUpdate();

                    unloadListeners.push(() => {

                        pref.stopWatching(onUpdate);

                    });

                    if (IntegrationPrefs.isChildPreference(pref)) {

                        const onChildPrefUpdate = () => {

                            if (pref.configurable)
                                input.removeAttribute('disabled');

                            else input.setAttribute('disabled', '');

                        };

                        pref.watch(onChildPrefUpdate);
                        onChildPrefUpdate();

                        unloadListeners.push(() => {

                            pref.stopWatching(onChildPrefUpdate);

                        });

                    }

                    function onUpdate() {

                        input.checked = value === pref.value;

                    }

                });

                if (IntegrationPrefs.isChildPreference(pref)) {

                    const onUpdate = () => {

                        div.style.opacity =
                            pref.configurable ? null : '0.3';

                    };

                    pref.watch(onUpdate);

                    unloadListeners.push(() => {

                        pref.stopWatching(onUpdate);

                    });

                    onUpdate();

                    const parent = pref.parent;

                    if (IntegrationPrefs.isChildPreference(parent)) {

                        const onUpdate = () => {

                            span.style.height =
                                parent.configurable ? '1.3em' : '0';

                            span.style.opacity =
                                parent.configurable ? null : '0';

                        };

                        parent.watch(onUpdate);

                        unloadListeners.push(() => {

                            parent.stopWatching(onUpdate);

                        });

                        onUpdate();

                    }

                    divs.get(parent).appendChild(div);

                }

                else form.appendChild(div);

            });

            tabpanel.appendChild(form);
            panelsElem.appendChild(tabpanel);

        }

    }

    function unload(win) {

        for (let fn of unloadListenersCollections.get(win)) fn();

    }

    /**
     * @param   {string} dashCasedWords
     * @returns {string}
     *
     * toCapitalizedWords('foo-bar-baz') -> 'Foo Bar Baz'
     */
    function toCapitalizedWords(dashCasedWords) {

        return dashCasedWords[0].toUpperCase() +
               dashCasedWords.substr(1)
                   .replace(/-[a-z]/g, m => ` ${m[1].toUpperCase()}`);

    }

})();
