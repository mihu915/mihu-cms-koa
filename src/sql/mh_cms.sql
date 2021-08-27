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

 Date: 27/08/2021 10:32:40
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

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
) ENGINE = InnoDB AUTO_INCREMENT = 35 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of mh_menu
-- ----------------------------
INSERT INTO `mh_menu` VALUES (25, '系统管理', 'el-icon-setting', 0, 1, '/main/system', NULL, 1629188673, 1629188673);
INSERT INTO `mh_menu` VALUES (26, '菜单管理', NULL, 0, 2, '/main/system/menu', 25, 1629189215, 1629189215);
INSERT INTO `mh_menu` VALUES (27, '角色管理', NULL, 0, 2, '/main/system/role', 25, 1629189286, 1629189286);
INSERT INTO `mh_menu` VALUES (28, '部门管理', NULL, 0, 2, '/main/system/department', 25, 1629189336, 1629189336);
INSERT INTO `mh_menu` VALUES (34, '系统总览', 'el-icon-monitor', 0, 1, '/main/analysis', NULL, 1629272896, 1629272896);

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
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

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
  `enable` int NULL DEFAULT 1 COMMENT '是否启用;1:启用0:禁用',
  `rule_id` int NULL DEFAULT 3 COMMENT '权限id',
  `register_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '注册ip',
  `operator_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '操作ip',
  `register_time` int NULL DEFAULT NULL COMMENT '注册时间',
  `operator_time` int NULL DEFAULT NULL COMMENT '操作时间',
  `last_login_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '最后登录ip',
  `last_login_time` int NULL DEFAULT NULL COMMENT '最后登录时间',
  `realname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '真实姓名',
  `mobile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '手机号码',
  `qq` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'qq号',
  `position` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '职位',
  `created` int NULL DEFAULT NULL COMMENT '创建时间',
  `updated` int NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 29 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of mh_user
-- ----------------------------
INSERT INTO `mh_user` VALUES (18, '123123123', 'f5bb0c8de146c67b44babbf4e6584cc0', 1, 2, '127.0.0.1', NULL, 1628575833, NULL, NULL, NULL, '123123123', NULL, NULL, NULL, 1628575833, 1628575833);
INSERT INTO `mh_user` VALUES (19, 'mihu0915', 'ea4ee1d8c29d7b6cf4438644ea4d88ca', 1, 1, '127.0.0.1', NULL, 1628575850, NULL, '192.168.10.72', 1629949949, 'mihu0915', NULL, NULL, NULL, 1628575850, 1629949949);
INSERT INTO `mh_user` VALUES (20, 'test123', 'cc03e747a6afbbcbf8be7668acfebee5', 1, 3, '127.0.0.1', NULL, 1628578202, NULL, '192.168.10.59', 1629340618, 'test123', NULL, NULL, NULL, 1628578202, 1629340618);
INSERT INTO `mh_user` VALUES (21, 'test1234', '16d7a4fca7442dda3ad93c9a726597e4', 1, 2, '127.0.0.1', NULL, 1628647372, NULL, NULL, NULL, 'test1234', NULL, NULL, NULL, 1628647372, 1628647372);
INSERT INTO `mh_user` VALUES (22, 'test12', '16d7a4fca7442dda3ad93c9a726597e4', 1, 2, '127.0.0.1', NULL, 1628647465, NULL, NULL, NULL, 'test12', NULL, NULL, NULL, 1628647465, 1628647465);
INSERT INTO `mh_user` VALUES (23, '123123', '12312.', 1, 2, '127.0.0.1', NULL, 1629083603, NULL, NULL, NULL, '123123', NULL, NULL, NULL, 1629083603, 1629083603);
INSERT INTO `mh_user` VALUES (24, '123123111', '12312.', 1, 2, '127.0.0.1', NULL, 1629083685, NULL, NULL, NULL, '123123111', NULL, NULL, NULL, 1629083685, 1629083685);
INSERT INTO `mh_user` VALUES (25, '123123112', '12312.', 1, 2, '127.0.0.1', NULL, 1629083734, NULL, NULL, NULL, '123123112', NULL, NULL, NULL, 1629083734, 1629083734);
INSERT INTO `mh_user` VALUES (26, '111222333', '12312.', 1, 2, '127.0.0.1', NULL, 1629083799, NULL, NULL, NULL, '111222333', NULL, NULL, NULL, 1629083799, 1629083799);
INSERT INTO `mh_user` VALUES (27, '111222111', '44f2bb9adf735f70f8618fda195ec263', 1, 2, '127.0.0.1', NULL, 1629084199, NULL, NULL, NULL, '111222111', NULL, NULL, NULL, 1629084199, 1629084199);
INSERT INTO `mh_user` VALUES (28, '111222555', '44f2bb9adf735f70f8618fda195ec263', 1, 2, '127.0.0.1', NULL, 1629105155, NULL, NULL, NULL, '111222555', NULL, NULL, NULL, 1629105155, 1629105155);

-- ----------------------------
-- Table structure for mh_user_rule
-- ----------------------------
DROP TABLE IF EXISTS `mh_user_rule`;
CREATE TABLE `mh_user_rule`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '权限表id',
  `rule_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '权限名称',
  `rule_intro` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '权限介绍',
  `rule_menu` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '权限菜单',
  `created` int NULL DEFAULT NULL COMMENT '创建时间',
  `updated` int NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of mh_user_rule
-- ----------------------------
INSERT INTO `mh_user_rule` VALUES (1, '超级管理员', '所有权限', '25,26,27,28,34', NULL, 1629272896);
INSERT INTO `mh_user_rule` VALUES (2, '管理员', '部分权限', NULL, NULL, NULL);
INSERT INTO `mh_user_rule` VALUES (3, '普通会员', '普通权限', NULL, NULL, NULL);
INSERT INTO `mh_user_rule` VALUES (4, 'test权限', '123123hhhh', '123,22', 1629253786, 1629257606);
INSERT INTO `mh_user_rule` VALUES (5, 'test权限', 'test描述', '25,26', 1629257977, 1629257977);
INSERT INTO `mh_user_rule` VALUES (6, 'test权限', 'test描述', '25,26', 1629258000, 1629258000);
INSERT INTO `mh_user_rule` VALUES (7, 'test权限', 'test描述', '25,26', 1629258340, 1629258340);
INSERT INTO `mh_user_rule` VALUES (8, 'test权限', 'test描述', '25,26', 1629258719, 1629258719);

SET FOREIGN_KEY_CHECKS = 1;
