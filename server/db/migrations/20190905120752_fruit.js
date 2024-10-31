export async function up(knex) {
  return knex.schema.createTable('projects', (table) => {
    table.increments('id')
    table.string('name')
    table.string('description')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('projects')
}
