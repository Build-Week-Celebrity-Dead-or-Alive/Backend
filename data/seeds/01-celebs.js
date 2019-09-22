
exports.seed = function (knex) {
  return knex('celebs').insert([
    {
      name: 'Tupac Shakur',
      info: 'An American Rapper',
      isDead: true,
      born: 1971,
      died: 1996
    },
    {
      name: 'Biggie Smalls',
      info: 'An American Rapper',
      isDead: true,
      born: 1972,
      died: 1997
    }
  ])
}
