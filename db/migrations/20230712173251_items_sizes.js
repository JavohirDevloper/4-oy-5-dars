/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("item_sizes", (table) => {
    table.increments("id");
    table.double("price").notNullable();
    table.string("size").notNullable();
    table.string("photo").notNullable();
    table.timestamps(true, true);
    table.boolean("is_deleted").defaultTo(false);
    table
      .integer("item_id")
      .references("id")
      .inTable("items")
      .onDelete("CASCADE")
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("item_sizes");
};
