#!/bin/bash

path="/var/www/port-flow"
pathToUI="/var/www/port-flow/UI/"
pathToAPI="/var/www/port-flow/API/"
pathToLogFile="./deploy.log"

date=$(date)

cd $pathToLogFile
if [ ! -f $pathToLogFile ]; then
    touch $pathToLogFile
fi

echo "Deployment started at: "${date} >> $pathToLogFile

cd $path
git pull 

cd $pathToUI
yarn install
yarn build
pm2 restart port-flow

cd $pathToAPI
if dotnet publish; then
    echo "API published" >> $pathToLogFile
else
    echo "API not published" >> $pathToLogFile
fi

if sudo systemctl stop api.port-flow.service; then
    echo "Service stopped" >> $pathToLogFile
else
    echo "Service not stopped" >> $pathToLogFile
fi

if sudo systemctl start api.port-flow.service; then
    echo "Service started" >> $pathToLogFile
else
    echo "Service not started" >> $pathToLogFile
fi
