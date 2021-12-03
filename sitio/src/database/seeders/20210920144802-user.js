'use strict';
const faker = require('faker');
const users = []

for (let i = 0; i < 3; i++) {
  let user = {
    nameUser:faker.name.firstName(),
    password: 123123,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    rol: 'usuario',
    createdAt: new Date,
    updatedAt:  new Date
  }
  users.push(user)
  
}



module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.bulkInsert('Users', users, {});
    
  },

  down: async (queryInterface, Sequelize) => {
     
    await queryInterface.bulkDelete('Users', null, {});
     
  }
};
