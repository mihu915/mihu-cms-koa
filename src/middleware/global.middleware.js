const fs = require('fs')
const path = require('path')
const models = require('../model')
const { paramsInit } = require('../utils/params-init')

function MhGlobalMiddleware(app, handleError) {
  // 注册错误处理中间件
  app.on('error', handleError)

  app.context.scope = []

  // 挂载全局的提交error的方法
  app.context.emitError = function (errorType) {
    this.throw(errorType)
  }

  app.context.addScope = function (name, option) {
    if (!this.scope.includes(name)) {
      this.scope.push(name)
      Object.keys(models).forEach(key => {
        if (key === 'test') return
        models[key].addScope(name, { [name]: option })
        models[key] = models[key].scope(this.scope)
      })
    }
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
