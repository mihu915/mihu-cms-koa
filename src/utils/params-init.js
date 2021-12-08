const { handleIP } = require('./handle-ip')
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

  Object.keys(params).forEach(key => {
    if (
      params[key] === null ||
      (typeof params[key] === 'string' && params[key].length === 0)
    ) {
      params[key] = null
    }
  })
}

module.exports = {
  paramsInit
}
