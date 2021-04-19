// 1. invocamos a express
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');

// 2. el directorio public
app.use(express.static('public'));
app.use(express.static('asset'));
app.use('/static', express.static(__dirname + '/public'));

// 3. seteamos urlencoded para capturar los datos del formulario
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Middleware
function rol(req, res, next) {
  if (req.body.rol) {
    next();
  } else {
    res.status(403).send(`Sorry but you are not an admin and you do not have access to route ${req.url}`);
  }
}

// 4. Invocamos el dotenv
const dotenv = require('dotenv');
dotenv.config({ 
    path: './env/.env'
});

// 5. establecer el motor de plantilla ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// 6	. Invocamos a bcryptjs
const bcryptjs = require('bcryptjs');

// 7. var. session
const session = require('express-session');
app.use(session({
    secret: '12345678',
    resave: true,
    saveUninitialized: true
}));

// 8. Base de datos
const connection = require('./database/db');

// 9. Rutas
var routeIndex = require('./routers/index')
app.use('/', routeIndex);
var routeHome = require('./routers/home');
app.use('/home', routeHome);
var authIndex = require('./routers/auth');
app.use('/login', authIndex);
var routeShow = require('./routers/show');
app.use('/show', routeShow);
var routeLogout =  require('./routers/logout')
app.use('/logout', routeLogout);
// 10. escucha
const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log('Servidor ejecutado en http://localhost:' + port);
    console.log();
});
 