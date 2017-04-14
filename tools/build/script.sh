#!/bin/bash

#  Copyright (c) 2017 Nicola Fiori (JD342)
#
#  This file is part of the Arc Integration for Thunderbird.
#
#  The Arc Integration for Thunderbird is free software: you can
#  redistribute it and/or modify it under the terms of the
#  GNU General Public License Version 3 as published by the
#  Free Software Foundation.
#
#  The Arc Integration for Thunderbird is distributed in the hope
#  that it will be useful, but WITHOUT ANY WARRANTY; without even the
#  implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
#  See the GNU General Public License for more details.
#
#  You should have received a copy of the GNU General Public License
#  along with the Arc Integration for Thunderbird.
#  If not, see <http://www.gnu.org/licenses/>.

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

    lessc -sm=on "$source_dir/style.less" "$temp_dir/style.css" || {
        echo less compilation failed, aborting
        rm -rf "$temp_dir"
        exit $?
    }

    rm -f "$build_file"

    cd "$temp_dir"
    zip "$build_file" style.css

    cd "$source_dir"
    zip "$build_file" `find . -not -path ./style.less`

    cd ..
    zip "$build_file" license

    rm -rf "$temp_dir"

    echo done building

}

main "$@"
