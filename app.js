// 1. invocamos a express
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use(express.static('asset'));
app.use('/static', express.static(__dirname + '/public'));
//app.use(express.static(path.join(__dirname, '/public')));

var rutas = require('./routers');
app.use('/routers', rutas);

app.get('/', (req, res) => {
    res.render('login2');
});

// 2. seteamos urlencoded para capturar los datos del formulario
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json);
// 3. Invocamos el dotenv
const dotenv = require('dotenv');
dotenv.config({
    path: './env/.env'
});
// 4. el directorio public
console.log(__dirname);

// 5. establecer el motor de plantilla ejs
//app.set('views',(__dirname, 'views'));
//app.set('views', './views');
app.set("views", path.resolve(__dirname, "views"));
app.set('view engine', 'ejs');
// 6. Invocamos a bcryptjs
const bcryptjs = require('bcryptjs');
// 7. var. session
const session = require('express-session');
app.use(session({
    secret: '12345678',
    resave: true,
    saveUninitialized: true
}));
// 8. Base de dato
const connection = require('./database/db');

const port = 3300;
app.listen(port, (req, res) => {
    console.log('Servidor ejecutado en http://localhost:' + port);
});
