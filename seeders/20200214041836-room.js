'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('rooms', [
        {
          size: 'Single',
          price:500000
        },
        {
          size: 'Double',
          price:1300000
        },
        {
          size: 'Deluxe',
          price:2000000
        }  
      
      ], {});
   
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
