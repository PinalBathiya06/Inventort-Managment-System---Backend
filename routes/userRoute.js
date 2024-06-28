const userController = require('../controllers/userController')

const router =  require('express').Router()

router.get('/',userController.getUsers)
router.get('/get/:id',userController.getUserInfo)
router.post('/addUser' , userController.addUser)
router.post('/login' , userController.login)
// router.put('/:id',userController.UserProfileFetch)
router.put('/:id',userController.UserProfileUpdate)

module.exports = router