const { getUserByName } = require('../service/user.service')
const { md5Password } = require('../utils/handle-password')
const { errorTypes } = require('../error/error-types')

class LoginMiddleware {
  // 校验登录参数中间件
  async verifyLogin(ctx, next) {
    const { username, password } = ctx.request.body

    // 用户是否存在
    ctx.user = await getUserByName(username)
    if (!ctx.user) ctx.emitError(errorTypes.INCORRECT_USERNAME_OR_PASSWORD)

    // 校验是否被封禁
    if (!ctx.user.enable) ctx.emitError(errorTypes.ACCOUNT_IS_BANNED)

    // 校验密码是否正确
    if (md5Password(password) !== ctx.user.password) {
      ctx.emitError(errorTypes.INCORRECT_USERNAME_OR_PASSWORD)
    }

    await next()
  }
}

module.exports = new LoginMiddleware()
