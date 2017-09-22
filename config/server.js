const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
db('mongodb://localhost/controleAtividades');
console.log("dentro do server");

var app = express();
app.set('port', 3000);
//app.use(express.static('./src/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

consign()
    .include('src/routes')
    .then('src/models')
    .then('src/controllers')
    .into(app);

module.exports = app;