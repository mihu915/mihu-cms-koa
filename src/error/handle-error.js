const { errorTypes } = require('./error-types')

// 错误处理中间件
const handleError = (error, ctx) => {
  let errorMessage
  let code, message

  if (error.errors) {
    errorMessage = error.errors[0].message
  } else {
    errorMessage = error.message
  }

  console.log(error)
  switch (errorMessage) {
    case errorTypes.USERNAME_OR_PASSWORD_IS_REQUIRED:
      code = 400
      message = '用户名或密码不可为空'
      break
    case errorTypes.USERNAME_OR_PASSWORD_ILLEGAL:
      code = 400
      message = '用户名或密码不合法'
      break
    case errorTypes.USER_ALREADY_EXISTS:
      code = 400
      message = '用户已存在'
      break
    case errorTypes.INCORRECT_USERNAME_OR_PASSWORD:
      code = 400
      message = '账号或密码错误'
      break
    case errorTypes.TOKEN_CHECK_FAILED:
      code = 401
      message = 'token验签失败'
      break
    case errorTypes.MISSING_PARAMETER:
      code = 400
      message = '缺少必传参数'
      break
    case errorTypes.CONTENT_DOES_NOT_EXIST:
      code = 400
      message = '操作的内容不存在'
      break
    case errorTypes.PARAMETER_IS_NOT_LEGAL:
      code = 406
      message = '参数不合法'
      break
    case errorTypes.PROHIBIT_DELETION:
      code = 403
      message = '禁止删除该数据'
      break
    default:
      code = 500
      message = 'Server Error'
      break
  }

  ctx.body = {
    code,
    message
  }
}

module.exports = {
  handleError
}