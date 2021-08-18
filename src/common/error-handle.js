const { errors } = require('./errors')

// 错误处理中间件
const errorHandler = (error, ctx) => {
  console.log(error)
  let code, message
  switch (error.message) {
    case errors.MISSING_PARAMETER:
      code = 400
      message = '缺少必传参数'
      break

    case errors.PARAMETER_IS_NON_EMPTY:
      code = 400
      message = '参数是非空的'
      break

    case errors.UNQUALIFIED_PARAMETER_FORMAT:
      code = 400
      message = '不合格的参数格式'
      break

    default:
      code = 500
      message = 'Server Error'
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
