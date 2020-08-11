exports.up = function (knex) {
  return knex.schema
    .createTable("professions", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable().unique();
    })
    .createTable("tools", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable().unique();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("professions")
    .dropTableIfExists("tools");
};
