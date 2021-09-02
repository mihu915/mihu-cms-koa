const { Model, DataTypes } = require('sequelize')
function registerMenuModel(sequelize) {
  class Menu extends Model {}
  Menu.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      icon: {
        type: DataTypes.STRING
      },
      sort: {
        type: DataTypes.INTEGER
      },
      type: {
        type: DataTypes.INTEGER
      },
      url: {
        type: DataTypes.STRING
      },
      parent_id: {
        type: DataTypes.INTEGER
      },
      created: {
        type: DataTypes.INTEGER
      },
      updated: {
        type: DataTypes.INTEGER
      }
    },
    {
      tableName: 'mh_menu',
      sequelize
    }
  )
}

module.exports = registerMenuModel
