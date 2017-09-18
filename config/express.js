var express = require('express');
var load = require('express-load');
var consign = require('consign');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');

module.exports = function() {
    var app = express();

    app.set('port', 3000);
    app.set('ip', '127.0.0.1');

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(cors());

    /* RTA para fazer com que todos os navegadores
       entendam os verbos HTTP DELETE e PUT.
    */
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    /*
       Carrega todos os módulos de app/models,
       depois os módulos de app/controllers,
       e, por fim, os módulos de app/routes,
       "despejando" tudo na variável app
    */

    // cwd = change working directory
    /*load('models', { cwd: 'app' })
        .then('controllers')
        .then('routes')
        .into(app);
    */
    consign()
        .include('app/routes')
        //.then('config/database.js')
        .then('app/controllers')
        .then('app/models')
        .into(app);
    //*/

    return app;
};