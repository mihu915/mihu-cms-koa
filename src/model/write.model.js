const { Model, DataTypes } = require('sequelize')
const { errorTypes } = require('../error/error-types')

const createWriteModel = sequelize => {
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

      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: errorTypes.CONTENT_MUST_NOT_BE_EMPTY
          }
        }
      },
      status: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },

      reading_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
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

module.exports = createWriteModel
