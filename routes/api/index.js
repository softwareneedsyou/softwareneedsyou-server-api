'use strict';
let router = require('express').Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json('respond with a resource');
});

module.exports = router;
