const express = require('express');
const app     = express();

//const connection = require('./database/db');

app.get('/', (req, res)=>{
	res.send('Hola mundo');
});

app.listen(3000, (req, res) => {
	console.log('Servidor ejecutado en http://localhost:3000');
});


