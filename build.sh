#!/bin/bash
cd /root/vbooth/
npm install
npm run build
pm2 restart vbooth