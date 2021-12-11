const jwt = require('jsonwebtoken')
const config = require('../app/config')
const { errorTypes } = require('../error/error-types')
const { handleUrlName } = require('../utils/handle-url-name')

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
    } catch (error) {
      ctx.emitError(errorTypes.TOKEN_CHECK_FAILED)
    }

    const url = ctx.request.path

    const prefix = ctx.request.path.split('/')[1]

    const urlName = handleUrlName(url, prefix)

    const operatorInfo = {
      ...ctx.user,
      path: url,
      ip: ctx.request.body.$ip,
      time: ctx.request.body.$time,
      urlName,
      prefix
    }

    // 向hook中加入操作人信息
    ctx.addHookParam('operatorInfo', operatorInfo)

    await next()
  }
}

module.exports = new AuthMiddleware()
