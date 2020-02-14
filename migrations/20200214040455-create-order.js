'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer_id: {
        type: Sequelize.INTEGER
      },
      tanggal: {
        type: Sequelize.DATE
      },
      room_id: {
        type: Sequelize.INTEGER
      },
      qty_room: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.BIGINT
      },
      attachment: {
        type: Sequelize.STRING
      },
      booking_code: {
        type: Sequelize.TEXT
      },
      income: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      customer_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
          references:{
              model:'customers',
              key:'id'
          },
          onDelete:'cascade',
          onUpdate:'cascade'
      },

      room_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
          references:{
            model:'rooms',
            key:'id'
          },
          onDelete:'cascade',
          onUpdate:'cascade'
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};