const { errors } = require('./errors')

// 错误处理中间件
const errorHandler = (error, ctx) => {
  let code, message

  switch (error.message) {
    case errors.MISSING_PARAMETER:
      code = 400
      message = '缺少必传参数'
      break

    case errors.UNSUPPORTED_PARAMETER_TYPE:
      code = 400
      message = '不支持的参数类型'
      break

    case errors.PARAMETER_IS_NON_EMPTY:
      code = 400
      message = '参数非空'
      break

    default:
      code = 404
      message = 'NOT FOUND'
  }

  // 判断是否为自定义报错，如果是，则直接返回自定义对象
  if (error.message === errors.CUSTOMIZE) {
    ctx.body = error.errorMessage
  } else {
    ctx.body = {
      code,
      message
    }
  }
}

module.exports = errorHandler
