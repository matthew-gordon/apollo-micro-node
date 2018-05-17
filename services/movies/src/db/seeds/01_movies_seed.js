exports.seed = (knex, Promise) => {
  return knex('movies').del()
    .then(() => {
      return Promise.join(
        knex('movies').insert({
          name: 'dino sir',
        }) // eslint-disable-line
      );
    })
    .catch((err) => { console.log(err); }); // eslint-disable-line
};