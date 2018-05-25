'use strict';
module.exports = (sequelize, DataTypes) => {
  var nameComment = sequelize.define('nameComment', {
    nameID: DataTypes.INTEGER,
    commentID: DataTypes.INTEGER
  }, {});
  nameComment.associate = function(models) {
    // associations can be defined here
  };
  return nameComment;
};