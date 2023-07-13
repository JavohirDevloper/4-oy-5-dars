export const seed = function (knex) {
  return knex("item_sizes")
    .del()
    .then(function () {
      return knex("item_sizes").insert([
        {
          id: 1,
          item_id: 1,
          price: 10.99,
          size: "Small",
          photo: "small.jpg",
          is_deleted: false,
        },
        {
          id: 2,
          item_id: 1,
          price: 12.99,
          size: "Medium",
          photo: "medium.jpg",
          is_deleted: false,
        },
        {
          id: 3,
          item_id: 1,
          price: 14.99,
          size: "Large",
          photo: "large.jpg",
          is_deleted: false,
        },
      ]);
    });
};