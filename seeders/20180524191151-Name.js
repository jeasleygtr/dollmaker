'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Names', [
      {
        "Name": "Daniel Crowley"
      },
      {
        "Name": "Jeff Easley"
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Names');
  }
};
