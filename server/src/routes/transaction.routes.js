const { Router } = require('express')
const router = Router()

const transactionCtrl = require('../controllers/transaction.controller.js')

router.get('/', transactionCtrl.getTransactions);
router.post('/', transactionCtrl.createTransactions);
router.get('/:id', transactionCtrl.getTransaction);
router.put('/:id', transactionCtrl.updateTransaction);
router.delete('/:id', transactionCtrl.deleteTransactions);

module.exports = router