const jwt = require('jsonwebtoken');
const User=require('../database/models/User');
//FUNCION PARA COMPARAR CON EL LOGIN
function loginUser(req,res){
	User.findAll({
		//attributes:['username','correo'],
		where:{username:req.body.username, contrasena:req.body.contrasena}
	})
	.then((user) => {
		if(Object.keys(user).length===0){
			console.log('User not Found')
		}
		else{
			console.log(user)
			jwt.sign({user:user},'secretkey',(err, token)=>{
				res.json({token})
			})}	
		
	})	
	.catch((error) => {
	return res.console.log('ERROR')
	});
}
module.exports={loginUser};