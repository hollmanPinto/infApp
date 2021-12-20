var express = require('express');
var router = express.Router();
const userRoute = require('../controllers/userController')
const roleRouter = require('../controllers/roleController')

router.post('/register', (userRoute.createUser));
router.get('/profile', (userRoute.allUser))

router.post('/roles', (roleRouter.createRole));

router.post('/login',(req,res,next)=>{
	res.json('signin')
})
router.get('/profile',(req,res,next)=>{
	res.json('dashboard')
})

module.exports = router;