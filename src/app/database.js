const mysql = require('mysql2')
const config = require('./config')

const { Sequelize } = require('sequelize')
const { registerModule } = require('../model')

const connections = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD
})

connections.getConnection((err, conn) => {
  if (err) {
    console.log('连接数据库失败，', err)
  } else {
    console.log('连接数据库成功')
  }
})

// 使用sequelize
const sequelize = new Sequelize(
  config.MYSQL_DATABASE,
  config.MYSQL_USER,
  config.MYSQL_PASSWORD,
  {
    host: config.MYSQL_HOST,
    dialect: 'mysql',
    define: {
      timestamps: true,
      hooks: {
        beforeValidate: function (instance, option) {
          console.log(instance)
        }
        // beforeCreate: (instance) => {
        //   console.log('create')
        //   console.log(instance)
        // },
        // beforeBulkDestroy: (instance) => {
        //   console.log('Destroy')
        // },
        // beforeSave: (instance) => {
        //   console.log('beforeSave')
        //   console.log(instance)
        // }
      }
    }
  }
)

sequelize
  .authenticate()
  .then(() => {
    console.log('连接成功')
  })
  .catch((err) => {
    console.log('连接失败', err)
  })

const { User } = registerModule(sequelize)
const connection = connections.promise()

module.exports = {
  User,
  connection
}
