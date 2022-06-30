#!/usr/bin/env bash

base=$(pwd | rev | cut -d '/' -f 1 | rev)
cp -r "./dist" $(echo "../../www/"$base)
echo $base >> "../../www/filePaths.txt"
