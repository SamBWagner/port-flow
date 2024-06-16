#!/bin/bash

path="/var/www/port-flow"
pathToUI="/var/www/port-flow/UI/"
pathToAPI="/var/www/port-flow/API/"

cd $path
git pull 

cd $pathToUI
yarn install
yarn build
pm2 restart port-flow

cd $pathToAPI
dotnet publish

systemctl stop api.port-flow.service
systemctl start api.port-flow.service
