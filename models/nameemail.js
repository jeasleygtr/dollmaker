'use strict';
module.exports = (sequelize, DataTypes) => {
  var nameEmail = sequelize.define('nameEmail', {
    nameID: DataTypes.INTEGER,
    emailID: DataTypes.INTEGER
  }, {});
  nameEmail.associate = function(models) {
    // associations can be defined here
  };
  return nameEmail;
};