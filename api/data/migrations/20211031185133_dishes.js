exports.up = function(knex) {
    return knex.schema.createTable('dishes', (table) => {
        table.increments('dish_id');
        table.string('title', 50).notNullable();
        table.float('price').unsigned().notNullable();
        table
            .integer('category')
            .notNullable()
            .references('category_id')
            .inTable('categories')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT');
        table.string('description', 300).notNullable();
        table.string('img_url');
        table.boolean('dairy').defaultTo(false);
        table.boolean('gluten').defaultTo(false);
        table.boolean('nuts').defaultTo(false);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('dishes');
};
