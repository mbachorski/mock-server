const utils = require('../src/routes/utils')

export function matchesConfig(req, config) {
  const request = utils.simplifyRequest(req)
  console.log(request)

  return (request.ip === config.ip)

};