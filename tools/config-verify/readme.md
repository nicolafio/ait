# /tools/config-verify/

This folder contains the script used to verify that the `configurtion.json` file
is correctly structured and will not cause any unexpected behavior in the
extension's logic.

This script will be executed by the build script before compilation and creation
of the .xpi file. If any error is encountered, the build script will abort its
operation.

It is also possibile to run the configuration verification independently.

```
$ ./tools/config-verify/script.sh
```

