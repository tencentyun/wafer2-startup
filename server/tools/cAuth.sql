/*
 Navicat Premium Data Transfer

 Source Server         : Localhost
 Source Server Type    : MySQL
 Source Server Version : 50717
 Source Host           : localhost
 Source Database       : cAuth

 Target Server Type    : MySQL
 Target Server Version : 50717
 File Encoding         : utf-8

 Date: 08/10/2017 22:22:52 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

--
-- Database: `cAuth`
--

-- --------------------------------------------------------

-- ----------------------------
--  Table structure for `cSessionInfo`
-- ----------------------------
DROP TABLE IF EXISTS `cSessionInfo`;
CREATE TABLE `cSessionInfo` (
  `open_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uuid` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `skey` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_visit_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `session_key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_info` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`open_id`),
  KEY `openid` (`open_id`) USING BTREE,
  KEY `skey` (`skey`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='会话管理用户信息';


--
-- 表的结构 `cAppinfo`
--
DROP TABLE IF EXISTS `cAppinfo`;
CREATE TABLE `cAppinfo` (
  `appid` char(36) DEFAULT NULL,
  `secret` char(64) DEFAULT NULL,
  `ip` char(20) DEFAULT NULL,
  `login_duration` int(11) DEFAULT NULL,
  `qcloud_appid` char(64) DEFAULT NULL,
  `session_duration` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 表的结构 `cBook`
--
DROP TABLE IF EXISTS `cBook`;
CREATE TABLE `cBook` (
  `id` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '主键',
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '名称',
  `price` int(10) NOT NULL COMMENT '价格'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;
