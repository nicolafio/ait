#!/bin/bash

#  Copyright (c) 2017 Nicola Fiori (JD342)
#
#  This file is part of the Arc Integration for Thunderbird, licensed under
#  the terms of the GNU General Public License 3.0.

main() {

    case $1 in
        --help) run_help;;
        --export) run_export;;
        *) run_default_build;;
    esac

    exit 0

}

run_help() {

    echo
    echo $0
    echo Builds the integration addon in the default build folder
    echo
    echo $0 --export
    echo Builds the integration addon in a specified location
    echo
    echo $0 --help
    echo Prints this help message
    echo

}

run_default_build() {

    build_dir=`dirname "$0"`/../../build
    build_file=$build_dir/arcthunderbird.xpi
    mkdir -p "$build_dir"
    run_build "$(realpath --relative-to=$(pwd) "$build_file")"

}

run_export() {

    target_file=`dirname "$0"`/.export-target

    if [ ! -f $target_file ]
    then
        echo specify target .xpi file location
        read -e target || exit $?
        target=`bash -c "echo $target"` || exit $?
        target=`realpath "$target"` || exit $?
        echo "$target" >> "$target_file" || exit $?
    else target=`cat "$target_file"` || exit $?
    fi

    run_build "$target"
    echo to reset the export target location, remove $target_file

}

run_build() {

    echo building at $1

    source_dir=`realpath "$(dirname "$0")/../../source"`
    temp_dir=`mktemp -d`
    build_file=`realpath "$1"`

    sassc -t compressed "$source_dir/styling.scss" "$temp_dir/styling.css" || {
        echo scss compilation failed, aborting
        rm -rf "$temp_dir"
        exit $?
    }

    rm -f "$build_file"

    cd "$temp_dir"
    zip "$build_file" *
    cd "$source_dir"
    zip "$build_file" `find . -not -path ./styling.scss -not -path "./styles*"`
    cd ..
    zip "$build_file" license

    rm -rf "$temp_dir"

    echo done building

}

main "$@"
