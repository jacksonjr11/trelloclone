exports.up = function(knex) {
  return knex.schema.createTable('cards', table => {
    table.increments('id').primary();
    table.string('content').notNullable();
    
    table.integer('list_id').references('lists.id').notNullable().onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cards');
};
