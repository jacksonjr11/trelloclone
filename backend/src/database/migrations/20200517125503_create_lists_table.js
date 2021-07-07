
exports.up = function(knex) {
  return knex.schema.createTable('lists', table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    
    table.integer('user_id').references('users.id').notNullable().onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('lists');
};
