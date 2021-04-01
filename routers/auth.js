var express = require('express');
var router = express.Router();
const connection = require('../database/db');
const bcryptjs = require('bcryptjs');

router.get('/', function(req, res, next) {
  res.render('login')
})

router.route('/auth')
	.get((req, res)=> {
		res.render('login')
	})   
    .post(async (req, res) => {
    const email = req.body.email;
    const pass = req.body.password;
    if (email != '' && pass != '') {
       connection.query('SELECT * FROM user WHERE email = ?', [email], async (error, results) => {
           console.log(results[0]);
           if (results.length == 0 || !(await bcryptjs.compare(pass, results[0].password))) {
           		res.render('login', {
                alert: true,
                alertTitle: "Error de datos",
                alertMessage: "¡Usuario o password no registrado!",
                alertIcon: 'warning',
                showConfirmButton: false,
                time: 1500,
                ruta: ''
                })

           	} else {
                //console.log(email+' '+pass);
           		res.render('index', {
                alert: true,
                alertTitle: "Bienvenido",
                alertMessage: "¡Usuario registrado!",
                alertIcon: 'success',
                showConfirmButton: false,
                time: 1500,
  
                ruta: ''

                })
           	} 	
        })
	}else{

		//console.log(email + +pass);
        res.render('login', {
        alert: true,
        alertTitle: "Error de datos",
        alertMessage: "¡Formulario Vacio!",
        alertIcon: 'error',
        showConfirmButton: false,
		time: 1500,
    	ruta: ''
		})
   			
	}
})

module.exports = router