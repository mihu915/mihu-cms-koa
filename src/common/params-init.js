const { handleIP } = require('../utils/handle-ip')
function paramsInit(ctx) {
  const now = Math.round(Date.now() / 1000)
  const ip = handleIP(ctx.req)
  ctx.request.body.$ip = ip
  ctx.request.body.$time = now
  
  ctx.request.query.$ip = ip
  ctx.request.query.$time = now

}

module.exports = {
  paramsInit
}
