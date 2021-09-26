function getAllRecipes(dbConnection) {
    return new Promise((resolve, reject) => {
        dbConnection.query("SELECT * FROM recipes", function (err, result) {
            return err ? reject(err) : resolve(result);
          });
    });
}
function getRecipe(dbConnection, id) {
    return new Promise((resolve, reject) => {
        dbConnection.query("SELECT * FROM recipes WHERE Id = ? ", [id], function (err, result) {
            return err ? reject(err) : resolve(result);
          });
    });
}

module.exports = { getAllRecipes, getRecipe }