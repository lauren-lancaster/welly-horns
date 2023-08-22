/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('events').del()
  await knex('events').insert([
    {
      id: 1,
      title: 'rowValue1',
      description: 'warm up class for everyone',
      location: 'poneke art center',
      date: 'tomorrow',
      time: '8am-10am',
    },
  ])
}
