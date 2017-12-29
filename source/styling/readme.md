# /source/windows-styling/

This folder contains all the styling that is going to be applied in every window on top of the default theme.

The entry point for the SCSS compiler is `index.scss`, the other .scss files are style sheets that apply styling in specific sections of the windows.

The build script will compile `index.scss` and all its imported dependencies to a file named `styling.css` and insert it into the .xpi file.
