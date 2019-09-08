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
  },

  simplifyRequest: function (req) {
    return {
      ip: req._remoteAddress.replace("::ffff:", ""), // https://stackoverflow.com/a/33790357
      pathname: req._parsedOriginalUrl.pathname,
      query: url.parse(req.url, true).query,
      method: req.method,
      body: req.body,
      headers: req.headers
    }
  }
};