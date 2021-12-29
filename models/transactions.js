'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.sellers, {
        as:'seller',
        foreignKey:'id_seller'
      })
      this.belongsTo(models.customers, {
        as:'customer',
        foreignKey:'id_customer'
      })
    }
  };
  transactions.init({
    id_customer: DataTypes.INTEGER,
    id_seller: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    date: DataTypes.DATE,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'transactions',
  });
  return transactions;
};