const { Model, DataTypes } = require('sequelize')

const createOperatorLogModel = sequelize => {
  class OperatorLog extends Model {}

  OperatorLog.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      operator_id: {
        type: DataTypes.INTEGER
      },
      operator_time: {
        type: DataTypes.INTEGER
      },
      operator_ip: {
        type: DataTypes.STRING
      },
      operator_type: {
        type: DataTypes.INTEGER
      },
      content: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      tableName: 'mh_user_operator_log'
    }
  )
}

module.exports = createOperatorLogModel
