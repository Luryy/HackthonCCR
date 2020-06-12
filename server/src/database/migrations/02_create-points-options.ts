import Knex from 'knex';

export async function up (knex: Knex) {
    return knex.schema.createTable('point_options', table =>{
        table.increments('id').primary();
        table.integer('point_id').notNullable()
            .unsigned()
            .references('id')
            .inTable('points');
        table.integer('option_id').notNullable()
            .unsigned()
            .references('id')
            .inTable('options');
    })
};

export async function down (knex: Knex) {
    return knex.schema.dropTable('point_options');
};