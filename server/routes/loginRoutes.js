const express = require('express');
const loginController = require('../controllers/loginControllers')
const router = express.Router();


router.post('/', loginController.loginUser)
module.exports = router;