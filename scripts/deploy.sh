#!/bin/bash

REDISHOST=10.222.20.211
REDISPORT=6379
REGION=europe-west3
PROJECTID=$(gcloud config get-value project)

echo Building project...
cd ..
echo Deploying project...
gcloud run deploy \
  --image gcr.io/$PROJECTID/nextjs \
  --platform managed \
  --allow-unauthenticated \
  --region $REGION \
  --vpc-connector appconnector \
  --set-env-vars REDIS_HOST=$REDISHOST,REDIS_PORT=$REDISPORT