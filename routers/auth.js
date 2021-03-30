var express = require('express')
var router = express.Router()
var bcryptjs = require('bcryptjs');
const connection = require('../database/db');

router.get('/', function(req, res, next) {
  res.render('login')
})

router.route('/auth')    
    .post(async (req, res, next) => {
        const email = req.body.email;
        const pass = req.body.password;
        let password = await bcryptjs.hash(pass, 8);
        
        if (email && password) {
     		connection.query('SELECT * FROM user WHERE email = ?', [email], async (error, results) => {
         		if (results.length == 0 || !(await bcryptjs.compare(password, results[0].password))){
     				res.send('Usuario y/o password Incorrectas');
         		}else {
         			res.send('Login correcto')
         		}

    		})

 			}	
 		})


    .put(function(req, res) {
        res.send('Update the book')
    })
    .delete((req, res)=>{
    	res.send('Update the book')
    })

module.exports = router