#!/usr/bin/env bash

base=$(pwd | rev | cut -d '/' -f 1 | rev)

for static in ./packages/frontendmentor/static-projects/*/ 
do
  cp -r "$static" ./site/
done
