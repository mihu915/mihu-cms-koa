const { errorTypes } = require('../error/error-types')

class UserMiddleware {
  // 校验修改用户信息的参数
  async verifyUserInfo(ctx, next) {
    const { username, nickname } = ctx.request.body

    // 如果没设置昵称则将用户名设置为默认
    if (!nickname) ctx.request.body.nickname = username

    await next()
  }

  // 校验切换用户状态接口的参数
  async verifyUserEnable(ctx, next) {
    const { role_id, enable } = ctx.request.query
    const { id } = ctx.request.params

    if (role_id === undefined || enable === undefined || id === undefined) {
      ctx.emitError(errorTypes.MISSING_PARAMETER)
    }

    if (parseInt(role_id) === 1) ctx.emitError(errorTypes.UNABLE_TO_DISABLE)

    await next()
  }

  
}

module.exports = new UserMiddleware()
