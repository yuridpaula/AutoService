var mongoose = require('mongoose');

module.exports = function() {

    var schema = mongoose.Schema({
        integrante: {
            type: mongoose.Schema.ObjectId,
            ref: 'Integrante',
            required: true
        },
        tipo: {
            type: String
        },
        documento: {
            type: String
        },
        itens: {
            produto: {
                type: mongoose.Schema.ObjectId,
                ref: 'Produto',
                required: true
            },
            quantidade: {
                type: Number,
                required: true
            },
            valor_pago: {
                type: Number,
                required: true
            },
            data_movimento: {
                type: Date
            },
            data_pagamento: {
                type: Date
            },
            pago: {
                type: Boolean
            }
        }
    });

    return mongoose.model('Movimento', schema);

}