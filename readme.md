# Arc Theme integration for Thunderbird (alpha v0.1.0)

![alt tag](preview.png)

> Tested in Thunderbird 45.6.0, GNOME 45.6.0, Debian GNU/Linux 9, Surface Pro 4, Arc Theme 20161119-1.

> Stability in other versions is not guaranteed, but you can still try.

## Features

 - Changes the appearance of tabs in the application to match the ones found in the official [Arc Firefox Theme](https://github.com/horst3180/arc-firefox-theme).

It does not change the icons (yet?).

## Installation

As of now, this is just one stylesheet that needs to be injected in the application. In the future I might package it as an add-on, but currently I can't be bothered to do it.

 - Go to menu -> Add-ons -> Search;
 - search for "[Stylish](https://addons.mozilla.org/en-US/thunderbird/addon/stylish/)";
 - install it;
 - restart Thunderbird;
 - in the Add-ons page there should be a new section called "User Styles", click it;
 - click "Write New Style", a new window where you can write the style should pop up;
 - copy and paste in the big text-box of that window [the content of the style.css file in this repository](style.css);
 - write "Arc" in Name input;
 - click "Save";
 - enjoy.

## License

The content in this repository is licensed under GPLv3.

## History

  - 0.1.0 2017/03/05: Initial release