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
      title: 'Warm Up',
      description: 'warm up class for everyone',
      location: 'poneke art center',
      date: 'monday',
      time: '8am-10am',
    },
    {
      id: 2,
      title: 'Group Lesson',
      description: "play what you've prepared",
      location: 'poneke art center',
      date: 'thursday',
      time: '6pm-18pm',
    },
    {
      id: 3,
      title: 'Concert',
      description: 'come watch some cool horns',
      location: 'St Andrews',
      date: 'Fridat',
      time: '12am-1:30pm',
    },
  ])
}
