const express = require('express');

const router = express.Router();

const controllers = require('../controllers');

const middlewares = require('../middlewares');

const loginValidator = [
  middlewares.PasswordValidator,
  middlewares.EmailValidator,
];

router.post('/', loginValidator, controllers.postLogin);

module.exports = router;
