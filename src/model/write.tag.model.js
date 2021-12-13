const { Model, DataTypes } = require('sequelize')
const { errorTypes } = require('../error/error-types')
const createWriteTagModel = sequelize => {
  class WriteTag extends Model {}
  WriteTag.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tag_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: errorTypes.CONTENT_MUST_NOT_BE_EMPTY
          }
        }
      },
      created: {
        type: DataTypes.INTEGER
      },
      updated: {
        type: DataTypes.INTEGER
      }
    },
    {
      tableName: 'mh_write_tag',
      sequelize
    }
  )
}

module.exports = createWriteTagModel
