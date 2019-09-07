const utils = require('./utils');
const express = require('express');
const router = express.Router();

router.all('/*', function (req, res, next) {

  utils.log(req);

  next()
});


router.get('/*', function (req, res, next) {
  console.log('GET')
  res.json({response: 'GET!'});
});

router.post('/*', function (req, res, next) {
  console.log('POST')
  res.json({response: 'POST!'});
});


module.exports = router;
