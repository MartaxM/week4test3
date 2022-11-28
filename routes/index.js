var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {});

let recipes = [];

router.get("/recipe/:food", (req, res) => {
  let food = {
    name: req.params.food,
    instructions: [],
    ingredients: []
  };

  recipes.push(food);

  res.json(food);
  res.render("index", {
    name: food.name,
    ing: food.ingredients,
    ins: food.instructions
  });
});

module.exports = router;
