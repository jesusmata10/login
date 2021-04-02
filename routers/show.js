var express = require('express')
var router = express.Router()
var bcryptjs = require('bcryptjs');
const connection = require('../database/db');

router.get('/', function(req, res) {
    connection.query('SELECT * FROM user', (error, results) => {
        if (error) {
            //throw error;
            res.render('registro/show', {
                alert: true,
                alertTitle: "Error database",
                alertMessage: "¡No puede realizar la consulta!",
                alertIcon: 'warning',
                showConfirmButton: false,
                time: 1500,
                ruta: ''
            })
        } else {
            var datos = results;
            res.render('registro/show', {
                datos: datos
            })
        }

    })


})


    


module.exports = router
