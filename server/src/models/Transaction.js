const { Schema, model } = require('mongoose')

const transactionSchema = new Schema(
    {
    nameReceiver: {type: String, required: true},
    rut: {type: String, required: true},
    bankName: {type: String, required: true},
    accountType: {type: String, required: true},
    amount: {type: Number, required: true},
    },
    {
    timestamps: true, 
    versionkey: false
    }
);

module.exports = model("Transaction", transactionSchema);