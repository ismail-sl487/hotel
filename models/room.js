'use strict';
module.exports = (sequelize, DataTypes) => {
  const room = sequelize.define('room', {
    size: DataTypes.STRING,
    price: DataTypes.BIGINT
  }, {});
  room.associate = function(models) {
    // associations can be defined here
  };
  return room;
};