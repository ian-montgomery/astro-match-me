const { generateHash } = require('authenticare/server')

exports.seed = (knex) => {
  return knex('users').del()
    .then(() => Promise.all([
      generateHash('ian'),
      generateHash('orlando'),
      generateHash('123')
    ]))
    .then(([ianHash, orlandoHash, hortenseHash]) =>
      knex('users').insert([
        { id: 1, username: 'Ian', hash: ianHash},
        { id: 2, username: 'Orlando', hash: orlandoHash },
        { id: 3, username: 'Hortense', hash: hortenseHash },
        { id: 4, username: 'Emily', hash: hortenseHash },
        { id: 5, username: 'Saskia', hash: hortenseHash },
        { id: 6, username: 'Jess', hash: hortenseHash},
        { id: 7, username: 'Olivia', hash: hortenseHash },
        { id: 8, username: 'Robbie', hash: hortenseHash },
        { id: 9, username: 'Strawberry', hash: hortenseHash },
        { id: 10, username: 'MattB', hash: hortenseHash },
        { id: 11, username: 'Gareth', hash: hortenseHash },
        { id: 12, username: 'Wonderphil', hash: hortenseHash },
        { id: 13, username: 'Ollie', hash: hortenseHash },
        { id: 14, username: 'Alex', hash: hortenseHash },
        { id: 15, username: 'Corian', hash: hortenseHash },
        { id: 16, username: 'Adam', hash: hortenseHash },
        { id: 17, username: 'Jesse', hash: hortenseHash },
        { id: 18, username: 'Manu', hash: hortenseHash },
      ])
    )
}