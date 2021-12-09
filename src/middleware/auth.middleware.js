const jwt = require('jsonwebtoken')
const config = require('../app/config')
const { errorTypes } = require('../error/error-types')

// 赋权鉴权中间件
class AuthMiddleware {
  // 校验token中间件
  async verifyAuth(ctx, next) {
    const authorization = ctx.headers.authorization
    if (!authorization) ctx.emitError(errorTypes.TOKEN_CHECK_FAILED)

    const token = authorization.replace('Bearer ', '')
    try {
      ctx.user = jwt.verify(token, config.PUBLIC_KEY, {
        algorithms: 'RS256'
      })

      ctx.addScope('userInfo', ctx.user)

   
    } catch (error) {
      ctx.emitError(errorTypes.TOKEN_CHECK_FAILED)
    }
    await next()
  }

  // 校验身份中间件，管理员通过，非管理员不通过
  // async verifyIdentity(ctx, next) {
  //   const { rule_id } = ctx.user
  //   if (rule_id !== 1) ctx.emitError(errorTypes.NO_OPERATION_PERMISSION)
  //   await next()
  // }
}

module.exports = new AuthMiddleware()
