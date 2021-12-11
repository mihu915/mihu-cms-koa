const { sequelize } = require('../app/database')
const { paramsInit } = require('../utils/params-init')
const { usePermanent } = require('../hooks/use-permanent')
function MhGlobalMiddleware(app, handleError) {
  // 注册错误处理中间件
  app.on('error', handleError)

  app.context.hookParam = {}

  // 向hooks中加入额外参数
  app.context.addHookParam = function (name, params) {
    if (!params) this.throw('addHookParam方法必须接收2个参数')
    app.context.hookParam = {
      ...app.context.hookParam,
      [name]: params
    }
  }

  // 挂载常驻钩子，把额外参数对象合并至钩子的options中
  Object.keys(usePermanent).forEach(key => {
    sequelize.addHook(key, (instance, options) => {
      if (options) {
        // 设置所有批量操作为单个操作
        options.individualHooks = true
        options = { ...options, ...app.context.hookParam }
        usePermanent[key](instance, options)
      } else {
        // 设置所有批量操作为单个操作
        instance.individualHooks = true
        instance = { ...instance, ...app.context.hookParam }
        usePermanent[key](instance)
      }
    })
  })

  // 挂载全局的提交error的方法
  app.context.emitError = function (errorType) {
    this.throw(errorType)
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
