var express = require('express');
var router = express.Router();
var bcryptjs = require('bcryptjs');
const connection = require('../database/db');
const session = require('express-session');

router.get('/', function(req, res, next) {
    if(req.session.loggedin){
    	res.render('login', {
    		login: true,
    		name: req.session.name
    	})
    }else{
    	res.render('index', {
    		login: false,
    		name: 'Debes de iniciar sesion'
    	})
    }
})

/*router.route('/')
    .get((req, res) => {
        res.render('index')
    })*/

module.exports = router