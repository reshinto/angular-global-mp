#!/bin/sh
# chmod a+x run.sh

PUBLIC_URL=. npm run build
docker stop app
docker rm app
docker rmi app
docker build -t app .
docker run -d -p 3000:80 --name app --restart unless-stopped app
