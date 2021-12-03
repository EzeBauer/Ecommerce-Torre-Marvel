'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {
        as: "category",
        foreignKey: "categoryId",
      });
      
    } 
  };
  Product.init(
    {
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notNull: {
            msg: "El campo 'title' no puede ser nulo",
          },
          notEmpty: {
            msg: "El titulo del producto es requerido",
          },
        },
      },
      description: {
        type: DataTypes.STRING(250),
        allowNull: false,
        validate: {
          notNull: {
            msg: "El campo 'description' no puede ser nulo",
          },
          notEmpty: {
            msg: "La descripción del producto es requerida",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "El campo 'price' no puede ser nulo",
          },
          notEmpty: {
            msg: "El precio del producto es requerido",
          },
        },
      },
      image: DataTypes.STRING,
      discount: DataTypes.INTEGER,
      categoryId: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {
          msg : "La 'categoría' no puede ser nulo"
        },
        notEmpty : {
          msg : 'La categoría del producto es requerida'
        }
      }
    }
  
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};