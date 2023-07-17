/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE movies CASCADE')
  await knex('movies').del()
  await knex('movies').insert([
    {id: 1, title: 'Star Wars'},
    {id: 2, title: 'Batman'},
    {id: 3, title: 'Superman'},
    {id: 4, title: 'Lord of the Rings'},
    {id: 5, title: 'Scary Movie'},
  ]);
}