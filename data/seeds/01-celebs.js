exports.seed = function(knex) {
  return knex('celebs').insert([
    {
      name: 'Tupac Shakur',
      image_url:
        'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Tupac_Amaru_Shakur2.jpg/220px-Tupac_Amaru_Shakur2.jpg',
      info: 'An American Rapper',
      isDead: true,
      born: 1971,
      died: 1996,
    },
    {
      name: 'Biggie Smalls',
      image_url:
        'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/The_Notorious_B.I.G.jpg/240px-The_Notorious_B.I.G.jpg',
      info: 'An American Rapper',
      isDead: true,
      born: 1972,
      died: 1997,
    },
    {
      name: 'John Lennon',
      image_url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/John_Lennon_1969_%28cropped%29.jpg/220px-John_Lennon_1969_%28cropped%29.jpg',
      info: 'A former member of the Beatles rock-band',
      isDead: true,
      born: 1940,
      died: 1980,
    },
    {
      name: "Melanie Griffith",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Melanie_Griffith_2011_TIFF.jpg/170px-Melanie_Griffith_2011_TIFF.jpg",
      info: 'An American Actress',
      isDead: false,
      born: 1957
    },
  ]);
};
