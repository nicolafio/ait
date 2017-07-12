#!/bin/bash

#  Copyright (c) 2017 Nicola Fiori (JD342)
#
#  This file is part of the Arc Integration for Thunderbird, licensed under
#  the terms of the GNU General Public License 3.0.

source_dir=`dirname "$0"`/../../../source
target_file=$source_dir/styling.scss
styles_dir=$source_dir/styles

# Repeats the action until the user stops the process
while true
do

    # Waits for changes in source style sheets
    inotifywait -qq \
                -e modify \
                -e move \
                -e create \
                -e delete \
                "$target_file" "$styles_dir"

    # Compiles the stylesheet and outputs the result encoded in base-64
    sassc -t compressed "$target_file"  | base64 -w 0

    # Prints a new line character to send the message
    printf "\n"

done
