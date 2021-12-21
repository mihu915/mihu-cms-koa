/*
 Navicat Premium Data Transfer

 Source Server         : 本地
 Source Server Type    : MySQL
 Source Server Version : 80021
 Source Host           : localhost:3306
 Source Schema         : mh_cms

 Target Server Type    : MySQL
 Target Server Version : 80021
 File Encoding         : 65001

 Date: 21/12/2021 19:36:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for mh_blog_infos
-- ----------------------------
DROP TABLE IF EXISTS `mh_blog_infos`;
CREATE TABLE `mh_blog_infos`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'id',
  `blogger_avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `blogger_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `blog_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `signature` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `updated` int NULL DEFAULT NULL,
  `created` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of mh_blog_infos
-- ----------------------------
INSERT INTO `mh_blog_infos` VALUES (2, 'http://localhost:1118/files/blog/avatar/blogger_avatar-17da350e1fa.jpg', '迷糊', 'Mihu_Blogasd', '许多人试图追随忍者的脚步，但只有极少数人成功了', 1639191325, 1632811056);

-- ----------------------------
-- Table structure for mh_blog_menu
-- ----------------------------
DROP TABLE IF EXISTS `mh_blog_menu`;
CREATE TABLE `mh_blog_menu`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `menu_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `menu_icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `sort` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `enable` int NULL DEFAULT 1,
  `created` int NULL DEFAULT NULL,
  `updated` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of mh_blog_menu
-- ----------------------------
INSERT INTO `mh_blog_menu` VALUES (1, '首页', 'mihu-home-fill', '/home', '1', 1, 1636170421, 1639791590);
INSERT INTO `mh_blog_menu` VALUES (3, '友链', 'mihu-api-fill', '/blogroll', '4', 1, 1636171852, 1637563599);
INSERT INTO `mh_blog_menu` VALUES (4, '分类', 'mihu-appstore-fill', '/category', '2', 1, 1636182282, 1637560562);
INSERT INTO `mh_blog_menu` VALUES (5, '归档', 'mihu-container-fill', '/archive', '5', 1, 1636182352, 1637563803);
INSERT INTO `mh_blog_menu` VALUES (6, '标签', 'mihu-tag-fill', '/label', '3', 1, 1636598631, 1637560591);
INSERT INTO `mh_blog_menu` VALUES (7, '留言', 'mihu-snippets-fill', '/guestbook', '3', 1, 1636610881, 1637563784);

-- ----------------------------
-- Table structure for mh_menu
-- ----------------------------
DROP TABLE IF EXISTS `mh_menu`;
CREATE TABLE `mh_menu`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '菜单id',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `sort` int NULL DEFAULT NULL,
  `type` int NULL DEFAULT NULL,
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `parent_id` int NULL DEFAULT NULL COMMENT '父级菜单id',
  `created` int NULL DEFAULT NULL,
  `updated` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `parent_id`(`parent_id`) USING BTREE,
  CONSTRAINT `mh_menu_ibfk_1` FOREIGN KEY (`parent_id`) REFERENCES `mh_menu` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 105 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of mh_menu
-- ----------------------------
INSERT INTO `mh_menu` VALUES (25, '系统管理', 'el-icon-setting', 2, 1, '/main/system', NULL, 1629188673, 1631515873);
INSERT INTO `mh_menu` VALUES (26, '菜单管理', NULL, 0, 2, '/main/system/menu', 25, 1629189215, 1629189215);
INSERT INTO `mh_menu` VALUES (27, '用户管理', NULL, 1, 2, '/main/system/user', 25, 1629189286, 1630998885);
INSERT INTO `mh_menu` VALUES (28, '权限管理', NULL, 2, 2, '/main/system/role', 25, 1629189336, 1630999525);
INSERT INTO `mh_menu` VALUES (29, '系统总览', 'el-icon-monitor', 0, 1, '/main/analysis', NULL, 1629272896, 1631007869);
INSERT INTO `mh_menu` VALUES (30, '核心技术', NULL, 0, 2, '/main/analysis/skill', 29, 1631007849, 1631676774);
INSERT INTO `mh_menu` VALUES (31, '博客管理', 'el-icon-document', 1, 1, '/main/blog', NULL, 1631070422, 1631929451);
INSERT INTO `mh_menu` VALUES (32, '文章管理', NULL, 1, 2, '/main/blog/write', 31, 1631494836, 1639470962);
INSERT INTO `mh_menu` VALUES (83, '信息管理', NULL, 0, 2, '/main/blog/infos', 31, 1632811384, 1635934616);
INSERT INTO `mh_menu` VALUES (84, '菜单管理', NULL, 3, 2, '/main/blog/menu', 31, 1635996199, 1635996199);
INSERT INTO `mh_menu` VALUES (104, '标签管理', NULL, 4, 2, '/main/blog/tag', 31, 1639375085, 1639470942);

-- ----------------------------
-- Table structure for mh_user
-- ----------------------------
DROP TABLE IF EXISTS `mh_user`;
CREATE TABLE `mh_user`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `enable` int NULL DEFAULT 1,
  `role_id` int NULL DEFAULT 3 COMMENT '权限id',
  `last_login_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `last_login_time` int NULL DEFAULT NULL,
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `mobile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `qq` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `created` int NULL DEFAULT NULL,
  `updated` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE,
  UNIQUE INDEX `mh_user_username`(`username`) USING BTREE,
  UNIQUE INDEX `username_2`(`username`) USING BTREE,
  UNIQUE INDEX `username_3`(`username`) USING BTREE,
  INDEX `role_id`(`role_id`) USING BTREE,
  CONSTRAINT `mh_user_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `mh_user_role` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 81 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of mh_user
-- ----------------------------
INSERT INTO `mh_user` VALUES (1, 'mihu0915', 'ea4ee1d8c29d7b6cf4438644ea4d88ca', '', 1, 1, '192.168.1.164', 1640079832, '喝甜酒也迷糊', NULL, '2285088054', 1630508538, 1639119295);
INSERT INTO `mh_user` VALUES (62, 'admin123', '0192023a7bbd73250516f069df18b500', '', 1, 1, '192.168.10.50', 1639206701, 'admin123', NULL, NULL, 1639115759, 1639206552);

-- ----------------------------
-- Table structure for mh_user_operator_log
-- ----------------------------
DROP TABLE IF EXISTS `mh_user_operator_log`;
CREATE TABLE `mh_user_operator_log`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'id',
  `operator_id` int NULL DEFAULT NULL,
  `operator_time` int NULL DEFAULT NULL,
  `operator_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `operator_type` int NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1456 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '用户操作日志表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of mh_user_operator_log
-- ----------------------------
INSERT INTO `mh_user_operator_log` VALUES (1495, 1, 1640084780, '192.168.10.80', -1, '账号：mihu0915，添加了文章：《test111》，id为：36');
INSERT INTO `mh_user_operator_log` VALUES (1496, 1, 1640084844, '192.168.10.80', -1, '账号：mihu0915，添加了文章：《test111》，id为：37');
INSERT INTO `mh_user_operator_log` VALUES (1497, 1, 1640084861, '192.168.10.80', -3, '账号：mihu0915，删除了文章：《test111》，id为：37');
INSERT INTO `mh_user_operator_log` VALUES (1498, 1, 1640084863, '192.168.10.80', -3, '账号：mihu0915，删除了文章：《test111》，id为：36');
INSERT INTO `mh_user_operator_log` VALUES (1499, 1, 1640084982, '192.168.10.80', -3, '账号：mihu0915，删除了文章：《test123》，id为：35');
INSERT INTO `mh_user_operator_log` VALUES (1500, 1, 1640084985, '192.168.10.80', -3, '账号：mihu0915，删除了文章：《测试标题》，id为：32');
INSERT INTO `mh_user_operator_log` VALUES (1501, 1, 1640085055, '192.168.10.80', -2, '账号：mihu0915，更新了文章信息，id为：31');

-- ----------------------------
-- Table structure for mh_user_role
-- ----------------------------
DROP TABLE IF EXISTS `mh_user_role`;
CREATE TABLE `mh_user_role`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '角色表id',
  `role_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `role_intro` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `role_menu` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `created` int NULL DEFAULT NULL,
  `updated` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of mh_user_role
-- ----------------------------
INSERT INTO `mh_user_role` VALUES (1, '超级管理员', '所有权限', '25,29,31,26,27,28,30,32,83,84,104', NULL, 1639120248);
INSERT INTO `mh_user_role` VALUES (2, '管理员', '部分权限', '34,70,25,26,27,28,78,71,76,77,79,73,74', NULL, 1631503952);
INSERT INTO `mh_user_role` VALUES (3, '普通会员', '普通权限', '29,30', NULL, 1639122315);

-- ----------------------------
-- Table structure for mh_write
-- ----------------------------
DROP TABLE IF EXISTS `mh_write`;
CREATE TABLE `mh_write`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'id',
  `cover` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '文章封面',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '文章标题',
  `status` int NULL DEFAULT NULL COMMENT '文章状态：0：未发布；1：已发布',
  `reading_count` int NULL DEFAULT 0 COMMENT '阅读数量',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT '文章内容',
  `created` int NULL DEFAULT NULL COMMENT '创建时间',
  `updated` int NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 32 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of mh_write
-- ----------------------------
INSERT INTO `mh_write` VALUES (14, 'http://localhost:1118/files/cover/cover-17d9d9f4f9b.jpeg', 'webpack相关笔记', 0, 0, '# webpack相关笔记\n\n> ### 一、webpack的配置\n>\n> 入口默认为：packageName/src/index.js\n> 出口默认为：packageName/dist/main.js\n> 如果需要修改配置则需要创建webpack.config.js文件12👀️\n\n> ### 二、loader的基本使用\n>\n> 1. 安装loader：\n>    ```npm install css-loader -D```\n> 2. 使用loader：\n>\n> * 方式一：内联方式：内联方式使用较少，因为不方便管理；\n>   在引入的样式前加上使用的loader，并使用!作为分隔符；qweasdasdasd\n> * 1231231123qweqwe1231231231231231231231231231\n>\n> ```javascript\n> import \"css-loader!../css/style.css\";\n> ```\n>\n> * 方式二：CLI方式：\n>   在webpack5的文档中已经没有了 ```--module-bind```\n>   实际应用中也比较少使用，因为不方便管理；\n> * 方式三：loader配置方式：\n>   配置方式表示的意思是在我们的webpack.config.js文件中写明配置信息：\n>\n> 1. module.rules中允许我们配置多个loader（因为我们也会继续使用其他的loader，来完成其他文件的加载）；\n> 2. 这种方式可以更好的表示loader的配置，也方便后期的维护，同时也让你对各个Loader有一个全局的概览；\n>\n> * module.rules的配置如下：\n>   rules属性对应的值是一个数组：[Rule]\n>   数组中存放的是一个个的Rule，Rule是一个对象，对象中可以设置多个属性：\n>   test属性：用于对 resource（资源）进行匹配的，通常会设置成正则表达式；\n>   use属性：对应的值是一个数组：[UseEntry]\n>   UseEntry是一个对象，可以通过对象的属性来设置一些其他属性\n>   loader：必须有一个 loader属性，对应的值是一个字符串；\n>   options：可选的属性，值是一个字符串或者对象，值会被传入到loader中；\n>   query：目前已经使用options来替代；\n>   传递字符串（如：use: [ \'style-loader\' ]）是 loader 属性的简写方式（如：use: [ { loader: \'style-loader\'} ]）；\n>   loader属性： Rule.use: [ { loader } ] 的简写。\n> * 配置示例：\n>\n> ```javascript\n>   module: {\n>    rules: [\n>      {\n>        test: /\\.css$/,\n>        use: [\n>          {loader: \"style-loader\"},\n>          {loader: \"css-loader\"},\n>        ]\n>      },\n>      {\n>        test: /\\.less$/,\n>        use: [\n>          {loader: \"style-loader\"},\n>          {loader: \"css-loader\"},\n>         {loader: \"less-loader\"}\n>        ]\n>      }\n>    ]\n> }\n> ```\n>\n> 3. 若要使样式生效则需要安装style-loader\n> 4. 使用less完成编译转换\n>    ```npm install less -D```\n>    ``` npx lessc ./src/css/title.less title.css```\n\n> ### 三、postcss-loader的使用\n>\n> postcss可以帮助我们进行一些css的转换和适配，例如浏览器前缀或者css样式重叠\n>\n> 1. 安装：postcss工具\n>    ```npm install postcss postcss-cli -D```\n> 2. 编写一个需要添加前缀的css：\n> 3. ![screenshot.jpg](http://localhost:1118/files/screenshot/screenshot-17dc1efb1c6.png)\n>\n> ```css\n> .demo{\n>   user-select:none;\n> }\n> ```\n>\n> 3. 为postcss安装插件：\n>    ```npm install autoprefixer -D```\n> 4. 直接使用：\n>    ```npx postcss --use autoprefixer -o demo.css ./src/css/style.css```\n>    执行命令后会生成新文件demo.css,其中的样式为转化后的样式\n> 5. 安装postcss-loader:\n>    ```npm install postcss-loader -D```\n> 6. 在webpack.config.js中配置：\n>\n> ```js\n>      {\n>           loader: \"postcss-loader\",\n>           options: {\n>             postcssOptions: {\n>               plugins: [\n>                 require(\'autoprefixer\')\n>               ]\n>             }\n>           }\n>      }\n> ```\n>\n> 7. 单独的配置文件：\n>    在项目根目录新建postcss.config.js文件\n>\n> ```js\n> module.exports = {\n>   plugins: [\n>     require(\'autoprefixer\')\n>   ]\n> }\n> ```\n>\n> 然后只需要在webpack.config.js文件中：\n> module.rules.use中使用{loader: \"postcss-loader\"}\n\n> ### 四、plugin的使用\n>\n> 安装插件：CleanWebpackPlugin，使每次打包都自动帮我们删除上次打包的文件夹```npm install clean-webpack-plugin -D```\n>\n> * 使用方式：\n>\n> 1. 在webpack.config.js中导入插件\n>\n> ```js\n> const {CleanWebpackPlugin} = require(\"clean-webpack-plugin\");\n> ```\n>\n> 2. 在导出的对象中通过plugins属性来使用：\n>\n> ```js\n> plugins: [\n>    new CleanWebpackPlugin()\n> ]\n> ```\n\n> ### 五、babel的使用\n>\n> babel的作用是将ES6+、TypeScript等语法转化为ES5语法，兼容各浏览器babel 本身作为一个独立的工具（和postcss一样）在webpack中我们可以安装babel-loader更方便使用\n>\n>> @babel/core：babel的核心代码，必须安装\n>> @babel/cli：可以让我们在命令行中使用babel\n>>\n>\n> * 安装命令：\n>   ```npm install @babel/cli @babel/colr -D```\n> * 使用：\n>   ```npx babel src --out-dir dist```\n>   src： 是源文件目录。\n>   --out-dir： 指定要输出的文件夹dist\n>\n>> * 安装箭头函数转换相关插件：\n>>   ```npm install @babel/plugin-transform-arrow-functions -D```\n>>   使用插件：\n>>   ```npx babel src --out-dir dist --plugins=@babel/plugin-transform-arrow-functions```\n>>\n>\n>> * 安装变量定义转换插件（const、let转换为var）：\n>>   ```npm install @babel/plugin-transform-block-scoping -D ```\n>>   使用插件：\n>>   ```npx babel src --out-dir dist --plugins=@babel/plugin-transform-block-scoping,@babel/plugin-transform-arrow-functions```\n>>\n\n> ### 六、babel-loader的使用：\n>\n> 1. 安装相关依赖：\n>    ```npm install babel-loader @babel/core```\n>    如果安装过@babel/core,则不需要再次安装\n> 2. 配置规则，在加载js文件时使用babel：\n>\n> ```js\n> module.exports = {\n>   rules: [\n>           {\n>             test: /\\.m?js$/,\n>             use: {\n>               loader: \'babel-loader\'\n>             }\n>           }\n>         ]\n> }\n> ```\n> 3. 指定使用的插件：\n>\n> ```js\n> module.exports = {\n>  rules: [\n>          {\n>            test: /\\.m?js$/,\n>            use: {\n>              loader: \'babel-loader\'，\n>              options: {\n>                  plugins: [\n>                     \'@babel/plugin-transform-block-scoping\',\n>                     \'@babel/plugin-transform-arrow-functions\'\n>                  ]\n>              }\n>            }\n>          }\n>        ]\n> }\n> ```\n> 4. 使用babel-perset：\n>    webpack提供perset会根据我们的预设来加载对应的插件列表，并且将其传递给babel\n>    常见的预设有三个：\n>\n> * env\n> * react\n> * TypeScript\n>\n> 安装perset-env:\n> ```npm install @babel/preset-e```\n> 配置文件：\n> 和之前一样，我们可以将babel的配置信息放到一个独立的文件： babel.config.js中\n>\n> ```js\n> module.exports = {\n>   presets: [\n>     [\"@babel/preset-env\"]\n>   ]\n> }\n> ```\n', 1637662105, 1639636355);

-- ----------------------------
-- Table structure for mh_write_moment
-- ----------------------------
DROP TABLE IF EXISTS `mh_write_moment`;
CREATE TABLE `mh_write_moment`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '动态id',
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '昵称',
  `write_id` int NULL DEFAULT NULL COMMENT '文章id',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT '发表的内容',
  `created` int NULL DEFAULT NULL,
  `updated` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '文章评论表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of mh_write_moment
-- ----------------------------
INSERT INTO `mh_write_moment` VALUES (1, NULL, 19, 'php是世界上最好的语言~', 1628591017, 1628591017);
INSERT INTO `mh_write_moment` VALUES (2, NULL, 19, 'hello world~', 1628644563, 1628644563);
INSERT INTO `mh_write_moment` VALUES (3, NULL, 19, 'hello world~', 1628645085, 1628645085);

-- ----------------------------
-- Table structure for mh_write_relate_tag
-- ----------------------------
DROP TABLE IF EXISTS `mh_write_relate_tag`;
CREATE TABLE `mh_write_relate_tag`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `tag_id` int NULL DEFAULT NULL,
  `write_id` int NULL DEFAULT NULL,
  `created` int NULL DEFAULT NULL,
  `updated` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 32 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of mh_write_relate_tag
-- ----------------------------
INSERT INTO `mh_write_relate_tag` VALUES (19, 43, 19, 1639554006, 1639554006);
INSERT INTO `mh_write_relate_tag` VALUES (28, 35, 31, 1639621534, 1639621534);
INSERT INTO `mh_write_relate_tag` VALUES (29, 37, 31, 1639621818, 1639621818);
INSERT INTO `mh_write_relate_tag` VALUES (30, 38, 31, 1639638230, 1639638230);
INSERT INTO `mh_write_relate_tag` VALUES (31, 41, 31, 1639638230, 1639638230);

-- ----------------------------
-- Table structure for mh_write_tag
-- ----------------------------
DROP TABLE IF EXISTS `mh_write_tag`;
CREATE TABLE `mh_write_tag`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `created` int NULL DEFAULT NULL,
  `updated` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 48 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of mh_write_tag
-- ----------------------------
INSERT INTO `mh_write_tag` VALUES (35, 'nodejs', 1639389115, 1639389115);
INSERT INTO `mh_write_tag` VALUES (37, 'css', 1639389156, 1639389156);
INSERT INTO `mh_write_tag` VALUES (38, 'html', 1639389161, 1639389161);
INSERT INTO `mh_write_tag` VALUES (41, 'vue2', 1639470646, 1639470646);
INSERT INTO `mh_write_tag` VALUES (42, 'vue3', 1639470649, 1639470649);
INSERT INTO `mh_write_tag` VALUES (43, 'react', 1639470658, 1639470658);
INSERT INTO `mh_write_tag` VALUES (44, 'webpack', 1639470688, 1639470688);
INSERT INTO `mh_write_tag` VALUES (45, '爬虫', 1639555834, 1639555834);
INSERT INTO `mh_write_tag` VALUES (46, 'axios', 1639555852, 1639555852);
INSERT INTO `mh_write_tag` VALUES (47, 'JavaScript', 1639555953, 1639555953);

SET FOREIGN_KEY_CHECKS = 1;
