export const seed = function (knex) {
  return knex("order_items")
    .del()
    .then(function () {
      return knex("order_items").insert([
        {
          id: 1,
          item_id: 1,
          size_id: 1,
          quantity: 2,
          sub_total_price: 21.98
        },
        {
          id: 2,
          item_id: 2,
          size_id: 3,
          quantity: 1,
          sub_total_price: 14.99,
        },
      ]);
    });
};
