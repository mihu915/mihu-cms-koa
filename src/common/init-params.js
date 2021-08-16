// 初始化参数方法
const initParams = function (rules, params) {
  Object.keys(rules).forEach((ruleKey) => {
    if (!rules[ruleKey].required && params[ruleKey] === undefined) {
      params[ruleKey] = null
    }
  })
}

module.exports = {
  initParams
}
