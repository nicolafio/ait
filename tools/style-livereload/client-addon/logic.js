/*
 ~  Copyright (c) 2017 Nicola Fiori (JD342)
 ~
 ~  This file is part of the Arc Integration for Thunderbird, licensed under
 ~  the terms of the GNU General Public License 3.0.
 ~
 */

const host = 'localhost';
const port = 8001;
const address = `ws://${host}:${port}`;
const retryDelay = 500;
const events = new DocumentFragment();
let css = null;

attemptConnection();

promiseInclusion('.ait-style').then(handleStyle);

promiseInclusion('.ait-icons').then((icons) => {

    const observer = new MutationObserver((records) => {

        records.forEach((record) => {

            [...record.addedNodes].forEach(handleIcon);

        });

    });

    [...icons.children].forEach(handleIcon);
    observer.observe(icons, { childList: true });

});

/**
 * @param   {string} query
 * @returns {Promise<Element>}
 */
function promiseInclusion(query) {

    return new Promise((resolve) => {

        requestAnimationFrame(onFrame);

        function onFrame() {

            const element = document.querySelector(query);

            if (element !== null) resolve(element);
            else requestAnimationFrame(onFrame);

        }

    });

}

/**
 * @param {HTMLObjectElement} icon
 */
function handleIcon(icon) {

    requestAnimationFrame(onFrame);

    function onFrame() {

        const svgDocument = icon.contentDocument;

        if (svgDocument !== null &&
            svgDocument.firstElementChild !== null) {
            requestAnimationFrame(onceDocumentIsReady);
        }
        else requestAnimationFrame(onFrame);

    }

    function onceDocumentIsReady() {

        handleStyle(icon.contentDocument.querySelector('.ait-style'));

    }

}

/**
 * @param {HTMLStyleElement} style
 */
function handleStyle(style) {

    if (css !== null) onStyleUpdate();
    events.addEventListener('update', onStyleUpdate);

    function onStyleUpdate() {

        style.textContent = css;

    }

}

function attemptConnection() {

    const socket = new WebSocket(address);
    socket.addEventListener('close', onceConnectionAborts);
    socket.addEventListener('error', onceConnectionAborts);
    socket.addEventListener('message', onMessage);

    /**
     * @param {MessageEvent} event
     */
    function onMessage(event) {

        css = atob(event.data);
        events.dispatchEvent(new CustomEvent('update'));

    }

    function onceConnectionAborts() {

        socket.close();
        socket.removeEventListener('close', onceConnectionAborts);
        socket.removeEventListener('error', onceConnectionAborts);
        socket.removeEventListener('message', onMessage);
        setTimeout(attemptConnection, retryDelay);

    }

}