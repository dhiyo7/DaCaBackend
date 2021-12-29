'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.items, {
        as:'item',
        foreignKey:'id_item'
      })
      this.belongsTo(models.transactions, {
        as:'transaction',
        foreignKey:'id_transaction'
      })
    }
  };
  detail_transactions.init({
    id_item: DataTypes.INTEGER,
    id_transaction: DataTypes.INTEGER,
    qty_item: DataTypes.INTEGER,
    subtotal: DataTypes.INTEGER,
    price_item: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detail_transactions',
  });
  return detail_transactions;
};