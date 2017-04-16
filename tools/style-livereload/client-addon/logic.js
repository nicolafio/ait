/*
 ~  Copyright (c) 2017 Nicola Fiori (JD342)
 ~
 ~  This file is part of the Arc Integration for Thunderbird, licensed under
 ~  the terms of the GNU General Public License 3.0.
 ~
 */

{

    const host = 'localhost';
    const port = 8001;
    const address = `ws://${host}:${port}`;
    const retryDelay = 500;
    const events = new DocumentFragment();
    let css = null;

    const main = () => {

        attemptConnection();
        promiseInclusion('.ait-style').then(handleStyle);

        promiseInclusion('.ait-icons').then((icons) => {

            const observer = new MutationObserver((records) => {

                records.forEach((record) => {

                    Array.from(record.addedNodes).forEach(handleIcon);

                });

            });

            Array.from(icons.children).forEach(handleIcon);
            observer.observe(icons, { childList: true });

        });

    };

    /**
     * @param {string} query
     * @returns {Promise<HTMLElement>}
     */
    const promiseInclusion = (query) => new Promise((resolve) => {

        const onFrame = () => {

            const element = document.querySelector(query);
            if (element !== null) resolve(element);
            else requestAnimationFrame(onFrame);

        };

        requestAnimationFrame(onFrame);

    });

    /**
     * @param {HTMLObjectElement} icon
     */
    const handleIcon = (icon) => {

        const onFrame = () => {

            const svgDocument = icon.contentDocument;

            if (svgDocument !== null &&
                svgDocument.firstElementChild !== null) {
                requestAnimationFrame(onceDocumentIsReady);
            }
            else requestAnimationFrame(onFrame);

        };

        const onceDocumentIsReady = () => {

            const svgDocument = icon.contentDocument;

            /** @type {HTMLStyleElement} */
            const style = svgDocument.querySelector('.ait-style');

            handleStyle(style);

        };

        requestAnimationFrame(onFrame);

    };

    /**
     * @param {HTMLStyleElement} style
     */
    const handleStyle = (style) => {

        const onStyleUpdate = () => { style.textContent = css; };

        if (css !== null) onStyleUpdate();
        events.addEventListener('update', onStyleUpdate);

    };

    const attemptConnection = () => {

        /**
         * @param {MessageEvent} event
         */
        const onMessage = (event) => {

            css = atob(event.data);
            events.dispatchEvent(new CustomEvent('update'));

        };

        const onceConnectionAborts = () => {

            socket.close();
            socket.removeEventListener('close', onceConnectionAborts);
            socket.removeEventListener('error', onceConnectionAborts);
            socket.removeEventListener('message', onMessage);
            setTimeout(attemptConnection, retryDelay);

        };

        const socket = new WebSocket(address);
        socket.addEventListener('close', onceConnectionAborts);
        socket.addEventListener('error', onceConnectionAborts);
        socket.addEventListener('message', onMessage);

    };

    main();

}