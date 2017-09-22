var express = require('express');
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

    app.use(express.static('./app/public'));

    /*
       Carrega todos os m�dulos de app/models,
       depois os m�dulos de app/controllers,
       e, por fim, os m�dulos de app/routes,
       "despejando" tudo na vari�vel app
    */

    // cwd = change working directory
    consign()
        .include('app/models')
        .then('app/controllers')
        .then('app/routes')
        .into(app);

    return app;
};