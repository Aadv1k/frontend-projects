#!/bin/sh

# A script to fetch Front-End mentor challenges

if [ $# -eq 2  ] 
then 
	FOL=$2
elif [ $# -eq 0 ]
then 
	echo "
   __           ___    _      _         _    
  / _|___ _ __ | __|__| |_ __| |_    __| |_  
 |  _/ -_) '  \| _/ -_)  _/ _| ' \ _(_-< ' \ 
 |_| \___|_|_|_|_|\___|\__\__|_||_(_)__/_||_|
	"
 echo "
USAGE: 
 ./femFetch.sh <FEM-LINK> OUTPUT
 ./femFetch.sh blogr-landing-page blogr
 "
    exit 1
else 
    FOL=$1
fi

curl -O https://codeload.github.com/frontendmentorio/$1/zip/refs/heads/main
unzip main -d $FOL
mv $FOL/${1}-main/* $FOL/
rm -rf $FOL/${1}-main main
