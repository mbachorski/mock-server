const utils = require('../routes/utils')

export function matchesConfig(req, config) {
  const request = utils.simplifyRequest(req)
  console.log("request: ", request, "config: ", config)

  return (request.ip === config.filter.ip)&&
    (request.headers.authorization === config.filter.headers.authorization)
};