const mysql = require('mysql2')
const config = require('./config')

const { autoCreateModule } = require('../model')
const { Sequelize } = require('sequelize')
const { hooks } = require('./hooks')

const connections = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD
})

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
    // hooks: {
    //   beforeBulkCreate(instance){
    //     instance.module
    //   }
    // }
  }
)

// 挂载常驻钩子
Object.keys(hooks).forEach((key) => {
  sequelize.addHook(key, hooks[key])
})

sequelize
  .authenticate()
  .then(() => {
    console.log('连接成功')
  })
  .catch((err) => {
    console.log('连接失败', err)
  })

// 自动注册模型
autoCreateModule(sequelize)

const connection = connections.promise()

module.exports = {
  sequelize,
  connection
}
