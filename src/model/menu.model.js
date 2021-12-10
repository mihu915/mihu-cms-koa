const { Model, DataTypes } = require('sequelize')
const { errorTypes } = require('../error/error-types')

const createMenuModel = sequelize => {
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
        allowNull: false,
        validate: {
          notNull: {
            msg: errorTypes.MISSING_PARAMETER
          }
        }
      },
      icon: {
        type: DataTypes.STRING
      },
      sort: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: {
            msg: errorTypes.PARAMETER_IS_NOT_LEGAL
          }
        }
      },
      type: {
        type: DataTypes.INTEGER,
        validate: {
          is: {
            args: /^[1-2]$/,
            msg: errorTypes.PARAMETER_IS_NOT_LEGAL
          }
        }
      },
      url: {
        type: DataTypes.STRING
      },
      parent_id: {
        type: DataTypes.INTEGER,
        references: {
          model: sequelize.models.Menu,
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
      tableName: 'mh_menu',
      sequelize
    }
  )
}

module.exports = createMenuModel
