const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../app/database')

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

    see_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0
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

module.exports = {
  Write
}
