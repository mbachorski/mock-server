var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/*', function(req, res, next) {
  // IP
  console.log('IP: ', req._remoteAddress)

  // path with arguments?
  console.log(req.url)

  // query args
  console.log(req._parsedUrl.query)

  // method
  console.log('METHOD: ', req.method)

  // body
  console.log('BODY: ', req)

  // headers
  console.log('HEADERS: ', req.headers)

  res.send('OK!');
});

module.exports = router;
