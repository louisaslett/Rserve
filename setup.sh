#!/bin/bash

# Assumes an Ubuntu 20.04 system

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
chmod u+x $SCRIPT_DIR/config.sh
. $SCRIPT_DIR/config.sh

# Install Docker on Ubuntu 20.04
if ! command -v docker &> /dev/null
then
  apt update
  apt install -y apt-transport-https ca-certificates curl software-properties-common
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
  add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
  apt update
  apt-cache policy docker-ce
  ### Check last line shows docker and not ubuntu repo
  apt install -y docker-ce
  systemctl --no-pager status docker
fi

# Pull images
docker pull $DOCKERIMG
if [ $? -ne 0 ]; then
  echo "Error: the image $DOCKERIMG returned an error when attempting to pull.  Aborting setup ..."
  exit 1
fi

docker pull php:apache

# Setup directories
mkdir -p /surfeR/Rrunning /surfeR/www-run/0 /surfeR/www-run/1/ephemeral /surfeR/www-run/1/persistent /surfeR/www-run/2 /surfeR/www-run/3
cp $SCRIPT_DIR/surfeR.sh /surfeR
cp $SCRIPT_DIR/config.sh /surfeR
cp -r $SCRIPT_DIR/R /surfeR
cp -r $SCRIPT_DIR/www /surfeR
chown -R www-data:www-data /surfeR
chmod -R 755 /surfeR
echo -e "<?php\n\n\$DOMAIN='$DOMAIN';\n\$MAXRUNTIME='$MAXRUNTIME';\n\n?>" > /surfeR/www/config.php

echo "Starting server ..."
/surfeR/surfeR.sh > /dev/null 2>/dev/null &
