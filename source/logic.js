/*
 ~  Copyright (c) 2017 Nicola Fiori (JD342)
 ~
 ~  This file is part of the Arc Integration for Thunderbird, licensed under
 ~  the terms of the GNU General Public License 3.0.
 ~
 */

{

    /** @type {HTMLElement} */
    let icons;

    /** @type {HTMLStyleElement} */
    let style;

    /** @type {Promise} */
    let ready;

    const main = () => {

        init();

        // Icons from Arc Theme/Arc Icon Theme/Adwaita Icon Theme

        addIcon('search', 'search.svg');
        addIcon('search-active', 'search.svg');
        addIcon('search-searchbox', 'search.svg');

        addIcon('close', 'close.svg');
        addIcon('close-hover', 'close.svg');
        addIcon('close-active', 'close.svg');

        addIcon('task', 'task.svg');
        addIcon('task-active', 'task.svg');

        addIcon('avatar', 'avatar.svg');
        addIcon('avatar-active', 'avatar.svg');

        addIcon('lock', 'lock.svg');
        addIcon('lock-active', 'lock.svg');

        addIcon('new', 'new.svg');
        addIcon('new-active', 'new.svg');

        addIcon('save', 'save.svg');
        addIcon('save-active', 'save.svg');

        addIcon('delete', 'delete.svg');
        addIcon('delete-active', 'delete.svg');

        addIcon('sync', 'sync.svg');
        addIcon('sync-active', 'sync.svg');

        addIcon('unindent', 'unindent.svg');
        addIcon('unindent-active', 'unindent.svg');

        addIcon('indent', 'indent.svg');
        addIcon('indent-active', 'indent.svg');

        addIcon('center', 'center.svg');
        addIcon('center-active', 'center.svg');

        addIcon('right', 'right.svg');
        addIcon('right-active', 'right.svg');

        addIcon('italic', 'italic.svg');
        addIcon('italic-active', 'italic.svg');

        addIcon('folder', 'folder.svg');
        addIcon('folder-active', 'folder.svg');

        addIcon('crossed', 'crossed.svg');
        addIcon('crossed-active', 'crossed.svg');

        addIcon('underline', 'underline.svg');
        addIcon('underline-active', 'underline.svg');

        addIcon('attachment', 'attachment.svg');
        addIcon('attachment-active', 'attachment.svg');

        addIcon('forward', 'forward.svg');
        addIcon('forward-active', 'forward.svg');

        addIcon('mail', 'mail.svg');
        addIcon('mail-active', 'mail.svg');

        addIcon('non-starred', 'starred.svg');
        addIcon('non-starred-active', 'starred.svg');

        addIcon('check', 'check.svg');
        addIcon('check-active', 'check.svg');

        addIcon('menu', 'menu.svg');
        addIcon('menu-active', 'menu.svg');

        addIcon('printer', 'printer.svg');
        addIcon('printer-active', 'printer.svg');

        addIcon('starred', 'starred.svg');
        addIcon('starred-active', 'starred.svg');

        addIcon('tag', 'tag.svg');
        addIcon('tag-active', 'tag.svg');

        addIcon('message', 'message.svg');
        addIcon('message-active', 'message.svg');

        addIcon('trash', 'trash.svg');
        addIcon('trash-active', 'trash.svg');

        addIcon('calendar', 'calendar.svg');
        addIcon('calendar-active', 'calendar.svg');

        addIcon('document', 'document.svg');
        addIcon('document-active', 'document.svg');

        addIcon('down', 'down.svg');
        addIcon('down-active', 'down.svg');

        addIcon('properties', 'properties.svg');
        addIcon('properties-active', 'properties.svg');

        addIcon('frame', 'frame.svg');
        addIcon('frame-active', 'frame.svg');

        addIcon('reply', 'reply.svg');
        addIcon('reply-active', 'reply.svg');

        addIcon('copy', 'copy.svg');
        addIcon('copy-active', 'copy.svg');

        addIcon('cut', 'cut.svg');
        addIcon('cut-active', 'cut.svg');

        addIcon('paste', 'paste.svg');
        addIcon('paste-active', 'paste.svg');

        addIcon('schedule', 'schedule.svg');
        addIcon('schedule-active', 'schedule.svg');

        addIcon('replyall', 'replyall.svg');
        addIcon('replyall-active', 'replyall.svg');

        addIcon('junk', 'junk.svg');
        addIcon('junk-active', 'junk.svg');

        addIcon('unjunk', 'unjunk.svg');
        addIcon('unjunk-active', 'unjunk.svg');

        addIcon('register', 'register.svg');
        addIcon('register-active', 'register.svg');

        // Restyled stock icons from Thunderbird

        addGlobalIcon('inbox', 'chrome://messenger/skin/icons/mail-toolbar.svg#getmsg');
        addGlobalIcon('inbox-active', 'chrome://messenger/skin/icons/mail-toolbar.svg#getmsg');

        addGlobalIcon('write', 'chrome://messenger/skin/icons/mail-toolbar.svg#newmsg');
        addGlobalIcon('write-active', 'chrome://messenger/skin/icons/mail-toolbar.svg#newmsg');

        addGlobalIcon('filter', 'chrome://messenger/skin/icons/mail-toolbar.svg#filter');
        addGlobalIcon('filter-active', 'chrome://messenger/skin/icons/mail-toolbar.svg#filter');

    };

    const init = () => {

        ready = new Promise((resolve) => {

            const onFrame = () => {

                if (document.readyState === 'interactive' ||
                    document.readyState === 'complete') {
                    onceReady();
                }
                else requestAnimationFrame(onFrame);

            };

            const onceReady = () => {

                const root = document.firstElementChild;
                icons = root.querySelector('.ait-icons');
                style = root.querySelector('.ait-style');
                resolve();

            };

            requestAnimationFrame(onFrame);

        });

    };

    /**
     * @param {string} name
     * @param {string} relativePath
     */
    const addIcon = (name, relativePath) => {

        addGlobalIcon(name, `chrome://ait/content/icons/${relativePath}`);

    };

    /**
     * @param {string} name
     * @param {string} path
     */
    const addGlobalIcon = (name, path) => {

        /** @type {HTMLObjectElement} */
        const icon = document.createElementNS(
            'http://www.w3.org/1999/xhtml',
            'object'
        );

        Object.assign(icon, {
            id: `ait-${name}-icon`,
            type: 'image/svg+xml',
            data: path
        });

        ready.then(() => {

            const onFrame = () => {

                const svgDocument = icon.contentDocument;

                if (svgDocument !== null &&
                    svgDocument.firstElementChild !== null) {
                    onceSVGDocmentLoads();
                }
                else requestAnimationFrame(onFrame);

            };

            const onceSVGDocmentLoads = () => {

                const iconStyle = style.cloneNode(true);
                const svgRoot = icon.contentDocument.firstElementChild;
                svgRoot.appendChild(iconStyle);
                svgRoot.setAttribute('ait-icon', name);

            };

            icons.appendChild(icon);
            requestAnimationFrame(onFrame);

        });

    };

    main();

}
