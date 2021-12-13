const errorTypes = {
  // 用户名或密码为空
  USERNAME_OR_PASSWORD_IS_REQUIRED: 'username_or_password_is_required',

  // 用户名或密码不合法
  USERNAME_OR_PASSWORD_ILLEGAL: 'username_or_password_illegal',

  // 用户已存在
  USER_ALREADY_EXISTS: 'mh_user.username must be unique',

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

  // 账号已被封禁
  ACCOUNT_IS_BANNED: 'account_is_banned',

  // 无法禁用
  UNABLE_TO_DISABLE: 'unable_to_disable',

  // 不支持的文件类型
  NOT_SUPPORTED_FILE_TYPE: 'not_supported_file_type',

  // 内容不可为空
  CONTENT_MUST_NOT_BE_EMPTY: 'content_must_not_be_empty',

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
