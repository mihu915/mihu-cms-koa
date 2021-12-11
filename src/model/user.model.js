const {
  userBeforeCreate,
  userBeforeValidate
} = require('../hooks/use-route-user')

const { Model, DataTypes } = require('sequelize')
const { errorTypes } = require('../error/error-types')

const createUserModel = sequelize => {
  class User extends Model {}
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // 主键
        autoIncrement: true, // 自增
        unique: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: errorTypes.USERNAME_OR_PASSWORD_IS_REQUIRED
          },
          is: {
            args: /^[a-zA-Z0-9]{6,12}$/,
            msg: errorTypes.USERNAME_OR_PASSWORD_ILLEGAL
          }
        },
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: {
            args: /^[a-zA-Z0-9.]{6,12}$/,
            msg: errorTypes.USERNAME_OR_PASSWORD_ILLEGAL
          },
          notNull: {
            msg: errorTypes.username_or_password_is_required
          }
        }
      },
      avatar: {
        type: DataTypes.STRING
      },
      enable: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      role_id: {
        type: DataTypes.INTEGER,
        defaultValue: 3,
        references: {
          model: sequelize.models.Role,
          key: 'id'
        }
      },
      last_login_ip: DataTypes.STRING,
      last_login_time: DataTypes.INTEGER,
      nickname: DataTypes.STRING,
      mobile: DataTypes.STRING,
      qq: {
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
      hooks: {
        beforeCreate: userBeforeCreate,
        beforeValidate: userBeforeValidate
      },
      tableName: 'mh_user',
      sequelize
    }
  )
}

module.exports = createUserModel
