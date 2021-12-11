const { getOperatorLog } = require('../service/log.service')
class LogController {
  async getOperatorLogList(ctx, next) {
    const result = await getOperatorLog(ctx.request.body)
    ctx.body = {
      code: 200,
      data: result,
      message: '获取操作日志成功'
    }
  }
}

module.exports = new LogController()
