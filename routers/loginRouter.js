const express = require('express');

const router = express.Router();

const controllers = require('../controllers');

const { PasswordValidator, EmailValidator } = require('../middlewares');

const loginValidator = [
  PasswordValidator,
  EmailValidator,
];

router.post('/', loginValidator, controllers.postLogin);

module.exports = router;
