'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let [usuarios, usuarios_metadata] = await queryInterface.sequelize.query('SELECT id FROM Usuarios')
    let [perfils, perfils_metadata] = await queryInterface.sequelize.query('SELECT id FROM Perfils')

    await queryInterface.bulkInsert('UsuariosPerfiles', [
    { usuario_id: usuarios[0].id, perfil_id: perfils[0].id, createdAt: new Date(), updatedAt: new Date() },
    { usuario_id: usuarios[1].id, perfil_id: perfils[1].id, createdAt: new Date(), updatedAt: new Date() },
    { usuario_id: usuarios[2].id, perfil_id: perfils[2].id, createdAt: new Date(), updatedAt: new Date() },
    { usuario_id: usuarios[3].id, perfil_id: perfils[3].id, createdAt: new Date(), updatedAt: new Date() },

  ],{});
    },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UsuariosPerfiles', null, {});
  }
};
