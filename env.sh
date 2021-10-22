#!/bin/bash

# Create dynamic config object
RUNTIME_CONF="window._env_ = {
  NODE_ENV: \"$NODE_ENV\",
  APP_ENV: \"$APP_ENV\",
};"

# Copy new config to build
echo $RUNTIME_CONF > build/env-config.js
