
exports.seed = function (knex) {
  return knex('users').insert([
    {
      name: 'Chris',
      email: 'chikechris@yahoo.com',
      password: '@12345',
      points: 4
    },
    {
      name: 'Ubani',
      username: 'ubani@yahoo.com',
      password: '12345@',
      points: 2
    }
  ])
}

