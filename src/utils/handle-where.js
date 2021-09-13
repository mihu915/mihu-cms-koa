const handleWhere = (rule, Op) => {
  const where = {}

  Object.keys(rule).forEach((ruleKey) => {
    switch (rule[ruleKey].type) {
      case 'like':
        if (
          rule[ruleKey].value !== undefined &&
          rule[ruleKey].value !== null &&
          rule[ruleKey].value
        ) {
          where[ruleKey] = { [Op.like]: '%' + rule[ruleKey].value + '%' }
        }
        break
      case 'interval':
        if (Array.isArray(rule[ruleKey].value)) {
          rule[ruleKey].value
          where[ruleKey] = {
            [Op.gte]: rule[ruleKey].value[0],
            [Op.lte]: rule[ruleKey].value[1]
          }
        } else if (
          typeof rule[ruleKey].value === 'string' ||
          typeof rule[ruleKey].value === 'number'
        ) {
          where[ruleKey] = rule[ruleKey].value
        }
        break
      default:
        if (rule[ruleKey].value !== undefined && rule[ruleKey].value !== null) {
          where[ruleKey] = rule[ruleKey].value
        }

        break
    }
  })
  return where
}

module.exports = {
  handleWhere
}
