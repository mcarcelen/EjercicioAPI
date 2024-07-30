'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Perfils', [
      {
        id: 1,
        descripcion: 'Admin',
        estado: 'activo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        descripcion: 'Supervisor',
        estado: 'activo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        descripcion: 'Operador',
        estado: 'activo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        descripcion: 'Cliente',
        estado: 'activo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
        ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Perfils', null, {});

  }
};
