
exports.seed = function (knex) {
  return knex('celebs').insert([
    {
      name: 'Tupac Shakur',
      isDead: true,
      born: 1971,
      died: 1996
    },
    {
      name: 'Biggie Smalls',
      isDead: true,
      born: 1972,
      died: 1997
    }
  ])
}

