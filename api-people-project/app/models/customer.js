var mongoose = require('mongoose');

module.exports = function () {
    var schema = mongoose.Schema({
        person:{
            type: mongoose.Schema.ObjectId,
            ref: 'Person',
            required: true
        },        description: {
            type: String
        },
        isEnable: {
            type: Boolean,
            required: true,
            default: true
        }
    });

    return mongoose.model('Customer', schema);
}