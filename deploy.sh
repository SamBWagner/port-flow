#!/bin/bash

path="/var/www/port-flow"
pathToUI="/var/www/port-flow/UI/"
pathToAPI="/var/www/port-flow/API/"
pathToLogFile="/var/www/port-flow/deploy.log"

cd $path || { echo "Failed to change directory to $path"; exit 1; }
date=$(date)

# Source NVM and set up Node environment
export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
    . "$NVM_DIR/nvm.sh"
else
    echo "ERROR: NVM is not installed or nvm.sh not found" >> $pathToLogFile
    exit 1
fi

# Verify if yarn is available
if ! command -v yarn &> /dev/null; then
    echo "ERROR: Yarn is not installed or not in the PATH" >> $pathToLogFile
    exit 1
fi

# Ensure the PATH includes the NVM binaries
export PATH="$NVM_DIR/versions/node/$(nvm current)/bin:$PATH"

# Log the PATH for debugging
echo "PATH: $PATH" >> $pathToLogFile

if [ ! -f $pathToLogFile ]; then
    touch $pathToLogFile || { echo "Failed to create log file"; exit 1; }
fi

echo "-----------------------------------" >> $pathToLogFile
echo "Deployment started at: ${date}" >> $pathToLogFile
echo "Running as $(whoami)" >> $pathToLogFile

if ! git pull >> $pathToLogFile 2>&1; then
    echo "ERROR: Git pull failed" >> $pathToLogFile
    echo "Stopping deployment" >> $pathToLogFile
    echo "-----------------------------------" >> $pathToLogFile
    exit 1
fi

cd $pathToUI || { echo "Failed to change directory to $pathToUI"; exit 1; }
if ! yarn install >> $pathToLogFile 2>&1; then
    echo "ERROR: Yarn install failed" >> $pathToLogFile
    echo "Stopping deployment" >> $pathToLogFile
    echo "-----------------------------------" >> $pathToLogFile
    exit 1
fi

if ! yarn build >> $pathToLogFile 2>&1; then
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

# Debugging: Log before stopping the service
echo "Stopping service..." >> $pathToLogFile
if sudo -n systemctl stop api.port-flow.service >> $pathToLogFile 2>&1; then
    echo "Service stopped" >> $pathToLogFile
else
    echo "ERROR: Service not stopped" >> $pathToLogFile
    echo "Stopping deployment" >> $pathToLogFile
    echo "-----------------------------------" >> $pathToLogFile
    exit 1
fi

# Debugging: Log before starting the service
echo "Starting service..." >> $pathToLogFile
if sudo -n systemctl start api.port-flow.service >> $pathToLogFile 2>&1; then
    echo "Service started" >> $pathToLogFile
else
    echo "ERROR: Service not started" >> $pathToLogFile
    echo "Stopping deployment" >> $pathToLogFile
    echo "-----------------------------------" >> $pathToLogFile
    exit 1
fi

echo "Deployment finished at: $(date)" >> $pathToLogFile
echo "-----------------------------------" >> $pathToLogFile
