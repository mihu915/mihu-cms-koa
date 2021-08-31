const { Model, DataTypes } = require('sequelize')
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
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
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
      qq: DataTypes.STRING,
      position: DataTypes.STRING,
      created: {
        type: DataTypes.INTEGER,
        get() {
          console.log(this.getDataValue('created'), 'created')
        },
        set() {}
      },
      updated: {
        type: DataTypes.INTEGER,
        // get() {
        //   console.log(
        //     Math.round(Date.now(this.getDataValue('updated')) / 1000),
        //     'updated'
        //   )
        // },
        set() {
          console.log(
            Math.round(Date.now(this.getDataValue('updated')) / 1000),
            'updated'
          )
        }
      }
    },
    {
      tableName: 'mh_user',
      createdAt: 'created',
      updatedAt: 'updated',
      sequelize
    }
  )
  return User
}

module.exports = {
  registerUserModel
}
