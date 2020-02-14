'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('customers', [
          {
            nama: 'John Doe',
            telp: 8942838123,
            email:'jhondoe@gmail.com'
          },
          {
            nama: 'Dumbo',
            telp: 8942838123,
            email:'dumb@gmail.com'
          },
          {
            nama: 'Wumbo',
            telp: 8213512312,
            email:'jhondoe@gmail.com'
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
