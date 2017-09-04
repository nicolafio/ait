# /tools/

This folder contains scripts used for development. Some scripts may require
some external tools to be installed in the system.

The following table summarizes what external tools are used.

<table>
    <thead>
        <tr>
            <td>Name</td>
            <td>Description</td>
            <td>How to install it (Debian 9)</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <a href="http://www.info-zip.org/Zip.html"><code>zip</code></a>
            </td>
            <td>Used for creating .xpi files</td>
            <td><code># apt install zip</code></td>
        </tr>
        <tr>
            <td>
                <a href="https://github.com/sass/sassc"><code>sassc</code></a>
            </td>
            <td>SCSS compiler</td>
            <td><code># apt install sassc</code></td>
        </tr>
        <tr>
            <td>
                <a href="http://xmlstar.sourceforge.net/"><code>xmlstarlet</code></a>
            </td>
            <td>XML manipulator</td>
            <td><code># apt install xmlstarlet</code></td>
        </tr>
        <tr>
            <td><a href="http://websocketd.com"><code>websocketd</code></a></td>
            <td>
                Used by the live-reloader as a means of communication between
                the client addon and the server
            </td>
            <td>
                Latest releases can be found
                <a href="https://github.com/joewalnes/websocketd/releases">
                    here
                </a>
            </td>
        </tr>
        <tr>
            <td>
                <a href="https://github.com/rvoicilas/inotify-tools/wiki">
                    <code>inotifywait</code>
                </a>
            </td>
            <td>
                Used by the live-reloader to watch the source content for
                changes
            </td>
            <td><code># apt install inotify-tools</code></td>
        </tr>
        <tr>
            <td>
                <a href="https://nodejs.org">NodeJS (<code>nodejs</code>)</a>
            </td>
            <td>Runtime needed for the parameters verifier</td>
            <td>
                <code># apt install nodejs</code><br>
                <i style="font-size:0.8em">
                    Debian repositories have ancient versions of NodeJS.
                    <a href="https://github.com/nodesource/distributions#installation-instructions">
                        Nodesource
                    </a>
                    repositories offer more recent versions.
                </i>
            </td>
        </tr>
    </tbody>
</table>
