const { handleIP } = require('../utils/handle-ip')

function MhGlobalMiddleware(app, handleError) {
  // 注册错误处理中间件
  app.on('error', handleError)

  // 挂载全局的提交error方法
  app.context.emitError = function (errorType) {
    this.throw(errorType)
  }

  // 全局中间件
  return async function (ctx, next) {
    const ip = handleIP(ctx.req)
    const time = Math.round(Date.now() / 1000)
    switch (ctx.method) {
      case 'POST':
        ctx.request.body.ip = ip
        ctx.request.body.time = time
        break
      case 'GET':
        ctx.request.query.ip = ip
        ctx.request.query.time = time
        break
    }
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
