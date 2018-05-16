import knex from 'knex';
import connection from './knexfile';

const NODE_ENV = process.env.NODE_ENV || 'development';

export default {
  db: knex(connection[NODE_ENV]),
};
