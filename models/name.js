'use strict';
module.exports = (sequelize, DataTypes) => {
  var Name = sequelize.define('Name', {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
    },
    Name: {
      type: DataTypes.STRING,
      notNull: true,
      len: [1,100],   
    }
  }, {
    timestamps: false
  });
  Name.associate = function(models) {
    Name.belongsTo(models.Email, {
      foreignKey
    });
    Name.belongsTo(models.Comment);
  };
  return Name;
};