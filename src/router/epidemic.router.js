const Router = require('koa-router')
const epidemicRouter = new Router({ prefix: '/epidemic' })
const { getEpidemicData } = require('../controller/epidemic.controller')
epidemicRouter.get('/', getEpidemicData)
module.exports = epidemicRouter
