const { handleParams } = require('./handle-params')
function MhGlobalMiddleware(app, handleError) {
  // 注册错误处理中间件
  app.on('error', handleError)

  // 挂载全局的提交error方法
  app.context.emitError = function (errorType) {
    this.throw(errorType)
  }

  app.context.verifyParams = function (rules) {
    handleParams(this, rules)
  }

  // 全局中间件
  return async function (ctx, next) {
    try {
      await next()
    } catch (error) {
      return ctx.app.emit('error', error, ctx)
    }
  }
}

module.exports = {
  MhGlobalMiddleware
}
