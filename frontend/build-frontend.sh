echo "stopping current build and deleting"
docker-compose -f docker-compose.yml down

echo "creating new build"
docker-compose -f docker-compose.yml up -d --build
