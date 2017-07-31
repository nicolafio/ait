# /tools/style-livereload/

The `script.sh` file will watch the style sheets in `source/window-styling` for changes and will automatically update the styling on every existing application's window targeted by the integration.

This can be very useful during development because it immediately shows the changes made in the style sheets without the need of building and reinstalling the whole extension again.

* In order for the script to function, an additional add-on that permits the `script.sh` to talk with Thunderbird needs to be installed along with the integration. To build this additional add-on, the `--build-client-addon` argument needs to be provided to the `script.sh` file.

  ```
  $ ./tools/style-livereload/script.sh --build-client-addon
  ```

* The resulting `client-addon.xpi` file has to be installed in Thunderbird.

* After having installed this add-on, it is possible to start the live reload functionality by running `script.sh` without providing any arguments.

  ```
  $ ./tools/style-livereload/script.sh
  ```