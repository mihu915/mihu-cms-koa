const { paramsInit } = require('../utils/params-init')
const { sequelize } = require('../app/database')

function MhGlobalMiddleware(app, handleError) {
  // 注册错误处理中间件
  app.on('error', handleError)

  // 挂载全局的提交error的方法
  app.context.emitError = function (errorType) {
    this.throw(errorType)
  }

  app.context.addScope = function (name, option) {
    console.log(name)
    Object.keys(sequelize.models).forEach(key => {
      sequelize.models[key].addScope(name, option)
      sequelize.models[key] = sequelize.models[key].scope(name)
    })
  }

  // 全局中间件
  return async function (ctx, next) {
    paramsInit(ctx)

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
