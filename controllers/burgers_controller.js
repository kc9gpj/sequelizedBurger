var express = require("express");
var burgers = require('../models/')["burgers"];

var router = express.Router();

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get("/burgers", function(req, res) {
   burgers.findAll({})
      .then(function(data) {
        var hbsObject = {
            burgers: data
          };
          res.render("index", hbsObject);
      });
  });

  
  router.post("/", function(req, res) {
    burgers.create([
      "name"
    ], [
      req.body.name
    ], function() {
      res.redirect("/");

    });
  });
  
  router.post("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burgers.update({
      devoured: req.body.devoured
    }, condition, function() {
      res.redirect("/");
    });
  });

// Export routes for server.js to use.
module.exports = router;
