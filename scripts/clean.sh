#!/usr/bin/env sh
# This script is meant to run inside a frontendmentor project

echo "Cleaning up..." $(pwd)

find ./design/* ! -name "desktop-preview.jpg" -delete
rm -rf dist/
rm -rf README-template.md style-guide.md