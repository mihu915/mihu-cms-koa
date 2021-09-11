const { updateUserData } = require('../service/user')
class OperationMiddleware {
  async updateOperationInfo(ctx, next) {
    const { id } = ctx.user
    const { $ip, $time } = ctx.request.body
    const params = {
      operator_ip: $ip,
      operator_time: $time
    }
    await updateUserData(id, params)
    await next()
  }
}

module.exports = new OperationMiddleware()
