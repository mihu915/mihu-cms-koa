const log4js = require('koa-log4')
const path = require('path')
log4js.configure({
  appenders: {
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
    out: {
      type: 'console'
    }
  },
  categories: {
    default: { appenders: ['out'], level: 'info' },
    access: { appenders: ['access'], level: 'info' },
    application: { appenders: ['application'], level: 'WARN' }
  }
})

const logger = log4js.getLogger('application') //记录所有应用级别的日志

const accessLogger = () => {
  //记录所有访问级别的日志
  return log4js.koaLogger(log4js.getLogger('access'))
}

module.exports = {
  logger,
  accessLogger
}
