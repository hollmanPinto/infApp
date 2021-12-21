const Role = require('../database/models/Role');
const User=require('../database/models/User');

function createUser(req,res) {
	//console.log(req.body)
	User.create({	
	  username: req.body.username,
	  contrasena: req.body.contrasena,
	  nombre: req.body.nombre,
	  apellido:req.body.apellido,
	  telefono:req.body.telefono,
	  direccion:req.body.direccion,
	  correo:req.body.correo,
	  roleRoleid:req.body.roleid
	})
	.then((user) => {
	  return res.status(200).json(user)
	})
	.catch((error) => {
	  return res.status(400).json(error)
	});
      }

function allUser(req,res){
	User.findAll({
		
	})
	.then((user) => {
	return res.status(200).json(user)
	      })
	.catch((error) => {
	return res.status(400).json(error)
	      });
}

module.exports={createUser,allUser};