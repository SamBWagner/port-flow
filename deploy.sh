#!/bin/bash

path="/var/www/port-flow"
pathToUI="/var/www/port-flow/UI/"
pathToAPI="/var/www/port-flow/API/"
pathToLogFile="/var/www/port-flow/deploy.log"

cd $path || { echo "Failed to change directory to $path"; exit 1; }
date=$(date)

if [ ! -f $pathToLogFile ]; then
    touch $pathToLogFile || { echo "Failed to create log file"; exit 1; }
fi

echo "Deployment started at: ${date}" >> $pathToLogFile

if ! git pull; then
    echo "Git pull failed" >> $pathToLogFile
    exit 1
fi

cd $pathToUI || { echo "Failed to change directory to $pathToUI"; exit 1; }
if ! yarn install; then
    echo "Yarn install failed" >> $pathToLogFile
    exit 1
fi

if ! yarn build; then
    echo "Yarn build failed" >> $pathToLogFile
    exit 1
fi

if ! pm2 restart port-flow; then
    echo "PM2 restart failed" >> $pathToLogFile
    exit 1
fi

cd $pathToAPI || { echo "Failed to change directory to $pathToAPI"; exit 1; }
if dotnet publish; then
    echo "API published" >> $pathToLogFile
else
    echo "API not published" >> $pathToLogFile
    exit 1
fi

if sudo systemctl stop api.port-flow.service; then
    echo "Service stopped" >> $pathToLogFile
else
    echo "Service not stopped" >> $pathToLogFile
    exit 1
fi

if sudo systemctl start api.port-flow.service; then
    echo "Service started" >> $pathToLogFile
else
    echo "Service not started" >> $pathToLogFile
    exit 1
fi

echo "Deployment finished at: $(date)" >> $pathToLogFile
