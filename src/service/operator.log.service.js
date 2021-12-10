const { sequelize, Op } = require('../app/database')
const { OperatorLog } = sequelize.models

class OperatorLogService {
  async addOperatorLog(logInfo) {
    await OperatorLog.create(
      { ...logInfo },
      {
        hooks: false
      }
    )
      .then()
      .catch(err => {
        throw err
      })
  }
}

module.exports = new OperatorLogService()
