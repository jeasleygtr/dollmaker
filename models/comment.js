'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
    },
    Comment: {
      type: DataTypes.TEXT,
      len: [1,1000]
    }
  }, {
    timestamps: false
  });
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};