const Router = require('koa-router')
const epidemicRouter = new Router({prefix: '/epidemic'})
const { getEpidemicData } = require('../controller/epidemic')
epidemicRouter.post('/', getEpidemicData)
module.exports = epidemicRouter