const errorTypes = {
  // 用户名或密码为空
  USERNAME_OR_PASSWORD_IS_REQUIRED: {
    code: 400,
    message: '用户名或密码为空'
  },
  test1: {
    code: 123,
    message: 'username 为空'
  },
  test2: {
    code: 231,
    message: 'password 为空'
  },
  test3: {
    code: 111,
    message: '类型错误'
  },
  test4: {
    code: 222,
    message: 'username 超过长度'
  },
  test5: {
    code: 333,
    message: 'password 类型错误'
  }

  // // 动态内容为空
  // DYNAMIC_CONTENT_IS_EMPTY: 'dynamic content is empty',

  // // 用户名已存在
  // USERNAME_ALREADY_EXISTS: 'username already exists',

  // // 用户名或密码不合法
  // USERNAME_OR_PASSWORD_ILLEGAL: 'username or password illegal',

  // // 用户不存在
  // USER_DOES_NOT_EXIST: 'user does not exist',

  // // 密码错误
  // WRONG_PASSWORD: 'wrong password',

  // // token校验失败
  // TOKEN_CHECK_FAILED: 'token check failed',

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
