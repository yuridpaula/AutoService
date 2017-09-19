var mongoose = require('mongoose');

module.exports = function() {

    var schema = mongoose.Schema({
        integrante: {
            type: String,
            required: true
        },
        nome: {
            type: String
        },
        contato: {
            type: String
        },
        uf: {
            type: String
        },
        cidade: {
            type: String
        },
        endereco: {
            type: String
        }
    });

    return mongoose.model('Integrante', schema);

}