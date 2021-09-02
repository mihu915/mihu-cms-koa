const { getUserByName } = require('../service/user')
const { md5Password } = require('../utils/handle-password')
const { errorTypes } = require('../error/error-types')

class LoginMiddleware {
  // 校验登录参数中间件
  async verifyLogin(ctx, next) {
    ctx.verifyParams()

    const { username, password } = ctx.request.body

    // 校验是否为空或没传值
    if (!username || !password) {
      ctx.emitError(errorTypes.USERNAME_OR_PASSWORD_IS_REQUIRED)
    }

    // 用户是否存在
    ctx.user = await getUserByName(username)
    if (!ctx.user) ctx.emitError(errorTypes.INCORRECT_USERNAME_OR_PASSWORD)

    // 密码是否正确
    if (md5Password(password) !== ctx.user.password) {
      ctx.emitError(errorTypes.INCORRECT_USERNAME_OR_PASSWORD)
    }

    await next()
  }
}

module.exports = new LoginMiddleware()
