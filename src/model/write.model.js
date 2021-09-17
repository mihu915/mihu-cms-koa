const { Model, DataTypes } = require('sequelize')
const { errorTypes } = require('../error/error-types')

function registerWriteModule(sequelize) {
  class Write extends Model {}
  Write.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      cover: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      content: {
        type: DataTypes.TEXT
      },
      created: {
        type: DataTypes.INTEGER
      },
      updated: {
        type: DataTypes.INTEGER
      }
    },
    {
      tableName: 'mh_write',
      sequelize
    }
  )
}

module.exports = registerWriteModule
