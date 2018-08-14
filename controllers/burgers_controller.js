var express = require("express");
var burgers = require("../models/burger.js");

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });

});

// Export routes for server.js to use.
module.exports = router;