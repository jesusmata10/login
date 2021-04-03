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
var routeIndex = require('./routers/index');
app.use('/home', routeIndex);
var uauthIndex = require('./routers/auth');
app.use('/', uauthIndex);
var routeShow = require('./routers/show.js');
app.use('/show', routeShow);

// 10. escucha
const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log('Servidor ejecutado en http://localhost:' + port);
    console.log();
});
