const { Model, DataTypes } = require('sequelize')
const createWriteRelateTagModel = sequelize => {
  class WriteRelateTag extends Model {}
  WriteRelateTag.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tag_id: {
        type: DataTypes.INTEGER,
        references: {
          model: sequelize.models.WriteTag,
          key: 'id'
        }
      },
      write_id: {
        type: DataTypes.INTEGER,
        references: {
          model: sequelize.models.Write,
          key: 'id'
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
      tableName: 'mh_write_relate_tag',
      sequelize
    }
  )
}

module.exports = createWriteRelateTagModel
