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

 Date: 10/09/2021 18:16:45
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
) ENGINE = InnoDB AUTO_INCREMENT = 76 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of mh_menu
-- ----------------------------
INSERT INTO `mh_menu` VALUES (25, '系统管理', 'el-icon-setting', 1, 1, '/main/system', NULL, 1629188673, 1631003334);
INSERT INTO `mh_menu` VALUES (26, '菜单管理', NULL, 0, 2, '/main/system/menu', 25, 1629189215, 1629189215);
INSERT INTO `mh_menu` VALUES (27, '用户管理', NULL, 1, 2, '/main/system/user', 25, 1629189286, 1630998885);
INSERT INTO `mh_menu` VALUES (28, '权限管理', NULL, 2, 2, '/main/system/role', 25, 1629189336, 1630999525);
INSERT INTO `mh_menu` VALUES (34, '系统总览', 'el-icon-monitor', 0, 1, '/main/analysis', NULL, 1629272896, 1631007869);
INSERT INTO `mh_menu` VALUES (70, '技术总览', NULL, 0, 2, '/main/analysis/skill', 34, 1631007849, 1631007849);
INSERT INTO `mh_menu` VALUES (71, 'test菜单', NULL, 5, 1, '111', NULL, 1631070422, 1631070422);
INSERT INTO `mh_menu` VALUES (73, '子菜单2', NULL, 1, 2, '111/1111', 71, 1631174586, 1631174696);
INSERT INTO `mh_menu` VALUES (74, '子菜单3', NULL, 2, 2, '111/22', 71, 1631174618, 1631174626);

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
) ENGINE = InnoDB AUTO_INCREMENT = 39 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of mh_user
-- ----------------------------
INSERT INTO `mh_user` VALUES (1, 'mihu0915', 'ea4ee1d8c29d7b6cf4438644ea4d88ca', 1, 1, NULL, NULL, '127.0.0.1', 1631240904, 'mihu0915', NULL, NULL, 1630508538, 1631240904);
INSERT INTO `mh_user` VALUES (37, 'test123', 'cc03e747a6afbbcbf8be7668acfebee5', 1, 3, NULL, NULL, '127.0.0.1', 1631240891, 'test123', NULL, '12311', 1631175667, 1631240891);
INSERT INTO `mh_user` VALUES (38, 'test111', '309031d05eb343448b725b09a3635f13', 0, 3, NULL, NULL, NULL, NULL, 'test456', NULL, NULL, 1631178264, 1631262319);
INSERT INTO `mh_user` VALUES (39, 'test2222', '88ac78015b2a7a0b536c7dd679d6032d', 0, 3, NULL, NULL, NULL, NULL, 'test2222', NULL, NULL, 1631257531, 1631257769);
INSERT INTO `mh_user` VALUES (41, 'test3333', '4bfe1b8f3dd03882fc394b93df365a7d', 0, 3, NULL, NULL, NULL, NULL, 'test3333', NULL, NULL, 1631257558, 1631257771);
INSERT INTO `mh_user` VALUES (42, 'test444', '1cebd38bb6c75dd62ed2def1ed2aa4b5', 0, 3, NULL, NULL, NULL, NULL, 'test444', NULL, NULL, 1631257579, 1631257773);
INSERT INTO `mh_user` VALUES (44, 'test888', 'e2e31a427d2e8c4851b53f7eeb9fff95', 1, 3, NULL, NULL, NULL, NULL, 'test888', NULL, NULL, 1631257710, 1631257710);
INSERT INTO `mh_user` VALUES (45, 'test999', '93327f2856df1105a1318895ac44e684', 1, 3, NULL, NULL, NULL, NULL, 'test999', NULL, NULL, 1631257722, 1631257722);
INSERT INTO `mh_user` VALUES (46, 'test100', 'f5f97c92ae39d49a4fa87d97eb3d89ff', 1, 3, NULL, NULL, NULL, NULL, 'test100', NULL, NULL, 1631257740, 1631257740);
INSERT INTO `mh_user` VALUES (47, 'test1100', 'ab9bc1e514d787624486de321c65a9a6', 1, 3, NULL, NULL, NULL, NULL, 'test1100', NULL, NULL, 1631257817, 1631257817);
INSERT INTO `mh_user` VALUES (48, 'test2211', '19b30abe03267c1602807543e4dd4825', 1, 3, NULL, NULL, NULL, NULL, 'test2211', NULL, NULL, 1631257866, 1631257866);
INSERT INTO `mh_user` VALUES (49, 'testhhh', '183946b92358420fb7bbfacaa20d70cb', 1, 3, NULL, NULL, NULL, NULL, 'testhhh', NULL, NULL, 1631262147, 1631262147);
INSERT INTO `mh_user` VALUES (50, 'test1133', '14fd39cfecc240f56df9f963c54d2bf0', 1, 3, NULL, NULL, NULL, NULL, 'test1133', NULL, NULL, 1631262534, 1631262534);

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
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of mh_user_role
-- ----------------------------
INSERT INTO `mh_user_role` VALUES (1, '超级管理员', '所有权限', '25,26,27,28,34,70,71,73,74', NULL, 1631174825);
INSERT INTO `mh_user_role` VALUES (2, '管理员', '部分权限', '25,26', NULL, NULL);
INSERT INTO `mh_user_role` VALUES (3, '普通会员', '普通权限', '', NULL, NULL);
INSERT INTO `mh_user_role` VALUES (4, 'test权限', '123123hhhh', '123,22', 1629253786, 1629257606);
INSERT INTO `mh_user_role` VALUES (5, 'test权限', 'test描述', '25,26', 1629257977, 1629257977);
INSERT INTO `mh_user_role` VALUES (6, 'test权限', 'test描述', '25,26', 1629258000, 1629258000);
INSERT INTO `mh_user_role` VALUES (7, 'test权限', 'test描述', '25,26', 1629258340, 1629258340);
INSERT INTO `mh_user_role` VALUES (8, 'test权限', 'test描述', '25,26', 1629258719, 1629258719);

SET FOREIGN_KEY_CHECKS = 1;
