const { errors } = require('./errors')
const { matchRuleResult } = require('./match-rule-result')
const verifyParams = function (rules, params, options) {
  let errorInfo = {
    message: null,
    errorCause: {}
  }

  // 错误原因
  const errorCause = {
    NONEMPTY: 'nonempty',
    TYPE: 'type',
    REQUIRED: 'required',
    REGEXP: 'regexp',
    RXCESS: 'excess'
  }
  // 初始化自定义错误对象
  const nonemptyError = options.customizeError.nonempty
  const typeError = options.customizeError.type
  const requiredError = options.customizeError.required
  const regexpError = options.customizeError.regexp
  const excessError = options.customizeError.excess

  // 如果没传options，则初始化该对象
  if (options === undefined) {
    options = {
      excess: true
    }
  } else if (options.excess === undefined) {
    // 初始化excess为true，表示默认允许传多余参数
    options.excess = true
  }

  if (options.excess === false) {
    // 如果不开启可传多余参数,则检测是否有多余参数
    Object.keys(params).forEach((paramsKey) => {
      if (!rules[paramsKey]) {
        if (excessError && excessError.errorMessage) {
          errorInfo.message = excessError.errorMessage
        } else {
          errorInfo.message = errors.UNQUALIFIED_PARAMETER_FORMAT
        }
        errorInfo.errorCause[paramsKey] = errorCause.RXCESS
        return
      }
    })
  }

  // 遍历规则
  Object.keys(rules).forEach((ruleKey) => {
    // 查找必传参数
    if (rules[ruleKey].required) {
      if (params[ruleKey] === undefined) {
        matchRuleResult(
          requiredError,
          ruleKey,
          errorCause.REQUIRED,
          errors.MISSING_PARAMETER
        )
      }
    }

    // 检查参数类型
    if (rules[ruleKey].type) {
      if (rules[ruleKey].type !== typeof params[ruleKey]) {
        errorInfo = matchRuleResult(
          typeError,
          ruleKey,
          errorCause.TYPE,
          errors.UNSUPPORTED_PARAMETER_TYPE
        )
        return
      }
    }

    // 检查是否非空
    if (rules[ruleKey].nonempty) {
      if (!params[ruleKey] || params[ruleKey].length === 0) {
        errorInfo = matchRuleResult(
          nonemptyError,
          ruleKey,
          errorCause.NONEMPTY,
          errors.PARAMETER_IS_NON_EMPTY
        )
        return
      }
    }

    // 检测正则表达式
    if (rules[ruleKey].regexp && typeof rules[ruleKey].regexp === 'object') {
      const paramsRule = new RegExp(rules[ruleKey].regexp)
      if (!paramsRule.test(params[ruleKey])) {
        errorInfo = matchRuleResult(
          regexpError,
          ruleKey,
          errorCause.REGEXP,
          errors.UNQUALIFIED_PARAMETER_FORMAT
        )
        return
      }
    }
  })
  return errorInfo
}

module.exports = verifyParams
