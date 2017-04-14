/*
 ~  Copyright (c) 2017 Nicola Fiori (JD342)
 ~
 ~  This file is part of the Arc Integration for Thunderbird.
 ~
 ~  The Arc Integration for Thunderbird is free software: you can
 ~  redistribute it and/or modify it under the terms of the
 ~  GNU General Public License Version 3 as published by the
 ~  Free Software Foundation.
 ~
 ~  The Arc Integration for Thunderbird is distributed in the hope
 ~  that it will be useful, but WITHOUT ANY WARRANTY; without even the
 ~  implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 ~  See the GNU General Public License for more details.
 ~
 ~  You should have received a copy of the GNU General Public License
 ~  along with the Arc Integration for Thunderbird.
 ~  If not, see <http://www.gnu.org/licenses/>.
 ~
 */

{

    window.AIT = {
        get events() { return events; },
        get icons() { return icons; },
        get style() { return style; },
        get ready() { return ready; }
    };

    const xhtmlns = 'http://www.w3.org/1999/xhtml';
    const documentRoot = document.firstElementChild;
    const events = new DocumentFragment();
    let ready = false;

    /** @type {HTMLElement} */
    let icons;

    /** @type {HTMLStyleElement} */
    let style;

    const main = () => {

        const onStateUpdate = () => {

            if (document.readyState === 'complete') {
                document.removeEventListener('readystatechange', onStateUpdate);
                onceDocumentIsReady();
            }

        };

        const onceDocumentIsReady = () => {

            icons = documentRoot.querySelector('.ait-icons');
            style = documentRoot.querySelector('.ait-style');

            ready = true;
            events.dispatchEvent(new CustomEvent('ready'));

            includeIcons();

        };

        document.addEventListener('readystatechange', onStateUpdate);
        onStateUpdate();

    };

    const includeIcons = () => {

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

        const icon = document.createElementNS(xhtmlns, 'object');

        const onFrame = () => {

            if (icon.contentDocument &&
                icon.contentDocument.readyState === 'complete') onceIconLoads();
            else requestAnimationFrame(onFrame);

        };

        const onceIconLoads = () => {

            const svgDocument = icon.contentDocument;
            const svgRoot = svgDocument.firstElementChild;
            const includedInit = { detail: { svgDocument } };
            const included = new CustomEvent('icon-included', includedInit);

            svgRoot.setAttribute(`ait-${name}`, '');
            svgRoot.appendChild(style.cloneNode(true));
            events.dispatchEvent(included);

        };

        icon.setAttribute('id', `ait-${name}-icon`);
        icon.setAttribute('type', 'image/svg+xml');
        icon.setAttribute('data', path);
        icons.appendChild(icon);
        requestAnimationFrame(onFrame);

    };

    main();

}
