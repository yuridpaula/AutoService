var mongoose = require('mongoose');

module.exports = function() {

    var schema = mongoose.Schema({
        cab_movimento: {
            type: mongoose.Schema.ObjectId,
            ref: 'Cab_movimento',
            required: true
        },
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
    });

    return mongoose.model('Item_movimento', schema);

}