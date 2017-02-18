
var express = require("express");

var router = express.Router();

// Import the model burger.js (cat.js) to use its database functions.
var burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

router.get('/', function(req, res){
  res.redirect('/burgers')
});


router.get("/burgers", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req, res) {
  burgers.create([
    "burger_name"
  ], [
    req.body.name
  ], function() {
    res.redirect("/burgers");
  });
});

router.put("/burgers/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.update({
    'devoured': req.body.devoured
  }, condition, function() {
    res.redirect("/burgers");
  });
});


// Export routes for server.js to use.
module.exports = router;