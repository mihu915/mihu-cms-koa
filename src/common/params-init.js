const { handleIP } = require('../utils/handle-ip')
function paramsInit(ctx) {
  const now = Math.round(Date.now() / 1000)
  const ip = handleIP(ctx.req)
  ctx.request.body.$ip = ip
  ctx.request.body.$time = now

  ctx.request.query.$ip = ip
  ctx.request.query.$time = now

  const params = ['POST', 'PATCH'].includes(ctx.method)
    ? ctx.request.body
    : ctx.request.query
  console.log(ctx.request.body)
  console.log(ctx.request.query)
  Object.keys(params).forEach((key) => {
    if (
      params[key] === null ||
      (typeof params[key] === 'string' && params[key].length === 0)
    ) {
      delete params[key]
    }
  })
}

module.exports = {
  paramsInit
}
