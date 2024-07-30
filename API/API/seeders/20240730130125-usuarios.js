'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [
      {
        id: 1,
        usuario: 'admin_user',
        nombre: 'John',
        apellido: 'Doe',
        id_perfil: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        usuario: 'supervisor_user',
        nombre: 'Jane',
        apellido: 'Smith',
        id_perfil: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        usuario: 'operador_user',
        nombre: 'Carlos',
        apellido: 'Gonzalez',
        id_perfil: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        usuario: 'cliente_user',
        nombre: 'Maria',
        apellido: 'Martinez',
        id_perfil: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
