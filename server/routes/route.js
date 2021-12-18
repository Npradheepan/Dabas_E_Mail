const express = require ('express')
const router = express.Router()
const userController = require('../controllers/userControllers')
const addController = require('../controllers/addControllers')
const indexController = require('../controllers/indexControllers')

router.get('/user', userController);
router.get('/index', indexController);
router.post('/Add_user', addController);



module.exports =router;