'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApiHeroe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ApiHeroe.init({
    name: DataTypes.STRING(45),
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ApiHeroe',
  });
  return ApiHeroe;
};