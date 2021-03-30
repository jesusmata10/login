// 1. invocamos a express
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

// 2. el directorio public
app.use(express.static('public'));
app.use(express.static('asset'));
app.use('/static', express.static(__dirname + '/public'));

// 3. seteamos urlencoded para capturar los datos del formulario
//app.use(express.urlencoded({ extended: false }));
//app.use(express.json);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());




// 5. Invocamos el dotenv
const dotenv = require('dotenv');
dotenv.config({ 
    path: './env/.env'
});

// 6. establecer el motor de plantilla ejs
app.set("views", path.resolve(__dirname, "views"));
app.set('view engine', 'ejs');
// 7. Invocamos a bcryptjs
const bcryptjs = require('bcryptjs');
// 8. var. session
const session = require('express-session');
app.use(session({
    secret: '12345678',
    resave: true,
    saveUninitialized: true
}));
// 9. Base de datos
const connection = require('./database/db');

// 4. Rutas
var routeIndex = require('./routers/index');
app.use('/', routeIndex);
var userIndex = require('./routers/user')
app.use('/user', userIndex);

// 10. escucha
const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log('Servidor ejecutado en http://localhost:' + port);
    console.log();
});
