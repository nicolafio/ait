#!/bin/bash

#  Copyright (c) 2017 Nicola Fiori (JD342)
#
#  This file is part of the Arc Integration for Thunderbird, licensed under
#  the terms of the GNU General Public License 3.0.

project_dir="`dirname "$0"`/../../.."
styling_dir="$project_dir/source/styling"
style_compile_script="$project_dir/tools/style-compile/script.sh"

# Repeats the action until the user stops the process
while true
do

    # Waits for changes in source style sheets
    inotifywait -qq -e modify -e move -e create -e delete -r "$styling_dir"

    # Compiles the stylesheet and outputs the result encoded in base-64
    bash "$style_compile_script" | base64 -w 0

    # Prints a new line character to send the message
    printf "\n"

done
