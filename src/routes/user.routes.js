const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controllers')

// create a new user 
router.post('/create',userController.create)
// get list of users
router.get('/all',userController.findAll)

router.get('/:id',userController.findById)

router.delete('/:id',userController.delete)

router.put('/:id',userController.update)

module.exports = router

