const express = require('express');

const router = express.Router();

const controllers = require('../controllers');

router.get('/', controllers.getAllTalkers);

router.get('/:id', controllers.getTalkerById);

module.exports = router;