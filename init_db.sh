#!/bin/sh

docker-compose run users-service knex migrate:latest --env development --knexfile app/src/config/knexfile.js
docker-compose run users-service knex seed:run --env development --knexfile app/src/config/knexfile.js
docker-compose run movies-service knex migrate:latest --env development --knexfile app/src/config/knexfile.js
docker-compose run movies-service knex seed:run --env development --knexfile app/src/config/knexfile.js