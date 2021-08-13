const errorHandle = require('./error-handle')
const verifyParams = require('./verify-params')
const { errors } = require('./errors')

const MhParameter = (app) => {
  // 注册处理error中间件
  app.on('error', errorHandle)

  app.context.verifyParams = function (rules, params) {
    // 没传规则直接return
    if (!rules || typeof rules !== 'object') {
      throw new Error('TypeError, 参数类型必须为object, 且不可为空')
    }

    // 若没传参数，取请求携带的参数，若传参，则直接取传过来的参数
    if (!params) {
      params = ['POST', 'GET'].includes(this.method.toUpperCase())
        ? this.request.body
        : this.request.query
      // 将params合并到参数对象中
      params = Object.assign({}, params, this.params)
    }

    // 调用校验方法
    const paramsError = verifyParams(rules, params)

    // 若校验失败则抛出异常
    if (paramsError) this.throw(paramsError)

    return paramsError
  }

  // 自定义提交错误
  app.context.emitError = function (errorMessage) {
    this.throw(errors.CUSTOMIZE, { errorMessage })
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
