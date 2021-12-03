'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     
    } 
  };
  User.init({
    nameUser: DataTypes.STRING(45),
    password: DataTypes.STRING(100),
    firstName: DataTypes.STRING(100),
    lastName: DataTypes.STRING(100),
    email: DataTypes.STRING(45),
    avatar: DataTypes.STRING,
    rol: DataTypes.STRING(45),
    country: DataTypes.STRING(45),
    city: DataTypes.STRING(45),
    favoriteAvenger: DataTypes.STRING(45),
    hobbies: DataTypes.STRING(250)
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};