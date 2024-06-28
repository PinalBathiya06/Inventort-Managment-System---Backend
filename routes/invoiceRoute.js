const invoiceController = require('../controllers/invoiceController')
const router =  require('express').Router()

router.post('/addInvoice' , invoiceController.addInvoice)

module.exports = router