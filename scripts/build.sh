#!/bin/bash

# SSH into the AWS instance
ssh -i "~/.ssh/california-eli-mbp.pem" ubuntu@ec2-18-224-110-70.us-east-2.compute.amazonaws.com << EOF

# Navigate to the desired directory
cd my-resume

# Pull the latest changes from the repository
git pull
if [ \$? -eq 0 ]; then
  echo "$(date): Successfully pulled the latest changes from the repository"
else
  echo "$(date): Failed to pull the latest changes from the repository"
  exit 1
fi

npm install
if [ \$? -eq 0 ]; then
  echo "$(date): Successfully installed dependencies."
else
  echo "$(date): Failed to install dependencies."
  exit 1
fi

# Reload systemd daemon
sudo systemctl daemon-reload
if [ \$? -eq 0 ]; then
  echo "$(date): Successfully reloaded systemd daemon"
else
  echo "$(date): Failed to reload systemd daemon"
  exit 1
fi

# Restart the application service
sudo systemctl restart myapp.service
if [ \$? -eq 0 ]; then
  echo "$(date): Successfully restarted 'myapp.service'"
else
  echo "$(date): Failed to restart 'myapp.service'"
  exit 1
fi

EOF

# Log the completion of the script
if [ $? -eq 0 ]; then
  echo "$(date): Deployment script executed successfully"
else
  echo "$(date): Deployment script failed"
fi
