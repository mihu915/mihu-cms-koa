const { errorTypes } = require('./error-types')

// 错误处理中间件
const handleError = (error, ctx) => {
  let errorMessage
  let code, message
  console.log(error)

  if (error.errors) {
    errorMessage = error.errors[0].message
  } else {
    errorMessage = error.message
  }

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
    case errorTypes.USER_DOES_NOT_EXIST:
      code = 400
      message = '用户不存在'
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
