const defaultData = [
  {
    name: "Appetizers"
  },
  {
    name: "Meals"
  },
  {
    name: "Desserts"
  },
]

exports.seed = function(knex) {
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert(defaultData);
    });
};
