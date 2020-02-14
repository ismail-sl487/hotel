'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    customer_id: DataTypes.INTEGER,
    tanggal: DataTypes.DATE,
    room_id: DataTypes.INTEGER,
    qty_room: DataTypes.INTEGER,
    status: DataTypes.STRING,
    total: DataTypes.BIGINT,
    attachment: DataTypes.STRING,
    booking_code: DataTypes.TEXT,
    income: DataTypes.BOOLEAN
  }, {});
  order.associate = function(models) {
    // associations can be defined here
    order.belongsTo(models.customer,
      {
        as : 'customerId',
        foreignKey : 'customer_id' 
      },
            order.belongsTo(models.room,
              {
                as:'roomId',
                foreignKey:'room_id' 
              }
            )
    )
  };
  return order;
};