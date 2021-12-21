var express = require('express');
var router = express.Router();
const userRoute = require('../controllers/userController')
const roleRouter = require('../controllers/roleController')
const login = require('../login/login');
const jwt = require('jsonwebtoken');

//RUTAS//
router.post('/signin',(login.loginUser));
router.post('/register', (userRoute.createUser));

router.get('/profile',verifyToken,(req,res) => {  
	jwt.verify(req.token, 'secretkey', (error, authData)=>{
		if(error){
			res.sendStatus(403);
		}
		else{res.json({
			authData,
			"mensaje":userRoute.allUser
		});			
		}
	});
});

router.post('/roles', (roleRouter.createRole));

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