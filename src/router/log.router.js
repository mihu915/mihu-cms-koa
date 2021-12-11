const { verifyAuth } = require('../middleware/auth.middleware')
const { handleListParam } = require('../middleware/handle.params.middleware')
const { getOperatorLogList } = require('../controller/log.controller')
const Router = require('koa-router')

const logRouter = new Router({ prefix: '/log' })

logRouter.post('/operator', verifyAuth, handleListParam, getOperatorLogList)

module.exports = logRouter
