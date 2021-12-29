'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.items, {
        as:'items',
        foreignKey:'id'
      })
    }
  };
  categories.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categories',
  });
  return categories;
};