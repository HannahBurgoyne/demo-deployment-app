export async function up(knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id')
    table.string('name')
    table.string('text')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('comments')
}
