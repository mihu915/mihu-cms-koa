const { Model, DataTypes } = require('sequelize')

function registerBlogStyleModel(sequelize) {
  class BlogStyle extends Model {}
  BlogStyle.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      blog_theme: {
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
      tableName: 'mh_blog_style'
    }
  )
}

module.exports = registerBlogStyleModel
