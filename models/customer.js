'use strict';
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define('customer', {
    nama: DataTypes.STRING,
    telp: DataTypes.BIGINT,
    email: DataTypes.STRING
  }, {});
  customer.associate = function(models) {
    // associations can be defined here
  };
  return customer;
};