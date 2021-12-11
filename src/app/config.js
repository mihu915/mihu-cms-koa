const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

dotenv.config()

// 私钥
const PRIVATE_KEY = fs.readFileSync(
  path.resolve(__dirname, './keys/private.key')
)

// 公钥
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './keys/public.key'))

// 静态资源路径
const PUBLIC_RESOURCE_PATH = path.join(__dirname, '..') + '/public/'

const BAN_DELETE_ID = {
  user: [1, 62],
  menu: [25, 26, 27, 28, 29, 30, 31, 32, 83, 84],
  role: [1, 2, 3],
  write: [],
  blogMenu: [1, 2, 3, 4, 5, 6, 7]
}

const {
  APP_HOST,
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  DOMAIN_NAME,
  NODE_ENV
} = process.env

module.exports = {
  APP_HOST,
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  PRIVATE_KEY,
  PUBLIC_KEY,
  PUBLIC_RESOURCE_PATH,
  DOMAIN_NAME,
  BAN_DELETE_ID,
  NODE_ENV
}
