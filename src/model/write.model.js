const { Model, DataTypes } = require('sequelize')

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
      description: {
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
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
