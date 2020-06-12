import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('options').insert([
        {title: "Alimentação", image:"options/alimentacao.svg"},
        {title: "Abastecimento", image:"options/abastecimento.svg"},
        {title: "Descanso", image:"options/descanso.svg"},
    ])
}