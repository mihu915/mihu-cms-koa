const { errorTypes } = require('../error/error-types')
class SignupMiddleware {
  async verifySignup(ctx, next) {
    // 校验参数
    const rules = {
      username: {
        type: 'string',
        required: true,
        nonempty: true
      },
      password: {
        type: 'string',
        required: true,
        nonempty: true
      }
    }
    ctx.verifyParams(rules)

    ctx.emitError(errorTypes.USERNAME_OR_PASSWORD_IS_REQUIRED)

    await next()
  }
}

module.exports = new SignupMiddleware()
