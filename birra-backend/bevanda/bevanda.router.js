'use strict'
const express = require('express');
const c_bevanda = require('./bevanda.controller');
const api = express.Router();

api
    .get('/birraList', global.ensureAuth, c_bevanda.birraList)

module.exports = api;