import bcryptjs from "bcryptjs";

export const seed = function (knex) {
  return knex("clients")
    .del()
    .then(function () {
      return knex("clients").insert([
        {
          id: 1,
          phone_number: 78964521,
          first_name: "Javohir",
          last_name: "Muhammadiyev",
          password: bcryptjs.hashSync("foobazbar", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          phone_number: 78965412,
          first_name: "Quvonchbek",
          last_name: "Muysinov",
          password: bcryptjs.hashSync("foobazbar", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);
    });
};
