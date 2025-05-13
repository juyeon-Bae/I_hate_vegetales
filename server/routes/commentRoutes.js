const express = require('express');
const commentControllers = require('../controllers/commentControllers')
const router = express.Router();

router.post('/', commentControllers.writeComment)
router.get('/', commentControllers.getComment)

module.exports = router;