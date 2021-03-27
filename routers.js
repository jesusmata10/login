var express = require('express')
var router = express.Router()

// middleware function
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
// define the home page route
router.get('/home', function(req, res) {
    res.send('Prueba de rutas, /home')
})
// define the about route
router.get('/about', function(req, res) {
    res.render('login')
})

router.route('/user')
    .get(function(req, res) {
        //res.send('Get a random book, prueba');
        res.render('login')
    })
    .post(function(req, res) {
        res.send('Add a book');
    })
    .put(function(req, res) {
        res.send('Update the book');
    });




module.exports = router
