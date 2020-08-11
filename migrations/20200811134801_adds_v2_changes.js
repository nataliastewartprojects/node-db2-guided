exports.up = function (knex) {
  return knex.schema
    .createTable("classes", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable().unique();
    })
    .createTable("weapons", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable().unique();
      tbl.integer("power").notNullable().defaultTo(1);
    })
    .createTable("armors", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable().unique();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("characters")
    .dropTableIfExists("weapons")
    .dropTableIfExists("armors");
};
