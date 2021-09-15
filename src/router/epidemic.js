const Router = require('koa-router')
const epidemicRouter = new Router({prefix: '/epidemic'})
const { getEpidemicData } = require('../controller/epidemic')
epidemicRouter.get('/', getEpidemicData)
module.exports = epidemicRouter