#!/usr/bin/env bash

base=$(pwd | rev | cut -d '/' -f 1 | rev)

mkdir -p ../www

for static in ../frontendmentor.io/static-projects/*/ 
do
  cp -r "$static" ../www/
done
