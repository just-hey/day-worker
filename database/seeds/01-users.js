
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'Wood_shop_guy',
          name:"Woody",
          email:"woodWorker@gmail.com",
          phone:"555-555-5555",
          zipcode:98034,
          password:"$2a$10$iBZ0kveJaUy6qpliztp1remU8VPw.9Qdzs9aaFbTUf21r/6BifHwy",
          user_kind:"worker"
         },
        {
          id: 2,
          username: 'tile_guy',
          name: "Thom",
          email:"4tile@gmail.com",
          phone:"111-111-1111",
          zipcode:98033,
          password:"$2a$10$iBZ0kveJaUy6qpliztp1remU8VPw.9Qdzs9aaFbTUf21r/6BifHwy",
          user_kind:"worker"
        },
        {
          id: 3,
          username: 'Fix_your_fence',
          name:"Phill",
          email:"fenceGuy@gmail.com",
          phone:"333-333-3333",
          zipcode:98036,
          password:"$2a$10$iBZ0kveJaUy6qpliztp1remU8VPw.9Qdzs9aaFbTUf21r/6BifHwy",
          user_kind:"worker"
        }
      ]);
    })
    .then(() => {
      return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`)
    })
};
