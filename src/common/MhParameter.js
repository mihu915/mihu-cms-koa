const { errorTypes } = require('./error-types')

const MhParameter = (app) => {
  // 将errorTypes写入到全局对象
  app.context.errorTypes = errorTypes

  app.context.verifyParams = function (rules, params) {
    // 没传规则直接return
    if (!rules || typeof rules !== 'object') {
      throw new Error('TypeError, 参数类型必须为object, 且不可为空')
    }

    // 没传参数，默认取请求携带的参数
    if (!params) {
      params = ['POST', 'GET'].includes(this.method.toUpperCase())
        ? this.request.body
        : this.request.query
      // params = Object.assign({}, params, this.params)
    }

    // 取出rules中的参数规则
    const parameter = rules.params

    // 遍历规则
    Object.keys(parameter).forEach((parameterKey) => {
      // 查找必传参数
      if (parameter[parameterKey].required) {
        console.log(parameterKey)
        // if(!params[parameterKey]){

        // }
      }
    })

    this.throw(422, '这是一个报错信息', {
      code: '123',
      errors: 'hhh',
    })
  }

  return async function (ctx, next) {
    try {
      await next()
    } catch (err) {
      console.log(err)
      return ctx.app.emit('error', err, ctx)
    }
  }
}

module.exports = MhParameter
