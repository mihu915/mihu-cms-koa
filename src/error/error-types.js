const errorTypes = {
  // 用户名或密码为空
  USERNAME_OR_PASSWORD_IS_REQUIRED: 'username_or_password_is_required',

  // 用户名或密码不合法
  USERNAME_OR_PASSWORD_ILLEGAL: 'username_or_password_illegal',

  // 用户已存在
  USER_ALREADY_EXISTS: 'user_already_exists',

  // 账号或密码错误
  INCORRECT_USERNAME_OR_PASSWORD: 'incorrect_username_or_password',

  // token验签失败
  TOKEN_CHECK_FAILED: 'token_check_failed',

  // 缺少参数
  MISSING_PARAMETER: 'missing_parameter',

  // 内容不存在
  CONTENT_DOES_NOT_EXIST: 'content_does_not_exist',

  // 参数不合法
  PARAMETER_IS_NOT_LEGAL: 'parameter_is_not_legal',

  // 禁止删除
  PROHIBIT_DELETION: 'prohibit_deletion',

  NO_OPERATION_PERMISSION: {
    code: 401,
    message: '无操作权限'
  },
  DO_NOT_ADD_DATA_REPEATEDLY: {
    code: 400,
    message: '请勿重复添加数据'
  }
}

module.exports = {
  errorTypes
}
