var http = require('http');
var express = require('./config/express');

var db = require('./config/database');

// Conecta-se ao MongoDB no inicio da aplica��o.
// A conexao � feita no servidor localhost,
// para utilizar o banco de dados controleAtividades
db('mongodb://localhost/controleAtividades');

var app = express();

http.createServer(app).listen(
    app.get('port'),
    app.get('ip'),
    function() {
        console.log('Express Server escutando na porta ' +
            app.get('port'));
    }
);