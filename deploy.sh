#!/bin/bash

path="/var/www/port-flow"

cd $path
git pull 
yarn build

pm2 restart port-flow
