require('./config/config');
var http = require('http');
var express = require('./config/express');

db = require('./config/database');
db(global.config.mongoDb.connectionString());
app = express();

http.createServer(app).listen( app.get('port'),  app.get('ip'),()=> {
      console.log('Express Server escutando na porta ' + app.get('port'));
   }
);