'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Perfil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        models.Perfil.belongsToMany(models.Usuario, { through:'UsuariosPerfiles', foreignKey: "usuarios_id" } );
    }
  }
  Perfil.init({
    descripcion: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Perfil',
    tableName: 'Perfils'
  });
  return Perfil;
};