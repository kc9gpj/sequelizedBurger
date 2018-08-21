var Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define("burgers", {
     name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    devoured: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    
  });
  return burgers;
};



// previous models code
// var orm = require("../config/orm.js");

// var burgers = {
//     all: function(cb) {
//       orm.all("burgers", function(res) {
//         cb(res);
//       });
//     },
//     // The variables cols and vals are arrays.
//     create: function(cols, vals, cb) {
//       orm.create("burgers", cols, vals, function(res) {
//         cb(res);
//       });
//     },
//     update: function(objColVals, condition, cb) {
//       orm.update("burgers", objColVals, condition, function(res) {
//         cb(res);
//       });
//     },
//   };
  
// module.exports = burgers;