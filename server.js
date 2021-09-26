var express = require('express');
var app = express();

var recipes = require("./controllers/recipes");


app.get('/v2/recipe/:id', async function(req, res) {
    await recipes.getRecipe(req, res);
});

app.listen(3000, function() {
    console.log('Server is running on PORT:',3000);
});




/*
GET /api/recipes/top/@top/@limit=ApiController->apiTopRecipes
GET /api/recipes/@pos/@limit=ApiController->apiRecipes
POST /api/recipes=ApiController->apiRecipesById
POST /api/recipe=ApiController->apiAddRecipe
DELETE /api/recipe/@id=ApiController->apiDeleteRecipe
GET /api/recipe/@id=ApiController->apiGetRecipe
POST /api/recipe/viewed/@id=ApiController->apiViewRecipe
POST /api/recipe/favorite/@id=ApiController->apiFavoriteRecipe
POST /api/recipe/shared/@id=ApiController->apiShareRecipe

GET /api/categories=ApiController->apiGetCategories
POST /api/category=ApiController->apiAddCategory
GET /api/category/@id=ApiController->apiGetCategory
DELETE /api/category/@id=ApiController->apiDeleteCategory

GET /api/preference/@name=ApiController->apiGetPreference
POST /api/preference/@name=ApiController->apiSetPreference

POST /api/sendpush=ApiController->apiSendPushNotification

*/