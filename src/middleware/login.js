const { getUserByName } = require('../service/user')
const { md5Password } = require('../utils/handle-password')
const { signupRule } = require('./config')
const { errorTypes } = require('../error/error-types')

class LoginMiddleware{
  // 校验登录参数中间件
  async verifyLogin(ctx, next) {
    const { username, password } = ctx.request.body
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

    // 用户不存在则报错
    ctx.user = await getUserByName(username)
    if (!ctx.user) ctx.emitError(errorTypes.USER_DOES_NOT_EXIST)

    // 校验密码是否正确
    if (md5Password(password) !== ctx.user.password) {
      ctx.emitError(errorTypes.WRONG_PASSWORD)
    }
    await next()
  }
}

module.exports = new LoginMiddleware()