#!/bin/bash

# SSH into the AWS instance
ssh -i "california-eli-mbp.pem" ubuntu@ec2-18-224-110-70.us-east-2.compute.amazonaws.com

# Navigate to the desired directory
cd my-resume

# Pull the latest changes from the repository
ssh git pull

sudo systemctl restart myapp.service
