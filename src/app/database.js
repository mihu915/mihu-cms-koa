const { Sequelize, Op } = require('sequelize')
const { autoCreateModule } = require('../model')

const { hooks } = require('./hooks')
const config = require('./config')

// 使用sequelize
const sequelize = new Sequelize(
  config.MYSQL_DATABASE,
  config.MYSQL_USER,
  config.MYSQL_PASSWORD,
  {
    host: config.MYSQL_HOST,
    dialect: 'mysql',
    pool: {
      max: 10
    },
    define: {
      timestamps: false
    }
  }
)

// 测试连接
sequelize
  .authenticate()
  .then(() => {
    console.log('数据库连接成功')
  })
  .catch((err) => {
    console.log('数据库连接失败', err)
  })

// 挂载常驻钩子
Object.keys(hooks).forEach((key) => {
  sequelize.addHook(key, hooks[key])
})

// 自动注册模型
autoCreateModule(sequelize)

module.exports = {
  sequelize,
  Op
}
