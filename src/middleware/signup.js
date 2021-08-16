const { errorTypes } = require('../error/error-types')
const { signupRule } = require('./config')
const { getUserByName } = require('../service/user')
const { md5Password } = require('../utils/handle-password')
class SignupMiddleware {
  async verifySignup(ctx, next) {
    const { username, password } = ctx.request.body

    // 执行校验中间件
    ctx.verifyParams(signupRule, null, {
      // 不可传多余参数
      excess: false,
      // 自定义错误
      customizeError: {
        nonempty: {
          // 用户名或密码为空
          common: errorTypes.USERNAME_OR_PASSWORD_IS_REQUIRED
        },
        regexp: {
          // 用户名或密码不合法
          common: errorTypes.USERNAME_OR_PASSWORD_ILLEGAL
        }
      }
    })

    // 查询该用户名，若重复则报错
    const result = await getUserByName(username)
    if (result) ctx.emitError(errorTypes.USER_ALREADY_EXISTS)

    // 将密码md5加密处理
    ctx.request.body.password = md5Password(password)

    await next()
  }
}

module.exports = new SignupMiddleware()
