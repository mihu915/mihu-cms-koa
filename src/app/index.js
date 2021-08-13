const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const autoRegisterRouter = require('../router')
const MhParameter = require('../common/MhParameter')


const app = new Koa()

// 注册处理from data格式数据中间件
app.use(bodyParser())

// 注册参数校验错误处理中间件
app.use(MhParameter(app))

// 自动注册router方法
autoRegisterRouter(app)

module.exports = app
