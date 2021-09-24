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

 Date: 23/09/2021 15:19:13
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
) ENGINE = InnoDB AUTO_INCREMENT = 82 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
INSERT INTO `mh_menu` VALUES (32, '文章管理', NULL, 0, 2, '/main/blog/write', 31, 1631494836, 1631929460);

SET FOREIGN_KEY_CHECKS = 1;
