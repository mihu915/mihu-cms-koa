// 匹配对应的error
const matchRuleResult = (customizeType, ruleKey, ErrorCause, errorType) => {
  const errorInfo = {
    message: '',
    errorCause: {}
  }
  if (customizeType && customizeType.common) {
    errorInfo.message = customizeType.common
  } else if (customizeType && customizeType[ruleKey]) {
    errorInfo.message = customizeType[ruleKey]
  } else {
    errorInfo.message = errorType
  }

  errorInfo.errorCause[ruleKey] = ErrorCause

  return errorInfo
}

module.exports = {
  matchRuleResult
}
