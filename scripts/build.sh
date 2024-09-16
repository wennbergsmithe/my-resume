#!/bin/bash

# Parse flags
INSTALL_DEPENDENCIES=false
while getopts "i" flag; do
  case "$flag" in
    i) INSTALL_DEPENDENCIES=true ;;
    *) echo "Usage: $0 [-i]"; exit 1 ;;
  esac
done

# SSH into the AWS instance
ssh -i "$SSH_KEY_PATH" ubuntu@ec2-18-224-110-70.us-east-2.compute.amazonaws.com << EOF

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

# Conditionally run npm install if -i flag was provided
if [ "$INSTALL_DEPENDENCIES" = true ]; then
  npm install
  if [ \$? -eq 0 ]; then
    echo "$(date): Successfully installed dependencies."
  else
    echo "$(date): Failed to install dependencies."
    exit 1
  fi
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
