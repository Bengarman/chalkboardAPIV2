var generic = require("../generic");
var recipes = require("../repositories/recipes/recipesRepositories");

async function getRecipe(req, res){
    var id = req.params.id;
    console.time("Get Recipe #" + id + ": ");
    var connection = await generic.connectDB();
    var recipe = (await recipes.getRecipe(connection, req.params.id))[0];
    console.timeEnd("Get Recipe #" + id + ": ");
    res.status(200).send(recipe);
}
module.exports = { getRecipe }