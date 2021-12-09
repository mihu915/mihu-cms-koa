const log4js = require('koa-log4')
const path = require('path')

log4js.configure({
  appenders: {
    console: {
      type: 'console'
    },
    access: {
      type: 'dateFile',
      pattern: '-yyyy-MM-dd.log', //生成文件的规则
      filename: path.join('logs/', 'access'), //生成文件名
      alwaysIncludePattern: true
    },
    application: {
      type: 'dateFile',
      pattern: '-yyyy-MM-dd.log',
      filename: path.join('logs/', 'application'),
      alwaysIncludePattern: true
    },
    sql: {
      type: 'dateFile',
      pattern: '-yyyy-MM-dd.log',
      filename: path.join('logs/', 'sql'),
      alwaysIncludePattern: true
    }
  },
  categories: {
    default: { appenders: ['console'], level: 'debug' },
    access: { appenders: ['access'], level: 'info' },
    application: { appenders: ['application', 'console'], level: 'info' },
    sql: { appenders: ['sql'], level: 'info' }
  },

  pm2: true
})

const logger = log4js.getLogger('application') //记录所有应用级别的日志
const sqlLogger = log4js.getLogger('sql')
const accessLogger = () => {
  //记录所有访问级别的日志
  return log4js.koaLogger(log4js.getLogger('access'))
}

module.exports = {
  logger,
  sqlLogger,
  accessLogger
}
