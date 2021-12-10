const { Model, DataTypes } = require('sequelize')
const { errorTypes } = require('../error/error-types')

const createRoleModel = sequelize => {
  class Role extends Model {}

  Role.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      role_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      role_intro: {
        type: DataTypes.STRING
      },
      role_menu: {
        type: DataTypes.STRING,
        validate: {
          is: {
            args: /^(\d+\,)+\d+$/,
            msg: errorTypes.PARAMETER_IS_NOT_LEGAL
          }
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
      tableName: 'mh_user_role',
      sequelize
    }
  )
}

module.exports = createRoleModel
