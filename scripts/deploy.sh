#!/usr/bin/env bash

base=$(pwd | rev | cut -d '/' -f 1 | rev)
pwd
cp -r "./dist" "../../../site/dist/"$base
cp "./design/desktop-preview.jpg" "../../../site/dist/"$base
# echo $base >> "../../site/dist/filePaths.txt"
