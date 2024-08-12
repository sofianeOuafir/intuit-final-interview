# players-app

# db

1. install pg
2. add postgres container in docker-compose files
3. add entrypoint to dockerfile (to run sequelize migrations)
4. initialize sequelize
npm install sequelize sequelize-cli pg
npx sequelize-cli init
create config/config.js file
5. define player model
6. create player db migration
7. add env variables to docker-compose file and .env, env.test
8. create migration file for migrating csv data