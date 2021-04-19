var express = require('express');
var router = express.Router();
const connection = require('../database/db');
const bcryptjs = require('bcryptjs');

router.get('/',(req, res) => {
	req.session.destroy(() => {
		res.redirect('/')
	})
})



module.exports = router