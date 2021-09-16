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

 Date: 16/09/2021 18:35:23
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for mh_essay
-- ----------------------------
DROP TABLE IF EXISTS `mh_essay`;
CREATE TABLE `mh_essay`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'id',
  `cover` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '文章封面',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '文章标题',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT '文章内容',
  `created` int NULL DEFAULT NULL COMMENT '创建时间',
  `updated` int NULL DEFAULT NULL COMMENT '更新时间',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '文章描述',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of mh_essay
-- ----------------------------
INSERT INTO `mh_essay` VALUES (1, NULL, '123', 'hello world~', 1631776217, 1631785094, 'testa123123');

-- ----------------------------
-- Table structure for mh_menu
-- ----------------------------
DROP TABLE IF EXISTS `mh_menu`;
CREATE TABLE `mh_menu`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '菜单id',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '菜单标题',
  `icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '菜单图标',
  `sort` int NULL DEFAULT 0 COMMENT '排序',
  `type` int NULL DEFAULT NULL COMMENT '菜单类型；1：可折叠展开的菜单，不可选；2：可选的菜单',
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '指向路径',
  `parent_id` int NULL DEFAULT NULL COMMENT '父级菜单id',
  `created` int NULL DEFAULT NULL COMMENT '创建时间',
  `updated` int NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 81 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of mh_menu
-- ----------------------------
INSERT INTO `mh_menu` VALUES (25, '系统管理', 'el-icon-setting', 2, 1, '/main/system', NULL, 1629188673, 1631515873);
INSERT INTO `mh_menu` VALUES (26, '菜单管理', NULL, 0, 2, '/main/system/menu', 25, 1629189215, 1629189215);
INSERT INTO `mh_menu` VALUES (27, '用户管理', NULL, 1, 2, '/main/system/user', 25, 1629189286, 1630998885);
INSERT INTO `mh_menu` VALUES (28, '权限管理', NULL, 2, 2, '/main/system/role', 25, 1629189336, 1630999525);
INSERT INTO `mh_menu` VALUES (34, '系统总览', 'el-icon-monitor', 0, 1, '/main/analysis', NULL, 1629272896, 1631007869);
INSERT INTO `mh_menu` VALUES (70, '核心技术', NULL, 0, 2, '/main/analysis/skill', 34, 1631007849, 1631676774);
INSERT INTO `mh_menu` VALUES (71, '文章管理', 'el-icon-document', 1, 1, '/main/essay', NULL, 1631070422, 1631689059);
INSERT INTO `mh_menu` VALUES (76, '编写文章', NULL, 0, 2, '/main/essay/write', 71, 1631494836, 1631689097);

-- ----------------------------
-- Table structure for mh_moment
-- ----------------------------
DROP TABLE IF EXISTS `mh_moment`;
CREATE TABLE `mh_moment`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '动态id',
  `uid` int NULL DEFAULT NULL COMMENT 'user_id',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT '发表的内容',
  `created` int NULL DEFAULT NULL,
  `updated` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of mh_moment
-- ----------------------------
INSERT INTO `mh_moment` VALUES (1, 19, 'php是世界上最好的语言~', 1628591017, 1628591017);
INSERT INTO `mh_moment` VALUES (2, 19, 'hello world~', 1628644563, 1628644563);
INSERT INTO `mh_moment` VALUES (3, 19, 'hello world~', 1628645085, 1628645085);

-- ----------------------------
-- Table structure for mh_user
-- ----------------------------
DROP TABLE IF EXISTS `mh_user`;
CREATE TABLE `mh_user`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户密码',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户头像',
  `enable` int NULL DEFAULT 1 COMMENT '是否启用;1:启用0:禁用',
  `role_id` int NULL DEFAULT 3 COMMENT '权限id',
  `operator_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '操作ip',
  `operator_time` int NULL DEFAULT NULL COMMENT '操作时间',
  `last_login_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '最后登录ip',
  `last_login_time` int NULL DEFAULT NULL COMMENT '最后登录时间',
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '昵称',
  `mobile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '手机号码',
  `qq` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'qq号',
  `created` int NULL DEFAULT NULL COMMENT '创建时间',
  `updated` int NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE,
  UNIQUE INDEX `mh_user_username`(`username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 55 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of mh_user
-- ----------------------------
INSERT INTO `mh_user` VALUES (1, 'mihu0915', 'ea4ee1d8c29d7b6cf4438644ea4d88ca', 'http://localhost:1118/avatar/avatar-17be75ea3c9.JPG', 1, 1, '192.168.10.75', 1631756620, '192.168.10.75', 1631788259, '喝甜酒也迷糊', NULL, '2285088054', 1630508538, 1631788259);
INSERT INTO `mh_user` VALUES (37, 'test123', 'cc03e747a6afbbcbf8be7668acfebee5', NULL, 1, 3, NULL, NULL, '127.0.0.1', 1631240891, 'test123', NULL, '12311', 1631175667, 1631240891);
INSERT INTO `mh_user` VALUES (38, 'test111', '309031d05eb343448b725b09a3635f13', NULL, 0, 3, NULL, NULL, NULL, NULL, 'test456', NULL, NULL, 1631178264, 1631262319);
INSERT INTO `mh_user` VALUES (39, 'test222211', '88ac78015b2a7a0b536c7dd679d6032d', NULL, 1, 3, NULL, NULL, NULL, NULL, 'test2222', NULL, NULL, 1631257531, 1631504040);
INSERT INTO `mh_user` VALUES (41, 'test3333', '4bfe1b8f3dd03882fc394b93df365a7d', NULL, 0, 3, NULL, NULL, NULL, NULL, 'test3333', NULL, NULL, 1631257558, 1631257771);
INSERT INTO `mh_user` VALUES (42, 'test444', '1cebd38bb6c75dd62ed2def1ed2aa4b5', NULL, 0, 3, NULL, NULL, NULL, NULL, 'test444', NULL, NULL, 1631257579, 1631257773);
INSERT INTO `mh_user` VALUES (44, 'test888', 'e2e31a427d2e8c4851b53f7eeb9fff95', NULL, 1, 3, NULL, NULL, NULL, NULL, 'test888', NULL, NULL, 1631257710, 1631257710);
INSERT INTO `mh_user` VALUES (45, 'test999', '93327f2856df1105a1318895ac44e684', NULL, 1, 3, NULL, NULL, NULL, NULL, 'test999', NULL, NULL, 1631257722, 1631257722);
INSERT INTO `mh_user` VALUES (46, 'test100', 'f5f97c92ae39d49a4fa87d97eb3d89ff', NULL, 1, 3, NULL, NULL, NULL, NULL, 'test100', NULL, NULL, 1631257740, 1631257740);
INSERT INTO `mh_user` VALUES (47, 'test1100', 'ab9bc1e514d787624486de321c65a9a6', NULL, 1, 3, NULL, NULL, NULL, NULL, 'test1100', NULL, NULL, 1631257817, 1631257817);
INSERT INTO `mh_user` VALUES (48, 'test2211', '19b30abe03267c1602807543e4dd4825', NULL, 1, 3, NULL, NULL, NULL, NULL, 'test2211', NULL, NULL, 1631257866, 1631257866);
INSERT INTO `mh_user` VALUES (49, 'testhhh', '183946b92358420fb7bbfacaa20d70cb', NULL, 1, 3, NULL, NULL, NULL, NULL, 'testhhh', NULL, NULL, 1631262147, 1631262147);
INSERT INTO `mh_user` VALUES (50, 'test1133', '14fd39cfecc240f56df9f963c54d2bf0', NULL, 1, 9, NULL, NULL, NULL, NULL, 'test1133', NULL, NULL, 1631262534, 1631495385);
INSERT INTO `mh_user` VALUES (51, 'testaaaa', 'da7a4c1171e14afc0744bf2f34d8515f', 'http://localhost:1118/avatar/avatar-17bec458830.jpg', 1, 3, NULL, NULL, NULL, NULL, 'testaaaa', NULL, NULL, 1631500303, 1631756586);
INSERT INTO `mh_user` VALUES (54, 'test777', 'da7a4c1171e14afc0744bf2f34d8515f', 'http://localhost:1118/avatar/avatar-17be804757b.jpg', 1, 3, NULL, NULL, NULL, NULL, 'test777', NULL, '123123123', 1631633722, 1631756620);

-- ----------------------------
-- Table structure for mh_user_role
-- ----------------------------
DROP TABLE IF EXISTS `mh_user_role`;
CREATE TABLE `mh_user_role`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '角色表id',
  `role_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '角色名称',
  `role_intro` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '角色介绍',
  `role_menu` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '角色菜单',
  `created` int NULL DEFAULT NULL COMMENT '创建时间',
  `updated` int NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of mh_user_role
-- ----------------------------
INSERT INTO `mh_user_role` VALUES (1, '超级管理员', '所有权限', '25,26,27,28,34,70,71,76', NULL, 1631697205);
INSERT INTO `mh_user_role` VALUES (2, '管理员', '部分权限', '34,70,25,26,27,28,78,71,76,77,79,73,74', NULL, 1631503952);
INSERT INTO `mh_user_role` VALUES (3, '普通会员', '普通权限', '34,70', NULL, 1631503939);

SET FOREIGN_KEY_CHECKS = 1;
