#!/bin/bash

path="/var/www/port-flow"
repository="https://github.com/SamBWagner/port-flow.git"

cd $path
git clone $repository

yarn build

pm2 stop port-flow
pm2 start port-flow
