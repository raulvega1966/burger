
var express = require("express");

var router = express.Router();

// Import the model burger.js (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

router.get('/', function(req, res){
  res.redirect('/burger')
});


router.get("/burger", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burger/create", function(req, res) {
  burger.create([
    "burgername"
//console.log(req.body)
  ], [
   
    req.body.burgername
  ], function() {
    res.redirect("/burger");
  });
});

router.put("/burger/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/burger");
  });
});


/*
router.delete('/burger/delete/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;

  burger.delete('burger', condition, function() {
    res.redirect('/burger');
  });
});
*/

// Export routes for server.js to use.
module.exports = router;