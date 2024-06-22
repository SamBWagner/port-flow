#!/bin/bash

path="/var/www/port-flow"
pathToUI="/var/www/port-flow/UI/"
pathToAPI="/var/www/port-flow/API/"
pathToLogFile="/var/www/port-flow/deploy.log"

$YARN_PATH="/home/samwagner/.nvm/versions/node/v20.14.0/bin/yarn"


cd $path || { echo "Failed to change directory to $path"; exit 1; }
date=$(date)

if [ ! -f $pathToLogFile ]; then
    touch $pathToLogFile || { echo "Failed to create log file"; exit 1; }
fi

echo "-----------------------------------" >> $pathToLogFile
echo "Deployment started at: ${date}" >> $pathToLogFile
echo "Runninng as $(whoami)" >> $pathToLogFile

if ! git pull >> $pathToLogFile 2>&1; then
    echo "ERROR: Git pull failed" >> $pathToLogFile
    echo "Stopping deployment" >> $pathToLogFile
    echo "-----------------------------------" >> $pathToLogFile
    exit 1
fi

cd $pathToUI || { echo "Failed to change directory to $pathToUI"; exit 1; }
if ! $YARN_PATH install >> $pathToLogFile 2>&1; then
    echo "ERROR: Yarn install failed" >> $pathToLogFile
    echo "Stopping deployment" >> $pathToLogFile
    echo "-----------------------------------" >> $pathToLogFile
    exit 1
fi

if ! $YARN_PATH build >> $pathToLogFile 2>&1; then
    echo "ERROR: Yarn build failed" >> $pathToLogFile
    echo "Stopping deployment" >> $pathToLogFile
    echo "-----------------------------------" >> $pathToLogFile
    exit 1
fi

if ! pm2 restart port-flow >> $pathToLogFile 2>&1; then
    echo "ERROR: PM2 restart failed" >> $pathToLogFile
    echo "Stopping deployment" >> $pathToLogFile
    echo "-----------------------------------" >> $pathToLogFile
    exit 1
fi

cd $pathToAPI || { echo "Failed to change directory to $pathToAPI"; exit 1; }
if dotnet publish >> $pathToLogFile 2>&1; then
    echo "API published" >> $pathToLogFile
else
    echo "ERROR: API not published" >> $pathToLogFile
    echo "Stopping deployment" >> $pathToLogFile
    echo "-----------------------------------" >> $pathToLogFile
    exit 1
fi

if sudo systemctl stop api.port-flow.service >> $pathToLogFile 2>&1; then
    echo "Service stopped" >> $pathToLogFile
else
    echo "ERROR: Service not stopped" >> $pathToLogFile
    echo "Stopping deployment" >> $pathToLogFile
    echo "-----------------------------------" >> $pathToLogFile
    exit 1
fi

if sudo systemctl start api.port-flow.service >> $pathToLogFile 2>&1; then
    echo "Service started" >> $pathToLogFile
else
    echo "ERROR: Service not started" >> $pathToLogFile
    echo "Stopping deployment" >> $pathToLogFile
    echo "-----------------------------------" >> $pathToLogFile
    exit 1
fi

echo "Deployment finished at: $(date)" >> $pathToLogFile
echo "-----------------------------------" >> $pathToLogFile
