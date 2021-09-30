const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

dotenv.config()

const PRIVATE_KEY = fs.readFileSync(
  path.resolve(__dirname, './keys/private.key')
)

const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './keys/public.key'))
const PUBLIC_RESOURCE_PATH = path.join(__dirname, '..') + '/public/'

const {
  APP_HOST,
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  DOMAIN_NAME
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
  DOMAIN_NAME
}
