const url = require('url');

module.exports = {
  log: function (req) {
    // console.log(req)

    // IP
    console.log('IP: ', req._remoteAddress)

    // url without query
    console.log(req._parsedOriginalUrl.pathname)

    // query
    const queryData = url.parse(req.url, true).query;
    for (const arg in queryData) {
      console.log(arg, ':', queryData[arg])
    }

    // method
    console.log('METHOD: ', req.method)

    // body
    console.log('BODY: ', req.body)

    // headers
    console.log('HEADERS: ', req.headers)
  }
};