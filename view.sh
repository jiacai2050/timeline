#!/usr/bin/env bash

cur=$(cd `dirname $0`;pwd)
cd $cur

./tl.js g

cd .deploy
python -m SimpleHTTPServer 8098
