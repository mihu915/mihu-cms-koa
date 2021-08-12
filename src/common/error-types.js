const errorTypes = {
  // 用户名或密码为空
  USERNAME_OR_PASSWORD_IS_REQUIRED: 'username or password is required',

  // 动态内容为空
  DYNAMIC_CONTENT_IS_EMPTY: 'dynamic content is empty',

  // 用户名重复
  USERNAME_ALREADY_EXISTS: 'username already exists',

  // 用户名或密码不合法
  USERNAME_OR_PASSWORD_ILLEGAL: 'username or password illegal',

  // 用户不存在
  USER_DOES_NOT_EXIST: 'user does not exist',

  // 密码错误
  WRONG_PASSWORD: 'wrong password',

  // token校验失败
  TOKEN_CHECK_FAILED: 'token check failed',

  // 没有操作权限
  NO_OPERATION_PERMISSION: 'no operation permission',

  // 缺少参数
  MISSING_PARAMETER: 'missing parameter',

  // 不支持的参数类型
  UNSUPPORTED_PARAMETER_TYPE: 'unsupported parameter type'
}

module.exports = {
  errorTypes
}
