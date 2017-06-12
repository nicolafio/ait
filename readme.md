# Arc Theme integration for Thunderbird (alpha v0.4.1)

![alt tag](preview.png)

> Tested in Thunderbird 45.8.0, GNOME 3.22.3, Debian GNU/Linux 9, Surface Pro 4, Arc Theme 20161119-1.

> Stability in other versions is not guaranteed, but you can still try.

## Features

 - Changes the appearance of the tabs and the toolbox to match the look found in the official [Arc Firefox Theme](https://github.com/horst3180/arc-firefox-theme);
 - changes the appearance of the Lightning add-on to be in syntony with the overall look;
 - supports Light, Dark and Darker theme variants;
 - every specific part of the integration can be configured and/or disabled through the preferences panel at Preferences > Display > Arc Integration.

## Notes

_Because this project is still in alpha state, feedback is appreciated. Due to the lack of knowledge of how things work in Thunderbird, mess-ups may be very likely, therefore everyone is welcome to report any visual bug that might be found._

A major addition in the 0.4.0 version is support for "Dark" and "Darker" theme variants.
If you are using Arc Dark or Arc Darker as your OS theme, you should change the styling of the integration to match the theme variant.
You can switch to those variants by going to **Preferences > Display > Arc Integration** and tweaking the styling as you like.

Similarly to [Arc Firefox Theme](https://github.com/horst3180/arc-firefox-theme), this integration is meant to be used along with the official [Arc Theme](https://github.com/horst3180/arc-theme), you can however also use it with other operating systems and themes. If the integration is used with other OS theming, it is possible that some parts will look broken. It is possible to tweak or disable certain styling through the preferences panel.

<img height=300 src="variants.png"/>

> From up to down: Light, Dark and Darker theme variants

As of version 0.4.0 the majority the integration is done, but it still needs more polishing. Now the things that remain are the following:

 - Completing styling of the Lightning extension (calendar view, tasks view, side pane, minimonth view);
 - comleting styling of the mails view (buttons & views);
 - applying styling in the dialog for writing messages;
 - applying styling in the add-ons manager;
 - applying styling in the status bar.

## Installation

 - Download the latest release (.xpi file) from [here](https://github.com/JD342/arc-thunderbird-integration/releases);
 - In Thunderbird, go to menu -> Add-ons;
 - There should be a button with a gear icon on the left side of the "Search all add-ons" bar, click it;
 - Click "Install Add-on from file...";
 - Find and select the downloaded .xpi file and install it;
 - restart Thunderbird;
 - enjoy.

## License

The content in this repository is licensed under GPLv3.

## History

  - 0.4.1 2017/06/12
    - Fixed message body visibility bug
  - 0.4.0 2017/06/12
    - Added support for Dark and Darker theme variants
    - Included panel for configuring the integration in the preferences window
    - Optimized existing icons, and included new ones
    - Converted the add-on from overlayed XUL to XPCOM bootstrapped, removing the necessity to restart the application when the add-on is installed or removed
    - Applied styling in the Address Book window
    - Applied styling in the dialog used for creating or editing events or tasks in the Lightning extension
    - Applied styling in the calendar in the Lightning extension
    - Fixed compatibility issues in some external add-ons
    - Ported the styling source from CSS to LESS
  - 0.3.0 2017/04/02
    - Integrated several (but not all) icons
    - Dynamically restyled some stock icons in Thunderbird to match the general look and feel
    - Applied further style changes to the tab browser to match the official theme
    - Restyled Lightning task pane
    - Restyled buttons, fields and items in the toolbox
    - Applied some style tweaks in the mail page
    - Applied fancy borders and shadows in drop down menus in the toolbox
  - 0.2.0 2017/03/07
    - Integration packaged as an add-on
  - 0.1.0 2017/03/05
    - Initial release

## Credits

This integration contains work originating from:
 - [Arc Theme](https://github.com/horst3180/Arc-theme) by [horst3180](https://horst3180.deviantart.com/) (licensed under the terms of GPLv3);
 - [Arc Icon Theme](https://github.com/horst3180/arc-icon-theme) by [horst3180](https://horst3180.deviantart.com/) (licensed under the terms of GPLv3);
 - [Adwaita Icon Theme](https://github.com/GNOME/adwaita-icon-theme) by the [GNOME Project](https://www.gnome.org/) (licensed under the terms of either CCBYSAv3 or LGPLv3).

The icons were copied and altered to be used in the integration.

The color palette and overall look and feel comes from the Arc Theme.
