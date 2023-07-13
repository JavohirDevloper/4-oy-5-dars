import bcryptjs from "bcryptjs";

export const seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          id: 1,
          first_name: "Javohir",
          last_name: "Muhammadiyev",
          username: "javohir",
          password: bcryptjs.hashSync("foobazbar", 10),
          created_at: new Date(),
          updated_at: new Date(),
          is_deleted: false,
        },
        {
          id: 2,
          first_name: "Quvonchbek",
          last_name: "Muysinov",
          username: "quvonchbek",
          password: bcryptjs.hashSync("foobazbar", 10),
          created_at: new Date(),
          updated_at: new Date(),
          is_deleted: false,
        },
      ]);
    });
};