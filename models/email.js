'use strict';
module.exports = (sequelize, DataTypes) => {
  var Email = sequelize.define('Email', {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
    },
    Email: {
      type: DataTypes.STRING,
      notNull: true,
      isEmail: true,
      len: [1,100],   
    }
  }, {
    timestamps: false
  });
  Email.associate = function(models) {
    // associations can be defined here
  };
  return Email;
};