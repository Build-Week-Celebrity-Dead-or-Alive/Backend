exports.seed = function(knex) {
  return knex('celebs').insert([
    {
      name: 'Tupac Shakur',
      image_url:
        'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Tupac_Amaru_Shakur2.jpg/220px-Tupac_Amaru_Shakur2.jpg',
      info: 'An American Rapper',
      isDead: true,
      born: 1971 - 06 - 16,
      died: 1996 - 09 - 13,
    },
    {
      name: 'Biggie Smalls',
      image_url:
        'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/The_Notorious_B.I.G.jpg/240px-The_Notorious_B.I.G.jpg',
      info: 'An American Rapper',
      isDead: true,
      born: 1972 - 05 - 21,
      died: 1997 - 03 - 09,
    },
    {
      name: 'John Lennon',
      image_url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/John_Lennon_1969_%28cropped%29.jpg/220px-John_Lennon_1969_%28cropped%29.jpg',
      info: 'A former member of the Beatles rock-band',
      isDead: true,
      born: 1940 - 10 - 09,
      died: 1980 - 12 - 08,
    },
    {
      name: 'Melanie Griffith',
      image_url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Melanie_Griffith_2011_TIFF.jpg/170px-Melanie_Griffith_2011_TIFF.jpg',
      info: 'An American Actress',
      isDead: false,
      born: 1957 - 08 - 09,
    },
    {
      name: 'Brooke Shields',
      image_url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Brooke_Shields_2011_%28Cropped%29.jpg/220px-Brooke_Shields_2011_%28Cropped%29.jpg',
      info: 'An American Actress',
      isDead: false,
      born: 1965 - 05 - 31,
    },
    {
      name: 'Bette Midler',
      image_url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/BetteMidler90cropped.jpg/220px-BetteMidler90cropped.jpg',
      info: 'An American Actress',
      isDead: false,
      born: 1945 - 12 - 01,
    },
    {
      name: "Gordon 'Sting' Sumner",
      image_url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sting_in_April_2018.jpg/220px-Sting_in_April_2018.jpg',
      info: 'An English Musician and Actor',
      isDead: false,
      born: 1951 - 10 - 02,
    },
    {
      name: 'Neil Patrick Harris',
      image_url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Neil_Patrick_Harris_at_BookCon_%2816341%29_%28cropped_2%29.jpg/220px-Neil_Patrick_Harris_at_BookCon_%2816341%29_%28cropped_2%29.jpg',
      info: 'An American Actor, Writer and Producer',
      isDead: false,
      born: 1973 - 06 - 15,
    },

    {
      name: 'Elizabeth Dame Taylor',
      image_url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Liztaylorinviolet.jpg/220px-Liztaylorinviolet.jpg',
      info: 'A British-American Actress and Businesswoman',
      isDead: true,
      born: 1932 - 02 - 27,
      died: 2011 - 03 - 23,
    },
    // {
    //   name: 'Suzanne Summers',
    //   image_url:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Suzanne_Somers_USO_cropped.jpg/220px-Suzanne_Somers_USO_cropped.jpg',
    //   info: 'An American Actress',
    //   isDead: false,
    //   born: 1946
    // },
    // {
    //   name: 'Janeane Garofalo',
    //   image_url:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Janeane_Garofalo_Jan_15%2C_2008.jpg/185px-Janeane_Garofalo_Jan_15%2C_2008.jpg',
    //   info: 'An American Actress',
    //   isDead: false,
    //   born: 1964
    // },
    // {
    //   name: 'Kathie Lee Gifford',
    //   image_url:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Kathie_Lee_Gifford_in_2017.jpg/220px-Kathie_Lee_Gifford_in_2017.jpg',
    //   info: 'An American Talk-Show Host and Author',
    //   isDead: false,
    //   born: 1953
    // },
    // {
    //   name: 'Cyndi Lauper',
    //   image_url:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Cyndi_Lauper_Australia_2017.png/220px-Cyndi_Lauper_Australia_2017.png',
    //   info: 'An American Singer, Songwriter and Activist',
    //   isDead: false,
    //   born: 1952
    // },
    // {
    //   name: 'Dolly Parton',
    //   image_url:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Dolly_Parton_accepting_Liseberg_Applause_Award_2010_portrait.jpg/220px-Dolly_Parton_accepting_Liseberg_Applause_Award_2010_portrait.jpg',
    //   info: 'An American Singer and Songwriter',
    //   isDead: false,
    //   born: 1946
    // },
    // {
    //   name: 'Jodie Foster',
    //   image_url:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Jodie_Foster_C%C3%A9sars_2011_2_%28cropped%29.jpg/220px-Jodie_Foster_C%C3%A9sars_2011_2_%28cropped%29.jpg',
    //   info: 'An American Actress, Director and Producer',
    //   isDead: false,
    //   born: 1962
    // },
    // {
    //   name: 'Céline Dion',
    //   image_url:
    //     'http://static.tvmaze.com/uploads/images/medium_portrait/25/64971.jpg',
    //   info: 'A Canadian singer',
    //   isDead: false,
    //   born: 1968
    // },
    // {
    //   name: 'John Grisham',
    //   image_url:
    //     'http://static.tvmaze.com/uploads/images/medium_portrait/176/441088.jpg',
    //   info: 'An American Author and Politician',
    //   isDead: false,
    //   born: 1955
    // },
    // {
    //   name: 'Marvin Gaye',
    //   image_url:
    //     'http://static.tvmaze.com/uploads/images/medium_portrait/68/171783.jpg',
    //   info: 'American Singer and Songwriter',
    //   isDead: true,
    //   born: 1939,
    //   died: 1984
    // },
    // {
    //   name: 'Sonny Bono',
    //   image_url:
    //     'http://static.tvmaze.com/uploads/images/medium_portrait/35/89892.jpg',
    //   info: 'American Singer and Actor',
    //   isDead: true,
    //   born: 1935,
    //   died: 1998
    // },
    // {
    //   name: 'Arnold Schwarzenegger',
    //   image_url:
    //     'http://static.tvmaze.com/uploads/images/medium_portrait/11/29588.jpg',
    //   info: 'An Austrian American Actor and Politician',
    //   isDead: false,
    //   born: 1947
    // },
    // {
    //   name: "Joe Frazier 'Smokin' Joe'",
    //   image_url:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Joe_Frazier_2010.jpg/220px-Joe_Frazier_2010.jpg',
    //   isDead: true,
    //   born: 1944,
    //   died: 2011
    // },
    // {
    //   name: 'Jean-Claude Van Damme',
    //   image_url:
    //     'http://static.tvmaze.com/uploads/images/medium_portrait/72/181356.jpg',
    //   info: 'A Belgian Actor and Director',
    //   isDead: false,
    //   born: 1950
    // },
    // {
    //   name: 'River Phoenix',
    //   image_url:
    //     'http://static.tvmaze.com/uploads/images/medium_portrait/48/120595.jpg',
    //   info: 'American actor',
    //   isDead: true,
    //   born: 1970,
    //   died: 1993
    // },
    // {
    //   name: 'Bob Hope',
    //   image_url:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Bob_Hope%2C_1978.jpg/220px-Bob_Hope%2C_1978.jpg',
    //   info: 'An American Comedian and Actor',
    //   isDead: true,
    //   born: 1903,
    //   died: 2003
    // },
    // {
    //   name: 'Burt Reynolds',
    //   image_url:
    //     'http://static.tvmaze.com/uploads/images/medium_portrait/10/25497.jpg',
    //   info: 'An American Actor and Director',
    //   isDead: true,
    //   born: 1936,
    //   died: 2018
    // },
    // {
    //   name: 'Julie Andrews',
    //   image_url:
    //     'http://static.tvmaze.com/uploads/images/medium_portrait/45/112626.jpg',
    //   info: 'A British Actress and Singer',
    //   isDead: false,
    //   born: 1935
    // },
    // {
    //   name: 'Brad Pitt',
    //   image_url:
    //     'http://static.tvmaze.com/uploads/images/medium_portrait/11/29350.jpg',
    //   info: 'An American Actor',
    //   isDead: false,
    //   born: 1963
    // },
    // {
    //   name: 'Judi Dench',
    //   image_url:
    //     'http://static.tvmaze.com/uploads/images/medium_portrait/28/71684.jpg',
    //   info: 'A British Actress',
    //   isDead: true,
    //   born: 1934,
    //   died: 1934
    // },
    // {
    //   name: 'Jimmy Carter',
    //   image_url:
    //     'http://static.tvmaze.com/uploads/images/medium_portrait/20/50325.jpg',
    //   info: 'Former American President',
    //   isDead: false,
    //   born: 1924
    // },
    // {
    //   name: 'John Malkovich',
    //   image_url:
    //     'http://static.tvmaze.com/uploads/images/medium_portrait/5/14241.jpg',
    //   info: 'An American Actor and Filmmaker',
    //   isDead: false,
    //   born: 1953
    // },
    // {
    //   name: 'Christopher Reeve',
    //   image_url:
    //     'http://static.tvmaze.com/uploads/images/medium_portrait/29/74651.jpg',
    //   info: 'An American Actor',
    //   isDead: true,
    //   born: 1952,
    //   died: 2004
    // },
    // {
    //   name: 'Larry Hagman',
    //   image_url:
    //     'http://static.tvmaze.com/uploads/images/medium_portrait/11/28703.jpg',
    //   info: 'An American Actor',
    //   isDead: true,
    //   born: 1931,
    //   died: 2012
    // },
    // {
    //   name: 'Judy Garland',
    //   image_url:
    //     'http://static.tvmaze.com/uploads/images/medium_portrait/136/341814.jpg',
    //   info: 'An American Actress and Singer',
    //   isDead: true,
    //   born: 1922,
    //   died: 1969
    // },
    // {
    //   name: 'Neil Armstrong',
    //   image_url:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Neil_Armstrong_pose.jpg/220px-Neil_Armstrong_pose.jpg',
    //   info: 'An American Astronaut',
    //   isDead: true,
    //   born: 1930,
    //   died: 2012
    // },
    // {
    //   name: 'Rik Mayall',
    //   image_url:
    //     'http://static.tvmaze.com/uploads/images/medium_portrait/4/11209.jpg',
    //   info: ' A British Comedian and Actor',
    //   isDead: true,
    //   born: 1958,
    //   died: 2014
    // }
  ])
}
