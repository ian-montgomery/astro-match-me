exports.up = function (knex) {
  return knex.schema.createTable('profiles', table => {
    table.increments('id')
    table.integer('user_id')
    table.string('name')
    table.string('sign')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('profiles')
}
