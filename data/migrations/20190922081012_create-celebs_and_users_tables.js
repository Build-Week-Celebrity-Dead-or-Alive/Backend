
exports.up = function (knex) {
  return knex.schema
    .createTable('celebs', celebs => {
      celebs.increments();
      celebs
        .text('name', 128)
        .notNullable()
        .unique();
      celebs.text('image_url');
      celebs.text('info');
      celebs.date('born').notNullable();
      celebs.date('died');
      celebs.boolean('isDead');
    })

    .createTable('users', users => {
      users.increments();
      users.text('name', 128).notNullable();
      users
        .text('username', 128)
        .notNullable()
        .unique();
      users.text('password', 128).notNullable();
      users.integer('points', 128);
    });
};

exports.down = function (knex) {
  knex.schema.dropTableIfExists('users');
  return knex.schema.dropTableIfExists('celebs');
};
