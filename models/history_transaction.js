'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class history_transaction extends Model {
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
      this.belongsTo(models.transactions, {
        as:'transaction',
        foreignKey:'id_transaction'
      })
      this.belongsTo(models.customers, {
        as:'customer',
        foreignKey:'id_customer'
      })
    }
  };
  history_transaction.init({
    id_seller: DataTypes.INTEGER,
    id_transaction: DataTypes.INTEGER,
    id_customer: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'history_transaction',
  });
  return history_transaction;
};