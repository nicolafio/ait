{

    const host = 'localhost';
    const port = 8001;
    const address = `ws://${host}:${port}`;
    const retryDelay = 2000;
    const events = new DocumentFragment();
    let css = null;

    const main = () => {

        const onFrame = () => {

            if ('AIT' in window) {
                if (AIT.ready) handleIntegration();
                else AIT.events.addEventListener('ready', handleIntegration);
            }
            else requestAnimationFrame(onFrame);

        };

        attemptConnection();
        onFrame();

    };

    const handleIntegration = () => {

        /**
         * @param {CustomEvent} event
         */
        const onIconInclusion = (event) => {

            handleStyle(event.detail.svgDocument.querySelector('.ait-style'));

        };

        handleStyle(AIT.style);
        AIT.events.addEventListener('icon-included', onIconInclusion);


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

        const socket = new WebSocket(address);

        /**
         * @param {MessageEvent} event
         */
        const onMessage = (event) => {

            css = atob(event.data);
            events.dispatchEvent(new CustomEvent('update'));

        };

        const onceConnectionEnds = () => {

            socket.close();
            setTimeout(attemptConnection, retryDelay);
            socket.removeEventListener('close', onceConnectionEnds);
            socket.removeEventListener('error', onceConnectionEnds);
            socket.removeEventListener('message', onMessage);

        };

        socket.addEventListener('close', onceConnectionEnds);
        socket.addEventListener('error', onceConnectionEnds);
        socket.addEventListener('message', onMessage);

    };

    main();

}