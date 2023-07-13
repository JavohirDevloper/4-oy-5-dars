export const seed = function (knex) {
  return knex("items")
    .del()
    .then(function () {
      return knex("items").insert([
        {
          id: 1,
          type: "pitsalar",
          is_deleted: false,
        },
        {
          id: 2,
          type: "salatlar",
          is_deleted: false,
        },
        {
          id: 3,
          type: "desertlar",
          is_deleted: false,
        },
        {
          id: 4,
          type: "ichimliklar",
          is_deleted: false,
        },
      ]);
    });
};
