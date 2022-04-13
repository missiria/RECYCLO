-- MySQL dump 10.13  Distrib 8.0.28, for Linux (x86_64)
--
-- Host: localhost    Database: edge_app_rp
-- ------------------------------------------------------
-- Server version	8.0.28-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned DEFAULT NULL,
  `first_name` varchar(180) DEFAULT NULL,
  `last_name` varchar(180) DEFAULT NULL,
  `society_id` varchar(11) DEFAULT NULL,
  `gender` enum('FEMALE','MALE') DEFAULT NULL,
  `type` enum('COLLECTOR','WORKER') DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `nationality` varchar(255) DEFAULT NULL,
  `zip_code` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `accounts_user_id_unique` (`user_id`),
  CONSTRAINT `accounts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adonis_schema`
--

DROP TABLE IF EXISTS `adonis_schema`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adonis_schema` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `batch` int NOT NULL,
  `migration_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adonis_schema`
--

LOCK TABLES `adonis_schema` WRITE;
/*!40000 ALTER TABLE `adonis_schema` DISABLE KEYS */;
INSERT INTO `adonis_schema` VALUES (1,'database/migrations/1646775437195_users',1,'2022-03-27 15:16:39'),(2,'database/migrations/1646776849646_accounts',1,'2022-03-27 15:16:40'),(3,'database/migrations/1646780963661_api_tokens',1,'2022-03-27 15:16:40'),(4,'database/migrations/1646944854070_carts',1,'2022-03-27 15:16:42'),(5,'database/migrations/1646945172610_collects',1,'2022-03-27 15:16:42'),(6,'database/migrations/1646945937333_declarations',1,'2022-03-27 15:16:42'),(7,'database/migrations/1646946245506_donations',1,'2022-03-27 15:16:42'),(8,'database/migrations/1646946326673_messages',1,'2022-03-27 15:16:43'),(9,'database/migrations/1646946403770_notifications',1,'2022-03-27 15:16:43'),(10,'database/migrations/1646946515889_points',1,'2022-03-27 15:16:44'),(11,'database/migrations/1646946760179_withdrawals',1,'2022-03-27 15:16:45'),(12,'database/migrations/1646953807089_categories',1,'2022-03-27 15:16:45'),(13,'database/migrations/1647129694763_reviews',1,'2022-03-27 15:16:47'),(14,'database/migrations/1647523125825_recharges',1,'2022-03-27 15:16:47');
/*!40000 ALTER TABLE `adonis_schema` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adonis_schema_versions`
--

DROP TABLE IF EXISTS `adonis_schema_versions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adonis_schema_versions` (
  `version` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adonis_schema_versions`
--

LOCK TABLES `adonis_schema_versions` WRITE;
/*!40000 ALTER TABLE `adonis_schema_versions` DISABLE KEYS */;
INSERT INTO `adonis_schema_versions` VALUES (2);
/*!40000 ALTER TABLE `adonis_schema_versions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_tokens`
--

DROP TABLE IF EXISTS `api_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_tokens` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `api_tokens_token_unique` (`token`),
  KEY `api_tokens_user_id_foreign` (`user_id`),
  CONSTRAINT `api_tokens_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_tokens`
--

LOCK TABLES `api_tokens` WRITE;
/*!40000 ALTER TABLE `api_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned DEFAULT NULL,
  `number_card` varchar(100) DEFAULT NULL,
  `expiry_year` date DEFAULT NULL,
  `expiry_month` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `carts_user_id_foreign` (`user_id`),
  CONSTRAINT `carts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categories_user_id_foreign` (`user_id`),
  CONSTRAINT `categories_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `collects`
--

DROP TABLE IF EXISTS `collects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `collects` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `collect_name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `point` float(255,2) DEFAULT NULL,
  `description` longtext,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collects`
--

LOCK TABLES `collects` WRITE;
/*!40000 ALTER TABLE `collects` DISABLE KEYS */;
INSERT INTO `collects` VALUES (1,'Plastique','collects/ci_1.png',50.00,'lorem ipsum','2022-03-27 15:16:47','2022-03-27 15:16:47'),(2,'Carton-Papier','collects/ci_2.png',100.00,'lorem ipsum','2022-03-27 15:16:47','2022-03-27 15:16:47'),(3,'Metal','collects/ci_3.png',20.00,'lorem ipsum','2022-03-27 15:16:47','2022-03-27 15:16:47'),(4,'Huile Végétale','collects/ci_4.png',200.00,'lorem ipsum','2022-03-27 15:16:47','2022-03-27 15:16:47');
/*!40000 ALTER TABLE `collects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `declarations`
--

DROP TABLE IF EXISTS `declarations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `declarations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `collect_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `quantity` float(255,2) DEFAULT NULL,
  `status` enum('PENDING','VALID','CANCELED','PAID') DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `declarations`
--

LOCK TABLES `declarations` WRITE;
/*!40000 ALTER TABLE `declarations` DISABLE KEYS */;
INSERT INTO `declarations` VALUES (1,1,1,10.00,'PENDING','2022-03-27 15:16:47','2022-03-27 15:16:47'),(2,2,2,10.00,'PENDING','2022-03-27 15:16:47','2022-03-27 15:16:47'),(3,3,2,10.00,'PENDING','2022-03-27 15:16:47','2022-03-27 15:16:47'),(4,4,1,10.00,'CANCELED','2022-03-27 15:16:47','2022-03-27 15:16:47');
/*!40000 ALTER TABLE `declarations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donations`
--

DROP TABLE IF EXISTS `donations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `bank` varchar(255) DEFAULT NULL,
  `rib` varchar(24) DEFAULT NULL,
  `amount` float(255,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donations`
--

LOCK TABLES `donations` WRITE;
/*!40000 ALTER TABLE `donations` DISABLE KEYS */;
INSERT INTO `donations` VALUES (1,'missiria@gmail.com','Younes MISSIRIA','BMCI','4441455645565412',2500.00,'2022-03-27 15:16:47','2022-03-27 15:16:47'),(2,'amin@gmail.com','Amine AMAZZAL','BMCE','25441455645565412',3200.00,'2022-03-27 15:16:47','2022-03-27 15:16:47'),(3,'youssef@gmail.com','Youssef SAAIOU','ATTIJARI','25441455645565412',4500.00,'2022-03-27 15:16:47','2022-03-27 15:16:47'),(4,'salem@gmail.com','Salem ELHOCEIMI','BANK OF AMERICA','45451110645555230',6100.00,'2022-03-27 15:16:47','2022-03-27 15:16:47');
/*!40000 ALTER TABLE `donations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `sender_user_id` int unsigned DEFAULT NULL,
  `received_user_id` int unsigned DEFAULT NULL,
  `message` longtext,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `messages_sender_user_id_foreign` (`sender_user_id`),
  KEY `messages_received_user_id_foreign` (`received_user_id`),
  CONSTRAINT `messages_received_user_id_foreign` FOREIGN KEY (`received_user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `messages_sender_user_id_foreign` FOREIGN KEY (`sender_user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `note` varchar(255) DEFAULT NULL,
  `type` enum('DECLARATION','MESSAGE','PAYMENT','POINT','UPDATE') DEFAULT NULL,
  `status` enum('READ','UNREAD') DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `points`
--

DROP TABLE IF EXISTS `points`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `points` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned DEFAULT NULL,
  `declaration_id` int unsigned DEFAULT NULL,
  `point` float(255,2) DEFAULT NULL,
  `status` enum('VALID','PENDING') DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `points_user_id_foreign` (`user_id`),
  KEY `points_declaration_id_foreign` (`declaration_id`),
  CONSTRAINT `points_declaration_id_foreign` FOREIGN KEY (`declaration_id`) REFERENCES `declarations` (`id`) ON DELETE CASCADE,
  CONSTRAINT `points_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `points`
--

LOCK TABLES `points` WRITE;
/*!40000 ALTER TABLE `points` DISABLE KEYS */;
/*!40000 ALTER TABLE `points` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recharges`
--

DROP TABLE IF EXISTS `recharges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recharges` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `operator` enum('ORANGE','IAM','INWI') DEFAULT NULL,
  `type` enum('INTERNET','MINUTES','BALANCE') DEFAULT NULL,
  `status` enum('PENDING','CHARGED') DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recharges`
--

LOCK TABLES `recharges` WRITE;
/*!40000 ALTER TABLE `recharges` DISABLE KEYS */;
INSERT INTO `recharges` VALUES (1,1,'ORANGE','BALANCE','PENDING',300,'2022-03-27 15:16:47','2022-03-27 15:16:47'),(2,2,'ORANGE','INTERNET','PENDING',25,'2022-03-27 15:16:47','2022-03-27 15:16:47'),(3,1,'ORANGE','MINUTES','PENDING',20,'2022-03-27 15:16:47','2022-03-27 15:16:47'),(4,1,'ORANGE','INTERNET','CHARGED',100,'2022-03-27 15:16:47','2022-03-27 15:16:47');
/*!40000 ALTER TABLE `recharges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned DEFAULT NULL,
  `comment` longtext,
  `active` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `reviews_user_id_foreign` (`user_id`),
  CONSTRAINT `reviews_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `password` varchar(180) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `role` enum('ADMIN','MODERATOR','USER') DEFAULT 'USER',
  `type` enum('MENAGE','COLLECTOR') DEFAULT NULL,
  `is_verified` tinyint(1) DEFAULT NULL,
  `active` tinyint(1) DEFAULT '1',
  `remember_me_token` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  UNIQUE KEY `users_phone_unique` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'missiria@gmail.com','0656560552','$argon2id$v=19$t=3,m=4096,p=1$eZExJvZlOfvBu8en2DiSTA$+sGtbQn18zOcCqSPY+QPmZyvRHz6W/2PksIzvtsCb+k','Younes','MISSIRIA',NULL,'ADMIN',NULL,NULL,1,NULL,'2022-03-27 15:16:47','2022-03-27 15:16:47'),(2,'amine@gmail.com','0691987003','$argon2id$v=19$t=3,m=4096,p=1$/mbIdDKGOkn5B66k7Er+UQ$e6wLIJsGR7x8GfrxQAUdRCEU37pLkdPaHK3ZurM8XSc','amine','MISSIRIA',NULL,'ADMIN',NULL,NULL,1,NULL,'2022-03-27 15:16:47','2022-03-27 15:16:47'),(3,'youssef@gmail.com','066262626262','$argon2id$v=19$t=3,m=4096,p=1$uI++rZ0ZVC/2sn2piZohMQ$zE/ZVW6mlLkPIzJSFeye/dt0KdU4y5PqK4hfujmfFpg','youssef','MISSIRIA',NULL,'ADMIN',NULL,NULL,0,NULL,'2022-03-27 15:16:47','2022-03-27 15:16:47'),(4,'salem@gmail.com','066161616142','$argon2id$v=19$t=3,m=4096,p=1$kWefc+eqWLONmaIzGxDuzw$PxJB1VPoPy7RT1Sb2PFBy43jOejjWr6W9bOsErLxrE4','Salem','MISSIRIA',NULL,'MODERATOR',NULL,NULL,1,NULL,'2022-03-27 15:16:47','2022-03-27 15:16:47'),(5,'hassan@gmail.com','066161616182','$argon2id$v=19$t=3,m=4096,p=1$W2yl+9c0u8ha6azoA2mmkw$JigPEhTohUtybQLBP+5NtxZYI6NnHnDMzb7dUxj/4u8','Hassan','MISSIRIA',NULL,'USER',NULL,NULL,1,NULL,'2022-03-27 15:16:47','2022-03-27 15:16:47'),(6,'okeystreaming@gmail.com','212656560552','$argon2id$v=19$t=3,m=4096,p=1$YYb38ooEOIdk4Cax40jDuw$fxgApLv40sVqxTy/n0C8VtCr3zu4CH8JTCf+4e1vL5c','Gyyyyy','Yyyygg',NULL,'USER','MENAGE',NULL,1,NULL,'2022-03-27 16:03:29','2022-03-27 16:03:29'),(7,'okeystreaming2@gmail.com','212656590552','$argon2id$v=19$t=3,m=4096,p=1$cVgpox2Gp9unPT8GvZNbTg$LLz0tz/TMyEw41pfe/ElAQv52A6lP2eX1ZE8GRv6Ub8','6yyyggh','Hhhhhhhhh',NULL,'USER','COLLECTOR',NULL,1,NULL,'2022-03-27 16:18:16','2022-03-27 16:18:16'),(8,'okeystreaming@gmail.fr','212656560556','$argon2id$v=19$t=3,m=4096,p=1$hgUxt9zTTYW60R54Re6MHw$9by6BcPrqn+DeqbtiQvCuN9t82rTWmLykDl5UhiLuAg','Yyfgguy','Yhgggg',NULL,'USER','COLLECTOR',NULL,1,NULL,'2022-03-27 16:22:25','2022-03-27 16:22:25'),(9,'missfiria@gmail.com','212656560558','$argon2id$v=19$t=3,m=4096,p=1$vzyBuEPZcPcOeyuwO1e2MQ$f6cSw4zBVOUnfKOg47z1FzzFb9vZL4UYshtSpuF4SQQ','Tyyyyy6tty','Yyyyggyu',NULL,'USER','MENAGE',NULL,1,NULL,'2022-03-27 20:30:47','2022-03-27 20:30:47'),(10,'okeystreaming@gmail.cof','212656560555','$argon2id$v=19$t=3,m=4096,p=1$mzzNhfJ0GfnY6dnXQ8hmkA$u380Js4HjSOC0o/iwit2Tkvf68n9YNHGqFOxe8kgzEs','Ghuuu','Tgggh',NULL,'USER','MENAGE',NULL,1,NULL,'2022-03-27 20:43:07','2022-03-27 20:43:07');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `withdrawals`
--

DROP TABLE IF EXISTS `withdrawals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `withdrawals` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned DEFAULT NULL,
  `amount` float(255,2) DEFAULT NULL,
  `status` enum('PENDING','VALID','PAID','CANCELED') DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `withdrawals_user_id_foreign` (`user_id`),
  CONSTRAINT `withdrawals_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `withdrawals`
--

LOCK TABLES `withdrawals` WRITE;
/*!40000 ALTER TABLE `withdrawals` DISABLE KEYS */;
/*!40000 ALTER TABLE `withdrawals` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-13 12:44:17
