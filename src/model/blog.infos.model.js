const { Model, DataTypes } = require('sequelize')

const createBlogInfosModel = sequelize => {
  class BlogInfos extends Model {}
  BlogInfos.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      blogger_avatar: {
        type: DataTypes.STRING
      },
      blogger_name: {
        type: DataTypes.STRING
      },
      blog_title: {
        type: DataTypes.STRING
      },
      signature: {
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
      sequelize,
      tableName: 'mh_blog_infos'
    }
  )
}

module.exports = createBlogInfosModel
