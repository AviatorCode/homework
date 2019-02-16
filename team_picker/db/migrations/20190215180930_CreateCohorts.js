
exports.up = function (knex, Promise) {
    return knex.schema.createTable('cohorts', table => {
        table.increments('id');
        table.text('name');
        table.text('logourl');
        table.text('members')
        table.timestamp('createdAt').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('cohorts');
};