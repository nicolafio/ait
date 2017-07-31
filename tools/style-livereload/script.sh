#!/bin/bash

#  Copyright (c) 2017 Nicola Fiori (JD342)
#
#  This file is part of the Arc Integration for Thunderbird, licensed under
#  the terms of the GNU General Public License 3.0.

main() {

    case $1 in
        --help) run_help;;
        --build-client-addon) run_client_addon_build;;
        *) run_server;;
    esac

    exit 0

}

run_help() {

    echo
    echo $0
    echo Starts the livereload server
    echo
    echo $0 --build-client-addon
    echo Builds the livereload client addon
    echo
    echo $0 --help
    echo Prints this help message
    echo

}

run_server() {

    websocketd --port=8001 "./$(dirname "$0")/server-cgi/script.sh"

}

run_client_addon_build() {

    script_dir=`dirname "$0"`
    build_file="$script_dir/client-addon.xpi"

    echo building $build_file

    build_file=`realpath $build_file`
    rm -f "$build_file"
    wd=`pwd`
    cd "$script_dir/client-addon"
    zip -r "$build_file" `find . -not -path "./readme.md"`;
    cd "$wd"

    echo done building

}

main "$@"