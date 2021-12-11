const { Model, DataTypes } = require('sequelize')

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
        type: DataTypes.STRING
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
