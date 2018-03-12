#!/bin/bash

echo "Installing node packages"
npm install
echo "Installing node packages complete"

echo "Running unit and snapshots tests"
npm test
echo "Unit testsing comlete"

echo "Starting Guillaume Hacker News"
npm start