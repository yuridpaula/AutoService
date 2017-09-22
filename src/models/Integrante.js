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
        endereco: {
            uf: {
                type: String
            },
            cidade: {
                type: String
            },
            rua: {
                type: String
            },
            numero: {
                type: Number
            },
            complemento: {
                type: String
            }
        }
    });

    return mongoose.model('Integrante', schema);

}