'use strict';
let router = require('express').Router();

router.use('/user', require('./user'));
router.use('/plugin', require('./plugin'));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(['respond with a resource']);
});

module.exports = router;
