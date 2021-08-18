const { errors } = require('./errors')
const { matchRuleResult } = require('./match-rule-result')
const verifyParams = function (rules, params, options) {
  // 定义错误信息
  let errorInfo = {
    message: null,
    errorCause: {}
  }
  // 错误原因
  const errorCause = {
    NONEMPTY: 'nonempty',
    REQUIRED: 'required',
    REGEXP: 'regexp'
  }

  // 如果没传options，则初始化该对象
  if (options === undefined || !options || JSON.stringify(options) === '{}') {
    options = { customizeError: {} }
  } else if (options.customizeError === undefined || !options.customizeError) {
    options.customizeError = {}
  }

  // 初始化自定义错误对象
  const nonemptyError = options.customizeError.nonempty
  const requiredError = options.customizeError.required
  const regexpError = options.customizeError.regexp

  // 遍历规则
  Object.keys(rules).forEach((ruleKey) => {
    // 查找必传参数
    if (rules[ruleKey].required) {
      if (params[ruleKey] === undefined || !params[ruleKey]) {
        errorInfo = matchRuleResult(
          requiredError,
          ruleKey,
          errorCause.REQUIRED,
          errors.MISSING_PARAMETER
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
      if (!paramsRule.test(params[ruleKey]) && params[ruleKey]) {
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

module.exports = { verifyParams }
