#!/usr/bin/env bash



for browser in "firefox" "chromium"
do
  src=build/"$browser"/src
  bin=build/"$browser"/bin

  rm -rf $src
  mkdir -p $src $bin

  cp -r LICENSE README.md manifests/"$browser"/manifest.json icons background.js content.js $src

  version=$(jq '.version' < $src/manifest.json | tr -d '"')
  if [ "$1" = "lint" ];
  then
    if [ $browser = "firefox" ];
    then
      cd $src || exit 2
      "$(npm config get prefix)"/bin/web-ext lint
      cd ../../..
    fi
  else
    cd $bin || exit 2
    "$(npm config get prefix)"/bin/web-ext build -o -a . -s ../src -n "nexus-now_\"$version\"_$browser.zip"
    cd ../../..
  fi
done
