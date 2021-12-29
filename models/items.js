'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.categories, {
        as:'category',
        foreignKey:'id_category'
      })
      this.belongsTo(models.sellers, {
        as:'seller',
        foreignKey:'id_seller'
      })
    }
  };
  items.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    desc: DataTypes.TEXT,
    photo: DataTypes.STRING,
    id_seller: DataTypes.INTEGER,
    id_category: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'items',
  });
  return items;
};