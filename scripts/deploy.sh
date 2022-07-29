#!/usr/bin/env bash

base=$(pwd | rev | cut -d '/' -f 1 | rev)
cp -r "./dist" "../../../site/"$base
cp "./design/desktop-preview.jpg" "../../../site/"$base
# echo $base >> "../../site/filePaths.txt"
