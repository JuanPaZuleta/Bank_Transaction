const receiverCtrl = {}

const Receiver = require('../models/Receiver')

receiverCtrl.getReceivers = async (req, res) => {
    const receivers = await Receiver.find()
    res.json(receivers)
}
receiverCtrl.createReceivers = async (req, res) => {
    const newReceiver = new Receiver(req.body)

    await newReceiver.save()

    res.send({message: 'Receiver Created'}) 
}
receiverCtrl.getReceiver = async (req, res) => {
    console.log(req.params)
    const receiver = await Receiver.findById(req.params.id)
    res.send(receiver)
}
receiverCtrl.updateReceiver = async (req, res) => {
   const receiver = await Receiver.findByIdAndUpdate(req.params.id, req.body)
   res.send({message: 'Receiver Updated'}) 

}
receiverCtrl.deleteReceivers = async (req, res) => {
    console.log(req.params)
    const receiver = await Receiver.findByIdAndDelete(req.params.id)
    res.json({status: 'Receiver Deleted'})
}

module.exports = receiverCtrl;