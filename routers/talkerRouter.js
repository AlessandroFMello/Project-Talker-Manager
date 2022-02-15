const express = require('express');

const router = express.Router();

const controllers = require('../controllers');

const {
  TokenValidator,
  NameValidator,
  AgeValidator,
  TalkValidator,
  DateValidator,
  RateValidator,
} = require('../middlewares');

const talkerValidator = [
  TokenValidator,
  NameValidator,
  AgeValidator,
  TalkValidator,
  DateValidator,
  RateValidator,
];

router.get('/', controllers.getAllTalkers);

router.get('/:id', controllers.getTalkerById);

router.post('/', talkerValidator, controllers.createTalker);

router.put('/:id', talkerValidator, controllers.editTalker);

module.exports = router;