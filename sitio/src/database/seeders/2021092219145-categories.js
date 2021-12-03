'use strict';
const faker = require('faker');
const categorias = ["ropa","merchandising","comics","figuras"]
const categories = []

categorias.forEach(categoria => {
  let categorie = {
    name : categoria,
    createdAt: new Date,
    updatedAt:  new Date
  }
  categories.push(categorie)
});





module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.bulkInsert('Categories', categories, {});
    
  },

  down: async (queryInterface, Sequelize) => {
     
    await queryInterface.bulkDelete('Categories', null, {});
     
  }
};