const {Model,DataTypes}=require('sequelize');
const sequelize = require('../db');

class Role extends Model {}
Role.init({
  // Model attributes are defined here
  RoleName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Permisos: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'role' // We need to choose the model name
});

module.exports=Role;