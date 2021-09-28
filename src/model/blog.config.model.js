const { Model, DataTypes } = require('sequelize')

function registerBlogConfigModel(sequelize) {
  class BlogConfig extends Model {}
  BlogConfig.init(
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
      tableName: 'mh_blog_config'
    }
  )
}

module.exports = registerBlogConfigModel
