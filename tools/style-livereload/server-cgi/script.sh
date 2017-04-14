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

target_file=`dirname "$0"`/../../../source/style.less

# Repeats the action until the user stops the process
while true
do

    # Waits for changes in source style sheet
    inotifywait -qq "$target_file"

    # Compiles the stylesheet and outputs the result encoded in base-64
    lessc -sm=on "$target_file" | base64 -w 0

    # Prints a new line character to send the message
    printf "\n"

done
