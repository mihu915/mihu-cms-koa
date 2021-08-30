// 初始化参数
const handleParams = function (rules, params) {
  Object.keys(rules).forEach((ruleKey) => {
    // 若不是非空则赋予自定义的默认值，或null
    if (
      (!rules[ruleKey].required && params[ruleKey] === undefined) ||
      params[ruleKey].length === 0
    ) {
      if (rules[ruleKey].default !== undefined) {
        params[ruleKey] = rules[ruleKey].default
      } else {
        params[ruleKey] = null
      }
    }

    // 将数据转换为指定的类型
    if (rules[ruleKey].type) {
      if (params[ruleKey]) {
        switch (rules[ruleKey].type) {
          case 'string':
            params[ruleKey] = String(params[ruleKey])
            break
          case 'number':
            params[ruleKey] = parseInt(params[ruleKey])
            break
        }
      }
    }
  })
}

module.exports = {
  handleParams
}
