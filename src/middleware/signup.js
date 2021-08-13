const { errorTypes } = require('../error/error-types')
const { signupRule } = require('./config')

class SignupMiddleware {
  async verifySignup(ctx, next) {
    // 执行校验中间件
    ctx.verifyParams(signupRule, null, {
      customizeError: {
        nonempty: {
          // 账号密码非空
          common: errorTypes.USERNAME_OR_PASSWORD_IS_REQUIRED
        },
        type: {},
        regexp: {
          username: errorTypes.test4
        }
      }
    })

    await next()
  }
}

module.exports = new SignupMiddleware()
