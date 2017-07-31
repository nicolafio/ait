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

    src_dir=`realpath "$(dirname "$0")/../../source"`
    build_file=`realpath "$1"`

    # Creates a temporary folder
    tmp_dir=`mktemp -d`

    # Generates styling.css
    echo compiling windows\' styling and generating styling.css
    sassc --style compressed \
          "$src_dir/windows-styling/main.scss" "$tmp_dir/styling.css" \
    || abort_build "$tmp_dir" "windows' styling compilation failed"

    # Generates icons.svg
    icons_css=`sassc --style compressed "$src_dir/icons/styling.scss"`
    (( $? )) && abort_build "$tmp_dir" "icons' styling compilation failed"
    icons_css_base64=`echo "$icons_css" | base64 -w 0`
    icons_css_import_rule="@import url(data:text/css;base64,$icons_css_base64)"
    cat "$src_dir/icons/set.svg" \
    | xmlstarlet edit -N ns=http://www.w3.org/2000/svg \
                      --subnode /ns:svg \
                                --type elem \
                                --name style \
                                --value "$icons_css_import_rule" \
    >> "$tmp_dir/icons.svg" \
    || abort_build "$tmp_dir" "svg file generation failed"

    # Removes previous .xpi file.
    rm -f "$build_file"

    # Includes all contents from the temporary folder into the new .xpi file.
    cd "$tmp_dir"
    zip -r "$build_file" .

    # Includes all sources that do not need to be processed into the new .xpi
    # file.
    cd "$src_dir/xpi-content"
    zip "$build_file" `find . -not -path "./readme.md"`

    # Includes the license file into the new .xpi file.
    cd ../..
    zip "$build_file" license

    # Removes the temporary directory
    rm -rf "$tmp_dir"

    echo done building

}

abort_build() {

    tmp_dir=$1
    msg=$2
    >&2 echo $msg
    >&2 echo aborting
    rm -rf "$tmp_dir"
    exit -1

}

main "$@"
