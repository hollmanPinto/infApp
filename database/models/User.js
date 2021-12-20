const {Model,DataTypes}=require('sequelize');
const sequelize = require('../db');

class User extends Model {}
User.init({
  // Model attributes are defined here
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contrasena: {
	type: DataTypes.STRING,
	allowNull: false
      },
  nombre: {
	type: DataTypes.STRING,
	allowNull: false
      },
  apellido: {
	type: DataTypes.STRING,
	allowNull: false
      },
  telefono: {
	type: DataTypes.BIGINT,
	allowNull: false
      },
  direccion: {
	type: DataTypes.STRING,
	allowNull: false
      },
  correo: {
	type: DataTypes.STRING,
	allowNull: false
      },
  rol: {
	type: DataTypes.INTEGER,
	allowNull: false
      },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'user' // We need to choose the model name
});

module.exports=User;