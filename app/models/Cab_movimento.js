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
        }
    });

    return mongoose.model('Cab_movimento', schema);

}