// 初始化参数
const initParams = function (rules, params) {
  Object.keys(rules).forEach((ruleKey) => {
    if (!rules[ruleKey].required && params[ruleKey] === undefined) {
      if (rules[ruleKey].default !== undefined) {
        params[ruleKey] = rules[ruleKey].default
      } else {
        params[ruleKey] = null
      }
    }
  })
}

module.exports = {
  initParams
}
