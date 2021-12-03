'use strict';
const faker = require('faker');
const productitos = require('../../data/products_db');

const products = []

productitos.forEach(producto => {
  let product = {
    title: producto.nombre,
    description: producto.descripcion,
    price: producto.precio,
    image: producto.imagen,
    discount: producto.discount ? producto.discount : null ,
    categoryId: producto.categoria,
    createdAt: new Date,
    updatedAt: new Date,
  }
  products.push(product)
});





module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.bulkInsert('Products', products, {});
    
  },

  down: async (queryInterface, Sequelize) => {
     
    await queryInterface.bulkDelete('Products', null, {});
     
  }
};
