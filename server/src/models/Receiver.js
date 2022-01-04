const { Schema, model } = require('mongoose')

const receiverSchema = new Schema({
    name: {type: String, required: true},
    rut: {type: String, required: true},
    mail: {type: String, required: true},
    phone: {type: String, required: true},
    destinationBank: {type: String, required: true},
    accountType: {type: String, required: true},
    accountNumber: {type: Number, required: true},
    },
    {
    timestamp: true,
    versionkey: false
    }
);

module.exports = model("Receiver", receiverSchema);