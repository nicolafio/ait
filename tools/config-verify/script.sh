#!/bin/bash

#  Copyright (c) 2017 Nicola Fiori (JD342)
#
#  This file is part of the Arc Integration for Thunderbird, licensed under
#  the terms of the GNU General Public License 3.0.

params_location=

main() {

    case $1 in
        --help) run_help;;
        *) run_verifier;;
    esac

    exit 0

}

run_help() {

    echo
    echo $0
    echo Verifies that the configuration JSON is not malformed and will not
    echo cause unexpected behavior.
    echo
    echo $0 --help
    echo Prints this help message
    echo


}

run_verifier() {

    verifier=`dirname "$0"`/verifier.js
    nodejs "$verifier" || exit -1

}

main "$@"
