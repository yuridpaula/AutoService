var mongoose = require('mongoose');

module.exports = function () {
    var Schema = mongoose.Schema({
        description: {
            type: String
        },
        isEnable: {
            type: Boolean,
            required: true,
            default: true
        }
    });

    return mongoose.model('Person', Schema);
}