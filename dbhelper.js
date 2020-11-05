const db = require("./knex/knexconfig");

/* 
- `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
- `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe
*/

function getRecipes() {
  return db("recipe");
}

function getShoppingList(id) {
  return db("amounts")
    .where({ recipe_id: id })
    .join("ingredients", "ingredients.id", "amounts.ingredient_id")
    .select("ingredients.ingredient_name", "amount.amount");
}

function getInstructions(recipe_id) {
  return db("steps").where({ recipe_id: id }).orderBy("step_number");
}

module.exports = { getRecipes, getShoppingList, getInstructions };