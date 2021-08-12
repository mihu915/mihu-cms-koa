const { errorTypes } = require('./error-types')

// 错误处理中间件
const errorHandler = (error, ctx) => {
  let code, message

  switch (error.message) {
    case errorTypes.USERNAME_OR_PASSWORD_IS_REQUIRED:
      code = 400
      message = '用户名或密码不可为空'
      break
    case errorTypes.USERNAME_OR_PASSWORD_ILLEGAL:
      code = 400
      message = '用户名或密码不合法'
      break
    case errorTypes.USERNAME_ALREADY_EXISTS:
      code = 409
      message = '用户名已存在'
      break
    case errorTypes.USER_DOES_NOT_EXIST:
      code = 400
      message = '用户不存在'
      break
    case errorTypes.WRONG_PASSWORD:
      code = 400
      message = '密码错误'
      break
    case errorTypes.TOKEN_CHECK_FAILED:
      code = 401
      message = 'token校验失败'
      break
    case errorTypes.DYNAMIC_CONTENT_IS_EMPTY:
      code = 400
      message = '提交的动态内容为空'
      break
    case errorTypes.NO_OPERATION_PERMISSION:
      code = 401
      message = '无操作权限!'
      break
    case errorTypes.MISSING_PARAMETER:
      code = 400
      message = '缺少必传参数'
      break
    case errorTypes.UNSUPPORTED_PARAMETER_TYPE:
      code = 400
      message = '不支持的参数类型'
      break
    default:
      code = 404
      message = 'NOT FOUND'
  }

  if (error.customize) {
    code = error.code
    message = error.message
  }

  ctx.body = {
    code,
    message
  }
}

module.exports = errorHandler
