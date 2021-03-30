var express = require('express')
var router = express.Router()
var bcryptjs = require('bcryptjs');
const connection = require('../database/db');

router.get('/', function(req, res) {
   
            res.render('registro/show')
       
})
router.route('/show')
    .get(function(req, res) {
        res.render('loginpru');
    })

    .put(function(req, res) {
        res.send('Update the book')
    })
    .delete((req, res)=>{
    	res.send('Update the book')
    })


module.exports = router
