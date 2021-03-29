var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function(req, res) {
    res.render('login')
})
// define the about route
router.get('/home', function(req, res) {
    res.render('index')
})

router.get('/registro', (req, res) =>{
	res.render('registro')
})

router.get('/login', (req, res)=>{
	res.render('login')
})




module.exports = router


