const { Sequelize, Op } = require('sequelize')
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

// 挂载常驻钩子
Object.keys(usePermanent).forEach(key => {
  sequelize.addHook(key, usePermanent[key])
})

// 测试数据库连接
sequelize
  .authenticate()
  .then(() => {
    logger.info(`数据库连接成功`)
    sqlLogger.info(`数据库连接成功`)
    require('../model')
  })
  .catch(err => {
    logger.info(`数据库连接失败，${err}`)
    sqlLogger.info(`数据库连接失败，${err}`)
  })

module.exports = {
  sequelize,
  Op
}
