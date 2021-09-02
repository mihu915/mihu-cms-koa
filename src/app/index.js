const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const autoRegisterRouter = require('../router')
const { MhGlobalMiddleware } = require('../common/mh-global-middleware')
const { handleError } = require('../error/handle-error')

const cors = require('koa2-cors')

const app = new Koa()

// 解决跨域
app.use(cors())

// 注册处理from data格式数据中间件
app.use(bodyParser())

// 注册全局中间件
app.use(MhGlobalMiddleware(app, handleError))

// 自动注册router方法
autoRegisterRouter(app)

module.exports = app
