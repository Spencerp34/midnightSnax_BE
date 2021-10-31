const defaultData = [
  {
    title: "Pizza",
    price: 8.99,
    category: 2,
    description: "Up to three free toppings. Additional is $0.25 each.",
    img_url: "https://i2.wp.com/thecheesewanker.com/wp-content/uploads/2021/08/Stretchy-Mozzarella-e1628569483342.jpg?fit=750%2C600&ssl=1",
    dairy: true,
    gluten: true,
  },
  {
    title: "Mozzarella Sticks",
    price: 4.99,
    category: 1,
    description: "Fried to perfection. Stretchy cheese for days. Comes with marinara sauce!",
    img_url: "https://www.fifteenspatulas.com/wp-content/uploads/2013/02/Homemade-Mozzarella-Sticks-Fifteen-Spatulas.jpg",
    dairy: true,
    gluten: true,
  },
  {
    title: "Queso dip",
    price: 4.99,
    category: 1,
    description: "Spicy queso dip to share. Serves two.",
    img_url: "https://topsecretrecipes.com/images/product/chilis-chili-queso-copycat-recipe.jpg",
    dairy: true,
    gluten: true,
  },
  {
    title: "Soup of the day.",
    price: 7.99,
    category: 2,
    description: "Optional bread bowl (inquire about today's flavor!)",
    img_url: "https://3d1zvgya81uuh1sso1s4f1e1-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/Broccoli-Cheddar-456x310.jpeg",
  },
  {
    title: "Peanut Butter and Jelly shake",
    price: 3.99,
    category: 3,
    description: "Delicious creamy peanut butter and strawberry jelly ice cream milkshake. Optional whipped cream topping with cherry.",
    img_url: "https://images.ctfassets.net/1nucuk3qd958/5QooCotLUM2FDNHR6OgyI0/1ff6b6f743d61ae1526f448b95a34946/PB_MILKSHAKE?w=660&h=744&q=60&fit=fill&fm=jpg",
    dairy: true,
    gluten: true,
    nuts: true,
  },
]

exports.seed = function(knex) {
  return knex('dishes').del()
    .then(function () {
      return knex('dishes').insert(defaultData);
    });
};