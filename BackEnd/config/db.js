var mongoose = require('mongoose');

module.exports = function(uri) {
    mongoose.connect(uri, { useMongoClient: true });

    mongoose.connection.on('connected', function() {
        console.log('Mongoose! conectado de  ' + uri);
    });

    mongoose.connection.on('disconnected', function() {
        console.log('Mongoose! desconectado de  ' + uri);
    });

    mongoose.connection.on('error', function() {
        console.log('Mongoose! Erro de conexao de ' + uri);
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('Mongoose! encerrado pelo termino da aplicacapo');
            process.exit(0);
        });
    });
}