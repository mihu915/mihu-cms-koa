const { Model, DataTypes } = require('sequelize')
const { userBeforeCreate, userBeforeValidate } = require('./hooks')
const { errorTypes } = require('../error/error-types')

function registerUserModel(sequelize) {
  class User extends Model {}

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // 主键
        autoIncrement: true // 自增
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          is: {
            args: /^[a-zA-Z0-9]{6,12}$/,
            msg: errorTypes.USERNAME_OR_PASSWORD_ILLEGAL
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: {
            args: /^[a-zA-Z0-9.]{6,12}$/,
            msg: 'errorTypes.USERNAME_OR_PASSWORD_ILLEGAL'
          }
        }
      },
      enable: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      rule_id: {
        type: DataTypes.INTEGER,
        defaultValue: 3
      },
      register_ip: DataTypes.STRING,
      operator_ip: DataTypes.STRING,
      register_time: DataTypes.INTEGER,
      operator_time: DataTypes.INTEGER,
      last_login_ip: DataTypes.STRING,
      last_login_time: DataTypes.INTEGER,
      realname: DataTypes.STRING,
      mobile: DataTypes.STRING,

      qq: {
        type: DataTypes.STRING
      },
      position: DataTypes.STRING,
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
  return User
}

module.exports = {
  registerUserModel
}
