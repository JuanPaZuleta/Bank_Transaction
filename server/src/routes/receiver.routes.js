const { Router } = require('express')
const router = Router()

const receiverCtrl = require('../controllers/receiver.controller.js')

router.get('/', receiverCtrl.getReceivers);
router.post('/', receiverCtrl.createReceivers);
router.get('/:id', receiverCtrl.getReceiver);
router.put('/:id', receiverCtrl.updateReceiver);
router.delete('/:id', receiverCtrl.deleteReceivers);

module.exports = router