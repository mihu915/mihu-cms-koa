const { getUserByName } = require('../service/user')
const { errorTypes } = require('../error/error-types')

class SignupMiddleware {
  async verifySignup(ctx, next) {
    const { username, password } = ctx.request.body
    // 判断是否有值或为空
    if (!username || !password) {
      ctx.emitError(errorTypes.USERNAME_OR_PASSWORD_IS_REQUIRED)
    }

    // 判断用户是否存在
    const result = await getUserByName(username)
    if (result) ctx.emitError(errorTypes.USER_ALREADY_EXISTS)

    await next()
  }
}

module.exports = new SignupMiddleware()
