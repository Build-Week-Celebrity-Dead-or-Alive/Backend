
exports.seed = function (knex) {
  return knex('celebs').insert([
    {
      name: 'Tupac Shakur',
      isDead: true,
      born: 1971-06-16,
      died: 1996-09-13
    },
    {
      name: 'Biggie Smalls',
      isDead: true,
      born: 1972-05-21,
      died: 1997-03-09
    }
  ])
}

