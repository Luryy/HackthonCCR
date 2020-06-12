import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('options').insert([
        {title: "Alimentação", image:"alimentacao.svg"},
        {title: "Abastecimento", image:"abastecimento.svg"},
        {title: "Guardas", image:"guardas.svg"},
        {title: "Farmácia", image:"farmacia.svg"},
        {title: "Banheiro", image:"banheiro.svg"},
        {title: "Banho", image:"banho.svg"},
    ])
}