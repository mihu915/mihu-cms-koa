const { Model, DataTypes } = require('sequelize')

const createBlogMenuModel = sequelize => {
  class BlogMenu extends Model {}
  BlogMenu.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      menu_name: {
        type: DataTypes.STRING
      },
      menu_icon: {
        type: DataTypes.STRING
      },
      sort: {
        type: DataTypes.STRING
      },
      url: {
        type: DataTypes.STRING
      },
      enable: {
        type: DataTypes.INTEGER,
        defaultValue: 1
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
      tableName: 'mh_blog_menu'
    }
  )
}

module.exports = createBlogMenuModel
