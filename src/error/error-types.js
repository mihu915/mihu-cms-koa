const errorTypes = {
  // 用户名或密码为空
  USERNAME_OR_PASSWORD_IS_REQUIRED: {
    code: 400,
    message: '用户名或密码为空'
  },
  USER_DOES_NOT_EXIST: {
    code: 400,
    message: '用户不存在'
  },
  USERNAME_OR_PASSWORD_ILLEGAL: {
    code: 400,
    message: '用户名或密码不合法'
  },
  USER_ALREADY_EXISTS: {
    code: 400,
    message: '用户名已存在'
  },
  WRONG_PASSWORD: {
    code: 400,
    message: '密码错误'
  },
  TOKEN_CHECK_FAILED: {
    code: 401,
    message: 'token校验失败'
  },
  NO_OPERATION_PERMISSION: {
    code: 401,
    message: '无操作权限'
  }

  // // 动态内容为空
  // DYNAMIC_CONTENT_IS_EMPTY: 'dynamic content is empty',





  // // 用户不存在
  // USER_DOES_NOT_EXIST: 'user does not exist',





  // // 没有操作权限
  // NO_OPERATION_PERMISSION: 'no operation permission',

  // // 缺少参数
  // MISSING_PARAMETER: 'missing parameter',

  // // 不支持的参数类型
  // UNSUPPORTED_PARAMETER_TYPE: 'unsupported parameter type'
}

module.exports = {
  errorTypes
}
