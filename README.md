# MhCmsKoa v1.0.0

## 一、项目介绍：
本项目基于 nodejs 环境的 koa2 框架所实现，为 mihu_cms 内容管理系统提供后端接口服务。

## 二、本地部署：

1. 运行环境：nodejs
2. 数据库：mysql
3. 运行目录下 sql 文件夹中的 mh_cms.sql 文件，手动写入 mysql 表数据
4. 对应 mysql 配置，在项目根目录下创建.env 文件，并编辑配置。

## 三、如何配置：

配置实例

```
APP_HOST=0.0.0.0
APP_PORT=1118

MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DATABASE=mh_cms
MYSQL_USER=root
MYSQL_PASSWORD=991118

DOMAIN_NAME=http://localhost
```

属性说明：  
APP_HOST：启动服务器 ip  
APP_PORT：启动服务器端口  
MYSQL_HOST：mysql 服务器地址  
MYSQL_PORT：mysql 服务器端口  
MYSQL_DATABASE：数据库名称  
MYSQL_USER：数据库用户名  
MYSQL_PASSWORD：数据库密码  
DOMAIN_NAME：静态资源服务器域名/ip 地址

## 四、功能：

1. 登录
2. token 校验
3. 用户的增删改查
4. 菜单的增删改查
5. 角色的增删改查
6. 文章的增删改查
7. 文章标签的增删改查
8. 日志查询接口
9. 中国疫情数据接口：数据来源-网易

## 五、环境运行

1. 执行命令`npm install` 安装依赖
2. 执行命令`npm run dev` 本地环境运行
3. 服务器后台运行，执行 `npm run start`

## 六、日志：

项目提供所有请求日志信息，包括：sql 语句，错误信息。日志位于项目根目录中的log文件夹下。
