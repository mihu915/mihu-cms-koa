const { Sequelize, Op } = require('sequelize')
const { sqlLogger, logger } = require('./logger')
const { autoCreateModel } = require('../model')
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

// 测试数据库连接
sequelize
  .authenticate()
  .then(() => {
    logger.info(`数据库连接成功`)
    sqlLogger.info(`数据库连接成功`)
  })
  .catch(err => {
    logger.info(`数据库连接失败，${err}`)
    sqlLogger.info(`数据库连接失败，${err}`)
  })

// 创建模型
autoCreateModel(sequelize)

module.exports = {
  sequelize,
  Op
}
