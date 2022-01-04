const transactionCtrl = {}

const Transaction = require('../models/Transaction')

transactionCtrl.getTransactions = async (req, res) => {
    const transactions = await Transaction.find()
    res.json(transactions)
}
transactionCtrl.createTransactions = async (req, res) => {
    const newTransaction = new Transaction(req.body)

    await newTransaction.save()

    res.send({message: 'transaction Created'}) 
}
transactionCtrl.getTransaction = async (req, res) => {
    console.log(req.params)
    const transaction = await Transaction.findById(req.params.id)
    res.send(transaction)
}
transactionCtrl.updateTransaction = async (req, res) => {
   const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body)
   res.send({message: 'transaction Updated'}) 

}
transactionCtrl.deleteTransactions = async (req, res) => {
    console.log(req.params)
    const transaction = await Transaction.findByIdAndDelete(req.params.id)
    res.json({status: 'Transaction Deleted'})
}

module.exports = transactionCtrl;