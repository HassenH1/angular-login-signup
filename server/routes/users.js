var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/signup', function(req, res, next) {
  console.log('sign up wokring');
});

router.post('/login', function(req, res, next) {
  console.log('Login route working');
});

module.exports = router;
