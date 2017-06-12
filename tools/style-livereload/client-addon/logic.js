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

requestAnimationFrame(function f() {

    for (let style of document.querySelectorAll(':root > style')) {

        const css = style.textContent;

        if (css.includes('@import url("chrome://ait/content/styling.css")')) {
            handleStyle(style);
            return;
        }

    }

    setTimeout(f, 250);

});

/**
 * @param {HTMLStyleElement} style
 */
function handleStyle(style) {

    if (css !== null) onStyleUpdate();
    events.addEventListener('update', onStyleUpdate);

    function onStyleUpdate() { style.textContent = css; }

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
