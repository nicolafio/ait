#!/bin/bash
build_file=arcthunderbird.xpi
mkdir -p build
rm -f build/$build_file
cd source; zip -r ../build/$build_file .
cd ..; zip build/$build_file license
echo "done"
exit 0
