'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Names', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING,
        notNull: true,
        len: [1,100],   
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Names');
  }
};