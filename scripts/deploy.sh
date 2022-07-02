#!/usr/bin/env bash

base=$(pwd | rev | cut -d '/' -f 1 | rev)
cp -r "./dist" "../../www/"$base
cp "./design/desktop-preview.jpg" "../../www/"$base
echo $base >> "../../dist/filePaths.txt"
