export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()

  // Inserts seed entries
  await knex('comments').insert([
    {
      id: 1,
      name: 'Sandy Cheeks',
      text: "Y'all did a rootin'-tootin' good job on this site! Almost as impressive as a Texas rodeo!",
    },
    {
      id: 2,
      name: 'Patrick Star',
      text: 'Is mayonnaise an instrument? Anyway, nice job on this site!',
    },
  ])
}
