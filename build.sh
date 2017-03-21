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

build() {
    echo building at $1
    rm -f "$1"
    cd source; zip -r "$1" .
    cd ..; zip "$1" license
    echo done building
}

case $1 in

    --help)

        echo "buid.sh contains logic used for development"
        echo "bash build.sh           creates .xpi file in default build folder"
        echo "bash build.sh --export  creates .xpi file in a specified location"
        echo "bash build.sh --help    shows this help dialog"

    ;;

    --export)

        export_target_file=.export-target

        if [ ! -f $export_target_file ]
        then
            echo specify target .xpi file to be used:
            read -e export_target || exit $?
            export_target=`bash -c "echo $export_target"`
            export_target=`realpath "$export_target"` || exit $?
            echo "$export_target" >> "$export_target_file"
            echo to reset the export target location, remove $export_target_file
        else export_target=`cat "$export_target_file"` || exit $?
        fi

        build "$export_target"

    ;;

    *)

        build_file=arcthunderbird.xpi

        mkdir -p build
        build `realpath "build/$build_file"`

    ;;

esac

exit 0
