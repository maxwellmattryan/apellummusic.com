#!/bin/bash

#BRANCH="$(git rev-parse --abbrev-ref HEAD)"
#if [ "$BRANCH" != "main" ]; then
#    echo -e "App MUST be deployed from the main branch!\n\nAborting script"
#    exit 1;
#fi

start_time=$(date +%s)

NODE_VERSION=12.18-alpine

UI_IMAGE=apellum-ui
DOMAIN=apellum.com

GCP_HOSTNAME=gcr.io
GCP_PLATFORM=managed
GCP_REGION=us-central1
GCP_PROJECT_ID=apellum
GCP_UI_SERVICE=apellum-ui
GCP_UI_IMAGE_PATH="$GCP_HOSTNAME/$GCP_PROJECT_ID/$UI_IMAGE"

cd ui/ || echo -e "ERROR: UI folder does not exist\n" | exit

echo -e "Starting UI build and deployment...\n"

docker build . --tag "$UI_IMAGE"
echo -e "\n(1/5) SUCCESS: Built UI image on local machine\n"

docker tag "$UI_IMAGE" "$GCP_UI_IMAGE_PATH"
echo -e "\n(2/5) SUCCESS: Tagged local UI image with name in Container Registry\n"

docker push "$GCP_UI_IMAGE_PATH"
echo -e "\n(3/5) SUCCESS: Pushed UI image to Container Registry\n"

gcloud run deploy "$GCP_UI_SERVICE" --image="$GCP_UI_IMAGE_PATH" --platform="$GCP_PLATFORM" --region="$GCP_REGION"
echo -e "\n(4/5) SUCCESS: Deployed UI image to Cloud Run service\n"

cd ../

docker rmi "$UI_IMAGE:latest"
docker rmi "$GCP_UI_IMAGE_PATH:latest"
docker rmi "node:$NODE_VERSION"
docker image prune
echo -e "\n(5/5) SUCCESS: Removed local UI images\n"

echo -e "Completed app build and deployment! Check it out at https://$DOMAIN/\n"

convertsecs() {
    ((m = (${1} % 3600) / 60))
    ((s = ${1} % 60))
    printf "%02dm %02ds\n" $m $s
}

end_time=$(date +%s)
execution_time=$(expr $end_time - $start_time)
echo -e "Total time elapsed: $(convertsecs $execution_time)"
