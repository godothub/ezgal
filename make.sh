#!/bin/sh

if [ -d "ezgal" ]; then
    rm -rf ./ezgal
fi
git clone https://atomgit.com/godothub/ezgal

rm -rf ezgal/ezgal/technical; ln -s $(pwd)/technical ezgal/ezgal/
rm -rf ezgal/ezgal/sounds; ln -s $(pwd)/sounds ezgal/ezgal/
rm -rf ezgal/ezgal/script; ln -s $(pwd)/script ezgal/ezgal/
rm -rf ezgal/ezgal/image; ln -s $(pwd)/image ezgal/ezgal/
rm -rf ezgal/ezgal/font; ln -s $(pwd)/font ezgal/ezgal/
