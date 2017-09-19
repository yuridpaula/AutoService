var mongoose = require('mongoose');

module.exports = function() {

    var schema = mongoose.Schema({
        descricao: {
            type: String,
            required: true
        },
        valor_venda_sugerido: {
            type: Number
        },
        estoque_atual: {
            type: Number,
            required: true
        },
        path: {
            type: String
        }
    });

    return mongoose.model('Produto', schema);

}