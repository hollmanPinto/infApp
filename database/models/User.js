const {Model,DataTypes}=require('sequelize');
const sequelize = require('../db');

class User extends Model {}
User.init({
  userid: {
	primaryKey:true,
	autoIncrement:true,
	type: DataTypes.INTEGER,
	allowNull: false
	      },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
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
  roleRoleid: {
	type: DataTypes.INTEGER,
  defaultValue:3,
	allowNull: false, 
      }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'user', // We need to choose the model name
  timestamps:false
});

module.exports=User;