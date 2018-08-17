// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "blonze2d5mrbmcgf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "dlnrdovtboolo7yo",
  password: "iph5e2u3f4emj4lf",
  database: "fwfn7bo9qdjxr5ie"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
