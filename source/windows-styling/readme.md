# /source/windows-styling/

This folder contains all the styling that is going to be applied in every window on top of the default theme.

The entry point for the SCSS compiler is `main.scss`, the other .scss files are style sheets that apply styling in specific components of the windows.

The build script will compile `main.css` and all its imported dependencies to a file named `styling.css` and insert it into the .xpi file.