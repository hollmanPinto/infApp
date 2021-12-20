const express=require('express');
const server = express();
const sequelize=require('./database/db');
const User = require('./database/models/User');
require('./database/asociations');
//RUTAS
server.get('/',function(req,res){
	User.create({
		firstname:"hollman",
		lastname:"pinto"
	}).then(user=>{
		res.json(user);
	});
});
//iniciar servidor
const PORT=process.env.PORT || 3000;

server.listen(PORT, function(){
	console.log(`Server run on port ${PORT}`);

	//Prueba conexion BD
	sequelize.sync({force:false}).then(()=>{
		console.log("DB sucesfully");
	}).catch(error=>{
		console.log('error',error);
	})
})