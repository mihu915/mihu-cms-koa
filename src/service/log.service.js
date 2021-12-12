const { sequelize, Op } = require('../app/database')
const { OperatorLog } = sequelize.models
class LogService {
  async getOperatorLog(option) {
    const { offset, limit } = option
    const result = await OperatorLog.findAll({
      offset,
      limit,
      order: [['operator_time', 'DESC']]
    })
      .then(async res => {
        const total_count = await OperatorLog.count()
        return {
          list: res,
          total_count
        }
      })
      .catch(err => {
        throw err
      })
    return result
  }
}

module.exports = new LogService()
