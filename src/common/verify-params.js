const { errors } = require('./errors')

const verifyParams = function (rules, params) {
  let errorInfo
  let errorKey
  let errorType

  // 遍历规则
  Object.keys(rules).forEach((paramsKey) => {
    // 查找必传参数
    if (rules[paramsKey].required) {
      if (params[paramsKey] === undefined) {
        errorInfo = errors.MISSING_PARAMETER
        return
      }
    }

    // 检查参数类型
    if (rules[paramsKey].type) {
      if (rules[paramsKey].type !== typeof params[paramsKey]) {
        errorInfo = errors.UNSUPPORTED_PARAMETER_TYPE
        return
      }
    }

    // 检查是否非空
    if (rules[paramsKey].nonempty) {
      if (!params[paramsKey] || params[paramsKey].length === 0) {
        errorInfo = errors.PARAMETER_IS_NON_EMPTY
        return
      }
    }
  })
  return errorInfo
}

module.exports = verifyParams
