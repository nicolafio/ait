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

window.AIT = {

    main() {

        AIT.init();

        // Icons from Arc Theme/Arc Icon Theme/Adwaita Icon Theme

        AIT.addIcon('search', 'search.svg');
        AIT.addIcon('search-active', 'search.svg');
        AIT.addIcon('search-searchbox', 'search.svg');

        AIT.addIcon('close', 'close.svg');
        AIT.addIcon('close-hover', 'close.svg');
        AIT.addIcon('close-active', 'close.svg');

        AIT.addIcon('task', 'task.svg');
        AIT.addIcon('task-active', 'task.svg');

        AIT.addIcon('avatar', 'avatar.svg');
        AIT.addIcon('avatar-active', 'avatar.svg');

        AIT.addIcon('lock', 'lock.svg');
        AIT.addIcon('lock-active', 'lock.svg');

        AIT.addIcon('new', 'new.svg');
        AIT.addIcon('new-active', 'new.svg');

        AIT.addIcon('save', 'save.svg');
        AIT.addIcon('save-active', 'save.svg');

        AIT.addIcon('delete', 'delete.svg');
        AIT.addIcon('delete-active', 'delete.svg');

        AIT.addIcon('sync', 'sync.svg');
        AIT.addIcon('sync-active', 'sync.svg');

        AIT.addIcon('unindent', 'unindent.svg');
        AIT.addIcon('unindent-active', 'unindent.svg');

        AIT.addIcon('indent', 'indent.svg');
        AIT.addIcon('indent-active', 'indent.svg');

        AIT.addIcon('center', 'center.svg');
        AIT.addIcon('center-active', 'center.svg');

        AIT.addIcon('right', 'right.svg');
        AIT.addIcon('right-active', 'right.svg');

        AIT.addIcon('italic', 'italic.svg');
        AIT.addIcon('italic-active', 'italic.svg');

        AIT.addIcon('folder', 'folder.svg');
        AIT.addIcon('folder-active', 'folder.svg');

        AIT.addIcon('crossed', 'crossed.svg');
        AIT.addIcon('crossed-active', 'crossed.svg');

        AIT.addIcon('underline', 'underline.svg');
        AIT.addIcon('underline-active', 'underline.svg');

        AIT.addIcon('attachment', 'attachment.svg');
        AIT.addIcon('attachment-active', 'attachment.svg');

        AIT.addIcon('forward', 'forward.svg');
        AIT.addIcon('forward-active', 'forward.svg');

        AIT.addIcon('mail', 'mail.svg');
        AIT.addIcon('mail-active', 'mail.svg');

        AIT.addIcon('non-starred', 'starred.svg');
        AIT.addIcon('non-starred-active', 'starred.svg');

        AIT.addIcon('check', 'check.svg');
        AIT.addIcon('check-active', 'check.svg');

        AIT.addIcon('menu', 'menu.svg');
        AIT.addIcon('menu-active', 'menu.svg');

        AIT.addIcon('printer', 'printer.svg');
        AIT.addIcon('printer-active', 'printer.svg');

        AIT.addIcon('starred', 'starred.svg');
        AIT.addIcon('starred-active', 'starred.svg');

        AIT.addIcon('tag', 'tag.svg');
        AIT.addIcon('tag-active', 'tag.svg');

        AIT.addIcon('message', 'message.svg');
        AIT.addIcon('message-active', 'message.svg');

        AIT.addIcon('trash', 'trash.svg');
        AIT.addIcon('trash-active', 'trash.svg');

        AIT.addIcon('calendar', 'calendar.svg');
        AIT.addIcon('calendar-active', 'calendar.svg');

        AIT.addIcon('document', 'document.svg');
        AIT.addIcon('document-active', 'document.svg');

        AIT.addIcon('down', 'down.svg');
        AIT.addIcon('down-active', 'down.svg');

        AIT.addIcon('properties', 'properties.svg');
        AIT.addIcon('properties-active', 'properties.svg');

        AIT.addIcon('frame', 'frame.svg');
        AIT.addIcon('frame-active', 'frame.svg');

        AIT.addIcon('reply', 'reply.svg');
        AIT.addIcon('reply-active', 'reply.svg');

        AIT.addIcon('copy', 'copy.svg');
        AIT.addIcon('copy-active', 'copy.svg');

        AIT.addIcon('cut', 'cut.svg');
        AIT.addIcon('cut-active', 'cut.svg');

        AIT.addIcon('paste', 'paste.svg');
        AIT.addIcon('paste-active', 'paste.svg');

        AIT.addIcon('schedule', 'schedule.svg');
        AIT.addIcon('schedule-active', 'schedule.svg');

        AIT.addIcon('replyall', 'replyall.svg');
        AIT.addIcon('replyall-active', 'replyall.svg');

        AIT.addIcon('junk', 'junk.svg');
        AIT.addIcon('junk-active', 'junk.svg');

        AIT.addIcon('unjunk', 'unjunk.svg');
        AIT.addIcon('unjunk-active', 'unjunk.svg');

        AIT.addIcon('register', 'register.svg');
        AIT.addIcon('register-active', 'register.svg');

        // Restyled stock icons from Thunderbird

        AIT.addGlobalIcon('inbox', 'chrome://messenger/skin/icons/mail-toolbar.svg#getmsg');
        AIT.addGlobalIcon('inbox-active', 'chrome://messenger/skin/icons/mail-toolbar.svg#getmsg');

        AIT.addGlobalIcon('write', 'chrome://messenger/skin/icons/mail-toolbar.svg#newmsg');
        AIT.addGlobalIcon('write-active', 'chrome://messenger/skin/icons/mail-toolbar.svg#newmsg');

        AIT.addGlobalIcon('filter', 'chrome://messenger/skin/icons/mail-toolbar.svg#filter');
        AIT.addGlobalIcon('filter-active', 'chrome://messenger/skin/icons/mail-toolbar.svg#filter');

    },

    init() {

        const root = document.firstElementChild;
        AIT._icons = root.querySelector('.ait-icons');
        AIT._style = root.querySelector('.ait-style');

    },

    addIcon(name, relativePath) {

        AIT.addGlobalIcon(name, `chrome://ait/content/icons/${relativePath}`);

    },

    addGlobalIcon(name, path) {

        const icon = document.createElementNS(
            'http://www.w3.org/1999/xhtml',
            'object'
        );

        icon.setAttribute('id', `ait-${name}-icon`);
        icon.setAttribute('type', 'image/svg+xml');
        icon.setAttribute('data', path);
        AIT._icons.appendChild(icon);
        requestAnimationFrame(onFrame);

        function onFrame() {

            if (icon.contentDocument &&
                icon.contentDocument.readyState === 'complete') onceIconLoads();
            else requestAnimationFrame(onFrame);

        }

        function onceIconLoads() {

            const iconDocument = icon.contentDocument;
            const iconSVGRoot = iconDocument.firstElementChild;

            iconSVGRoot.setAttribute(`ait-${name}`, '');

            const iconStyle = iconDocument.createElementNS(
                'http://www.w3.org/1999/xhtml',
                'style'
            );

            iconStyle.textContent = AIT._style.textContent;
            iconSVGRoot.appendChild(iconStyle);

        }

    }

};

(() => {

    document.addEventListener('readystatechange', onStateUpdate);
    onStateUpdate();

    function onStateUpdate() {
        if (document.readyState === 'complete') {
            document.removeEventListener('readystatechange', onStateUpdate);
            AIT.main();
        }
    }

})();
