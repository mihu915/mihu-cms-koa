const { errorTypes } = require('./error-types')
const errorHandle = require('./error-handle')

const MhParameter = (app) => {
  // 将errorTypes写入到全局对象
  app.context.errorTypes = errorTypes

  // 注册处理error中间件
  app.on('error', errorHandle)

  app.context.verifyParams = function (rules, params, errorMessage) {
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

    // 遍历规则
    Object.keys(rules).forEach((paramsKey) => {
      // 查找必传参数
      if (rules[paramsKey].required) {
        if (params[paramsKey] === undefined) {
          this.throw(errorTypes.MISSING_PARAMETER)
        }
      }

      // 检查参数类型
      if (rules[paramsKey].type) {
        if (rules[paramsKey].type !== typeof params[paramsKey]) {
          this.throw(errorTypes.UNSUPPORTED_PARAMETER_TYPE)
        }
      }
    })

    // 自定义报错
    // this.throw('这是一个报错信息', {
    //   code: '123',
    //   customize: true
    // })
  }

  return async function (ctx, next) {
    try {
      await next()
    } catch (err) {
      return ctx.app.emit('error', err, ctx)
    }
  }
}

module.exports = MhParameter
