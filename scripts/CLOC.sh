#!/bin/bash

# ext="scss js html css jsx md"
# 
# pwd
# 
# total=0
# 
# for item in `echo $ext | tr ' ' '\n'` 
# do
  # line=`find ../**/*.$item -exec cat {} + | wc -l`
  # total=`expr $total + $line `
# done
# echo $total

total=`git ls-files | xargs cat | wc -l`
str="![img](https://img.shields.io/badge/total%20lines-${total}-blue?style=plastic)"
file=$(awk -v str="str" '/# front-end monorepo/ { print; print $str; next }1' README.md)

echo $total
