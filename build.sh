#!/usr/bin/env bash



for browser in "firefox" "chrome"
do
  src=build/"$browser"/src
  bin=build/"$browser"/bin

  rm -rf $src
  mkdir -p $src $bin

  cp -r LICENSE README.md manifests/"$browser"/manifest.json background.js $src

  version=$(jq '.version' < manifests/"$browser"/manifest.json | tr -d '"')
  if [ "$1" = "lint" ];
  then
    "$(npm config get prefix)"/bin/web-ext lint-a $src
  else
    "$(npm config get prefix)"/bin/web-ext build -o -a $src -n $bin/"nexus-now_\"$version\"_$browser.zip"
  fi
done
