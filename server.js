const express=require('express');
const server = express();
const sequelize=require('./database/db');
const User = require('./database/models/User');
require('./database/asociations');
const bodyParser = require('body-parser')
const Routes=require('./routes/routes')
//RUTAS
server.use(bodyParser.urlencoded({extended:false}))
server.use(bodyParser.json())
server.use(Routes)
//iniciar servidor
const PORT=process.env.PORT || 3000;

server.listen(PORT, function(){
	console.log(`Server run on port ${PORT}`);

	//Prueba conexion BD
	sequelize.sync({force:true}).then(()=>{
		console.log("DB sucesfully");
	}).catch(error=>{
		console.log('error',error);
	})
})