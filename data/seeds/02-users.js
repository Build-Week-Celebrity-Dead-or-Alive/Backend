
exports.seed = function (knex) {
  return knex('users').insert([
    {
      name: 'Chris',
      username: 'chike',
      password: '@12345',
      points: 4
    },
    {
      name: 'Ubani',
      username: 'ubani',
      password: '12345@',
      points: 2
    }
  ])
}
