exports.up = (knex) => {
  return knex.schema.createTable("merchant", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("phoneNumber").notNullable();
    table.decimal("latitude").notNullable();
    table.decimal("longitude").notNullable();
    table.boolean("isActive").defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("merchant");
};
