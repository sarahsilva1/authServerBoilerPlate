const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var app = express();

var router = require('./services/router');

mongoose.connect('mongodb://localhost:introToAuth/introToAuth');

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use('/v1', router);

var PORT = process.env.PORT || 3000;
var HOST = process.env.HOST || '127.0.0.1';

console.log('Listening on', HOST, PORT);
app.listen(PORT, HOST);
