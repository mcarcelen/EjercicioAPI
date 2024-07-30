'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addConstraint('UsuariosPerfiles', {
      fields: ['usuario_id'],
      name: 'usuario_id_fk',
      type: 'foreign key',
      references: {
      table: 'Usuarios',
      field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
      });
      await queryInterface.addConstraint('UsuariosPerfiles', {
      fields: ['perfil_id'],
      name: 'perfil_id_fk',
      type: 'foreign key',
      references: {
      table: 'Perfils',
      field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('UsuariosPerfiles', 'usuario_id');
    await queryInterface.removeConstraint('UsuariosPerfiles', 'perfil_id_fk');
  }
};
