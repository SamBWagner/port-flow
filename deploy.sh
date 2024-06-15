#!/bin/bash

path="/var/www/port-flow"
pathToUI="/var/www/port-flow/UI/"
pathToAPI="/var/www/port-flow/API/"

cd $path
git pull 

cd $pathToUI
yarn build
pm2 restart port-flow

cd $pathToAPI
dotnet publish

# Stop the API

# Run the API

