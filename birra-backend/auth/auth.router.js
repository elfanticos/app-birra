'use strict'
const express = require('express');
const c_auth = require('./auth.controller');
const api = express.Router();

api
    .post('/login', c_auth.login)

module.exports = api;