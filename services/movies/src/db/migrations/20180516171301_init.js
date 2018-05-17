exports.up = (knex) => {
  return knex.schema.createTable('movies', (table) => {
    table.increments();
    table.string('name').unique().notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('movies');
};