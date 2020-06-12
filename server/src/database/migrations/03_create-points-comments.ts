import Knex from 'knex';

export async function up (knex: Knex) {
    return knex.schema.createTable('point_comments', table => {
        table.increments('id').primary();
        table.integer('point_id').notNullable()
            .unsigned()
            .references('id')
            .inTable('points');
        table.string('comment').notNullable();
        table.string('author').notNullable();
    })
};

export async function down (knex: Knex) {
    return knex.schema.dropTable('point_comments');
};