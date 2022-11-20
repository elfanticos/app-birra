'use strict'
const express    = require('express'),
	  bodyParser = require('body-parser'),
	  cors       = require('cors'),
	  app        = express();

/**Configuraciones */
require('./config/constant');
require('./config/authenticated');
/**JWT */
global.jwt = require('jwt-simple');
//ROUTES
var r_auth    = require("./auth/auth.router");
var r_bevanda = require("./bevanda/bevanda.router");

app
	//parse application/json
	.use(bodyParser.json())
	//parse application/x-www-form-urlencoded
	.use(bodyParser.urlencoded({extended : false}))
	.use(cors())
	.use(express.static('public'))
	.use('/auth',r_auth)
	.use('/bevanda',r_bevanda)


module.exports = app;