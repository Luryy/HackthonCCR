import Knex from 'knex';

export async function up (knex: Knex) {
    return knex.schema.createTable('points', table =>{
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.decimal('price').notNullable();
        table.integer('stops').notNullable();
        table.string('whatsapp').notNullable();
        table.float('latitude', 14, 10).notNullable();
        table.float('longitude', 14, 10).notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
};

export async function down (knex: Knex) {
    return knex.schema.dropTable('points');
};