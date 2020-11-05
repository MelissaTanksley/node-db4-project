exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('recipe', tbl => {
        tbl.increments();
        tbl.string('recipe_name').notNullable().unique();
    })  
    .createTable('steps', tbl => {
        tbl.increments();
        tbl.integer('step_number').notNullable();
        tbl.string('directions').notNullable();
        tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipe');
    })
    .createTable('amount', tbl => {
        tbl.increments();
        tbl.string('amount').notNullable();
        tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipe');
        tbl.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredients');
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient_name').notNullable().unique();
    })
    };
    
    exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('ingredients')
      .dropTableIfExists('amount')
      .dropTableIfExists('steps')
      .dropTableIfExists('recipe')
    };