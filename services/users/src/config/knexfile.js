const path = require('path');

const migrations = { directory: path.resolve(__dirname, '../db/migrations') };
const seeds = { directory: path.resolve(__dirname, '../db/seeds') };

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations,
    seeds,
  },
  test: {
    client: 'pg',
    connection: process.env.TEST_DATABASE_URL,
    migrations,
    seeds,
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations,
    seeds,
  },
};
