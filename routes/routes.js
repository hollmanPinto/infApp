var express = require('express');
var router = express.Router();
const userRoute = require('../controllers/userController')
const roleRouter = require('../controllers/roleController')
const login = require('../login/login');
const jwt = require('jsonwebtoken');

var projectAuth=true
//RUTAS//
router.post('/signin',(login.loginUser));
router.post('/register', (userRoute.createUser));

router.get('/profile',verifyToken,(req,res) => {  
	jwt.verify(req.token, 'secretkey', (error, authData)=>{
		if(error){res.sendStatus(403)}
		else{	
			//estoy operando los arrays para obteer el username especifico	
			var datauserJSON=(authData.user[0]);	
			var userString = datauserJSON['username']
			userRoute.findUsername(req,res,userString)
		}
	});	
});
router.get('/projects',verifyToken,(req,res)=>{
	jwt.verify(req.token, 'secretkey', (error, authData)=>{
		if(error){res.sendStatus(403)}
		else{	
			var datauserJSON=(authData.user[0]);	
			var userString = datauserJSON['role'];
			var keyStringProjects = userString['proyectos'];
			if(keyStringProjects==false){
				res.sendStatus(403);
			}			
		}
	});
	res.send('hi projects')
})

router.post('/roles', (roleRouter.createRole));

router.get('/clients',verifyToken,(req,res)=>{
	jwt.verify(req.token, 'secretkey', (error, authData)=>{
		if(error){res.sendStatus(403)}
		else{	
			//estoy operando los arrays para obteer el username especifico	
			var datauserJSON=(authData.user[0]);	
			var userString = datauserJSON['role']
			var keyStringClients = userString['clientes'];
			var keyStringProjects = userString['proyectos'];
			//estoy dando autorizacion por roles
			if((keyStringClients && keyStringProjects)==false){
				res.sendStatus(403);
			}
		}
	});
	res.send('hi clients')
})

router.get('/stock',(req,res)=>{
	res.send('hi stock')
})
//FUNCION PARA VERIFICAR TOKENS Y PERMITIR ACCESO//
function verifyToken(req,res,next){
	const bearerHeader=req.headers['authorization'];

	if(typeof bearerHeader !== 'undefined'){
		const bearerToken = bearerHeader.split(" ")[1];
		req.token = bearerToken;
		next();
	}else{
		res.sendStatus(403);
	}
}
module.exports = router;

//******************TAREAS POR HACER ************************/
//1.QUE UN USUARIO LOGUEADO PUEDA VER LAS PESTAÑAS DE ACUERDO A SU ROL
//2.QUE UN USUARIO NO LOGUEADO AL INTENTAR ENTRAR A PROFILE, PROJECTS O CLIENTS
//EL SISTEMA LO DEVUELVA AL SIGN IN
