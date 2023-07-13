/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
    return knex.schema.createTable('order_items', (table) => {
      table.increments('id');
      table.integer('quantity').notNullable();
      table.double('sub_total_price').notNullable();
      table.integer('size_id').references('id').inTable('item_sizes').onDelete('CASCADE');
      table.integer('item_id').references('id').inTable('items').onDelete('CASCADE');
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export const down = function(knex) {
    return knex.schema.dropTable('order_items')
  };
          