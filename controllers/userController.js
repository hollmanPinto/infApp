const Role = require('../database/models/Role');
const User=require('../database/models/User');

//funcion that create user
async function createUser(req,res) {
	await User.create({	
	  username: req.body.username,
	  contrasena: req.body.contrasena,
	  nombre: req.body.nombre,
	  apellido:req.body.apellido,
	  telefono:req.body.telefono,
	  direccion:req.body.direccion,
	  correo:req.body.correo,
	  roleRoleid:req.body.roleRoleid
	})
	.then((user) => {
	  return res.status(200).json(user)
	})
	.catch((error) => {
	  return res.status(400).json(error)
	});
      }
//function to find all users
async function allUser(req,res){
	await User.findAll({
		
	})
	.then((user) => {
	return res.status(200).json(user)
	      })
	.catch((error) => {
	return res.status(400).json(error)
	      });
}
//function to find user by username
async function findUsername(req,res,param){
	await User.findOne({where:{username:param}	
	})
	.then((user) => {
	return res.status(200).json(user)
	      })
	.catch((error) => {
	return res.status(400).json(error)
	      });
}

module.exports={createUser,allUser,findUsername};