#!/bin/bash

#  Copyright (c) 2017-2019 Nicola Fiori
#
#  This file is part of the Arc Integration for Thunderbird, licensed under
#  the terms of the GNU General Public License 3.0.

main() {

    case $1 in
        --help) run_help;;
        *) run_compiler;;
    esac

    exit 0

}

run_help() {

    echo
    echo $0
    echo Compiles the style sheets and outputs the resulting CSS
    echo
    echo $0 --help
    echo Prints this help message
    echo

}

run_compiler() {

    project_dir=`dirname "$0"`/../../
	styling_dir=$project_dir/source/styling
    sheet=$styling_dir/main.scss
    funcs_script=$styling_dir/functions.js
    node_sass=$project_dir/node_modules/.bin/node-sass

    "$node_sass" --output-style compressed \
                 --functions "$funcs_script" \
                 "$sheet" \
    || exit $?

}

main "$@"
