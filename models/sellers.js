'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sellers extends Model {
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
  sellers.init({
    name_shop: DataTypes.STRING,
    email: DataTypes.STRING,
    photo: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    lat: DataTypes.DOUBLE,
    long: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'sellers',
  });
  return sellers;
};