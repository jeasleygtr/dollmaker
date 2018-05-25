'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Emails', [
      {
        "Email": "test@foobar.com"
      },
      {
        "Email": "test@barfoo.com"
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Emails');
  }
};
