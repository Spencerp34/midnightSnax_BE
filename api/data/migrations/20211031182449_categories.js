exports.up = function(knex) {
    return knex.schema.createTable('categories', (table) => {
        table.increments('category_id');
        table.string('name', 25).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('categories');
};
