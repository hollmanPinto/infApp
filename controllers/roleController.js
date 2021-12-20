const Role=require('../database/models/Role');

function createRole(req,res) {
	console.log(req.body)
	Role.create({	
	  rolename: req.body.rolename,
	  inventario: req.body.inventario,
	  clientes: req.body.clientes,
	  proyectos:req.body.proyectos
	})
	.then((user) => {
	  return res.status(200).json(user)
	})
	.catch((error) => {
	  return res.status(400).json(error)
	});
      }

module.exports={createRole};