const {Model,DataTypes}=require('sequelize');
const sequelize = require('../db');

class Role extends Model {}
Role.init({
  // Model attributes are defined here
  roleid: {
    primaryKey:true,
    autoIncrement:true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rolename:{
	  type: DataTypes.STRING,
	  allowNull:false
  },
  inventario: {
	type: DataTypes.BOOLEAN,
	allowNull: false
      },
  clientes: {
	type: DataTypes.BOOLEAN,
	allowNull: false
      },
  proyectos: {
	type: DataTypes.BOOLEAN,
	allowNull: false
      }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'role', // We need to choose the model name
  timestamps:false
});

module.exports=Role;