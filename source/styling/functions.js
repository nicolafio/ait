/*
 ~  Copyright (c) 2017-2019 Nicola Fiori
 ~
 ~  This file is part of the Arc Integration for Thunderbird, licensed under
 ~  the terms of the GNU General Public License 3.0.
 ~
 */

// This file contains custom functions that are going to be used in the SASS
// style sheets.

/* eslint-env node */

const { readFileSync, readdirSync } = require('fs');
const { join } = require('path');

const cheerio = require('cheerio');

const sass = require('node-sass');
const SassString = sass.types.String;
const SassNumber = sass.types.Number;
const SassColor = sass.types.Color;
const SassList = sass.types.List;

module.exports = {

    // Outputs a list containing all the names of the icons that are contained
    // in the specified folder (eg. 16, 24, ...).
    //
    ['icon-names($dir)'](dir) {

        // Fetch icon names
        const d = dir.getValue();
        const path = join(__dirname, '..', 'icons', String(d));
        const files = readdirSync(path);
        const names = files.map(f => f.replace('.svg', ''));

        // Generate list
        const list = SassList(names.length);
        names.forEach((n, i) => { list.setValue(i, SassString(n)); });

        // Return result
        return list;

    },

    // Outputs an inline CSS URL for an icon, the resulting icon will have a
    // specified size and will optionally have a specified fill color.
    //
    ['icon($name, $dir, $fill: "")'](name, dir, fill) {

        // Read and parse original SVG
        const n = name.getValue();
        const d = dir.getValue();
        const path = join(__dirname, '..', 'icons', d, `${n}.svg`);
        const svg = readFileSync(path);
        const dom = cheerio.load(svg, { xmlMode: true });

        // Set fill color if specified
        if (fill instanceof SassColor) {
            const rgba = [fill.getR(), fill.getG(), fill.getB(), fill.getA()];
            const f = `rgba(${rgba.join(',')})`;
            const css = `circle, path, rect { fill: ${f} !important; }`;
            dom('svg').append(`<style>${css}</style>`);
        }

        // Generate CSS URL
        const resultingSVG = dom.xml();
        const encodedSVG = Buffer(resultingSVG).toString('base64');
        const cssURL = `url(data:image/svg+xml;base64,${encodedSVG})`;

        // Return result
        return SassString(cssURL);

    }

};