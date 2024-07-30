'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    static associate(models) {
      models.Usuario.belongsToMany(models.Perfil, { through:'UsuariosPerfiles', foreignKey: "[perfil_id" } );
  }
  }
  Usuarios.init({
    usuario: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    id_perfil: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuarios',
    tableName: 'Usuarios'
  });
  return Usuarios;
};