export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('projects').del()

  // Inserts seed entries
  await knex('projects').insert([
    {
      id: 1,
      name: 'Krabby Patty Order Tracker',
      description:
        "A real-time app for customers to order Krabby Patties online, track their orders, and receive notifications when they're ready. Integrated with an ocean-based delivery service.",
    },
    {
      id: 2,
      name: 'Bubble Messenger',
      description:
        'A messaging app that lets users send messages via digital bubbles that float across the screen, complete with customizable colors, sizes, and bubble emojis!',
    },
    {
      id: 3,
      name: 'Jellyfish Spotter',
      description:
        'A community-driven app for tracking jellyfish sightings around Bikini Bottom. Users can log locations, add photos, and share jellyfish spotting tips.',
    },
    {
      id: 4,
      name: 'Barnacle Bills',
      description:
        'An auction-style site for buying, selling, and trading rare barnacle collectibles, complete with bidding wars and Barnacle Buck rewards.',
    },
    {
      id: 5,
      name: 'Mermaid Man & Barnacle Boy Fan Club',
      description:
        'A fan club site with superhero news, member forums, and exclusive digital collectibles, where fans can vote on their favorite Mermaid Man moments.',
    },
    {
      id: 6,
      name: 'Undersea Weather App',
      description:
        'An app for tracking the ocean currents, tidal waves, and jellyfish migration patterns, helping Bikini Bottom residents plan their underwater activities.',
    },
    {
      id: 7,
      name: 'Snail-o-Gram',
      description:
        "A snail mail delivery simulation where users can track Gary and other snails as they deliver 'Snail-o-Grams' around Bikini Bottom.",
    },
    {
      id: 8,
      name: 'Bubble Bass Recipe Exchange',
      description:
        'A recipe-sharing platform where users can submit and exchange underwater recipes for unusual dishes like kelp shakes, seaweed salad, and, of course, Krabby Patties.',
    },
    {
      id: 9,
      name: 'Fry Cook Fitness Tracker',
      description:
        'A fitness app to help fry cooks stay in shape, tracking steps, spatula flips, and caloric burn during long shifts at the Krusty Krab.',
    },
  ])
}
