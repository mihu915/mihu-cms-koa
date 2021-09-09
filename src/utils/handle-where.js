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
        if (typeof rule[ruleKey].value === 'object') {
          if (rule[ruleKey].value.startTime) {
            where[ruleKey] = { [Op.gte]: rule[ruleKey].value.startTime }
          }
          if (rule[ruleKey].value.endTime) {
            where[ruleKey] = { [Op.lte]: rule[ruleKey].value.endTime }
          }
          if (rule[ruleKey].value.startTime && rule[ruleKey].value.endTime) {
            where[ruleKey] = {
              [Op.gte]: rule[ruleKey].value.startTime,
              [Op.lte]: rule[ruleKey].value.endTime
            }
          }
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
