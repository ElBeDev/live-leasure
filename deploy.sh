#!/bin/bash
set -e

echo "🚀 Deploying to VPS..."

# Upload files
rsync -avz --progress \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude '.git' \
  . root@31.97.211.69:/var/www/live-leasure/

# Build and restart on server
ssh root@31.97.211.69 "cd /var/www/live-leasure && npm install && npm run build && pm2 restart live-leasure"

echo "✅ Deployment complete!"
echo "🌐 Visit: http://31.97.211.69"
