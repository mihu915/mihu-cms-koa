const { Sequelize, Op } = require('sequelize')
const { autoCreateModule } = require('../model')
const { usePermanent } = require('../hooks/use-permanent')
const { sqlLogger, logger } = require('./logger')
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
    },
    logging: msg => sqlLogger.info(msg)
  }
)

// 自动注册模型
autoCreateModule(sequelize)

// 挂载常驻钩子
Object.keys(usePermanent).forEach(key => {
  sequelize.addHook(key, usePermanent[key])
})

// 测试数据库连接方法
const authenticate = () => {
  return new Promise((resolve, reject) => {
    // 测试连接
    sequelize
      .authenticate()
      .then(() => {
        logger.info(`数据库连接成功`)
        sqlLogger.info(`数据库连接成功`)
        resolve()
      })
      .catch(err => {
        logger.info(`数据库连接失败，${err}`)
        sqlLogger.info(`数据库连接失败，${err}`)
        reject(err)
      })
  })
}

module.exports = {
  authenticate,
  sequelize,
  Op
}
