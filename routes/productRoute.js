const productController = require('../controllers/productController')
const router =  require('express').Router()


router.get('/',productController.getProducts)
router.get('/:id',productController.getProductInfo)
router.post('/addProduct' , productController.addProduct)
// router.put('/:id',productController.ProductFetch)
router.put('/:id',productController.ProductUpdate)
router.delete('/:id',productController.deleteProduct)


module.exports = router