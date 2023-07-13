export const seed = function (knex) {
  return knex("orders")
    .del()
    .then(function () {
      return knex("orders").insert([
        {
          id: 1,
          client_id: 1,
          total_price: 25.99,
          is_paid: false,
          status: "preparing",
        },
        {
          id: 2,
          client_id: 2,
          total_price: 12.99,
          is_paid: true,
          status: "completed",
        },
      ]);
    });
};