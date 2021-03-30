var express = require('express')
var router = express.Router()
var bcryptjs = require('bcryptjs');
const connection = require('../database/db');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
})

router.route('/registro')
    .get(function(req, res) {
        res.render('registro');
    })
    .post(async(req, res, next) => {
    	
    	/*console.log(req.body);
  		res.json(req.body);*/
        const user = req.body.usuario;
        const email = req.body.email;
        const rol = req.body.rol;
        const pass = req.body.password;
        let password = await bcryptjs.hash(pass, 8);
        console.log(password);
        connection.query('INSERT INTO user SET ?', {user:user, email:email, rol:rol, password:password}, async (error, results) => {
            if(error){
            	throw error;	
            } else {
            	var msg = 'Mi primera pagina con EJS';
            	console.log('¡Registro agregado!', results );
            	res.render('registro', { msg: msg } );
            }
            	
        });
    })

    .put(function(req, res) {
        res.send('Update the book')
    })
    .delete((req, res)=>{
    	res.send('Update the book')
    })


module.exports = router


