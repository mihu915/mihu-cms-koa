const { authType } = require('../utils/auth-type')
const handleParams = (ctx, rules) => {
  const requestMethod = ctx.method
  let params = ['POST'].includes(requestMethod)
    ? ctx.request.body
    : ctx.request.query

  params = Object.assign({}, params, ctx.params)

  console.log(params, 'params')

  if (requestMethod === 'GET' || requestMethod === 'DELETE') {
    ctx.request.query = params
  } else if (requestMethod === 'POST') {
    ctx.request.body = params
  }

  if (!rules) return

  // 开始处理params,若没传规则中规定的参数则将参数值赋为null
  const rulesType = authType(rules)
  switch (rulesType) {
    case 'object':
      Object.keys(rules).forEach((key) => {
        if (
          !params[key] &&
          rules[key].defaultValue !== null &&
          rules[key].defaultValue !== undefined
        ) {
          params[key] = rules[key].defaultValue
        } else if (!params[key]) {
          params[key] = null
        }
      })
      break
    case 'array':
      rules.forEach((key) => {
        if (!params[key]) {
          params[key] = null
        }
      })
      break
  }
}

module.exports = {
  handleParams
}
