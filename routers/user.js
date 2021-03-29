var express = require('express')
var router = express.Router()

router.get('/', (req, res)=>{
	res.send('prueba de ruta user')

})

router.get('/home', function(req, res) {
    res.send('home de la ruta user')
})

module.exports = router