var connection = require("../config/connection.js");


// In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`


var orm = {
    selectAll: function() {
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
 };


module.exports = orm;
