-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: torremarvel_db
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `apiheroes`
--

LOCK TABLES `apiheroes` WRITE;
/*!40000 ALTER TABLE `apiheroes` DISABLE KEYS */;
/*!40000 ALTER TABLE `apiheroes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,47,3,29,2,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(2,30,1,29,1,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(3,26,1,24,3,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(4,22,1,3,2,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(5,3,3,26,2,'2021-09-24 17:37:10','2021-09-24 17:37:10');
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'ropa','2021-09-24 17:37:10','2021-09-24 17:37:10'),(2,'merchandising','2021-09-24 17:37:10','2021-09-24 17:37:10'),(3,'comics','2021-09-24 17:37:10','2021-09-24 17:37:10'),(4,'figuras','2021-09-24 17:37:10','2021-09-24 17:37:10');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'completado',1,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(2,'pendiente',2,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(3,'rechazado',3,'2021-09-24 17:37:10','2021-09-24 17:37:10');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Mochila','Mochila Escolar',200,'Mochila.jpeg',NULL,2,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(2,'Reloj Aracnido','Justo a tiempo',300,'Reloj-hombreAraña.jpg',NULL,2,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(3,'Walkie Talkie','Excelente estado',400,'Walkie-Talkies.jpeg',NULL,2,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(4,'Spiderman #756','Tomo unico',200,'comic1.jpg',NULL,3,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(5,'Spiderman #715','Tomo unico',300,'comic2.png',NULL,3,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(6,'Spiderman #210','Tomo original',400,'comic3.jpg',NULL,3,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(7,'Skrull America','Figura de 20cm',800,'figur8.jpg',NULL,4,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(8,'Dr Doom','Figura de 40cm',1300,'figura1.jpg',NULL,4,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(9,'Spiderman Ultimate','Figura de 25cm',1200,'figura2.jpg',NULL,4,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(10,'Capitan America','Figura de 35cm',1200,'figura3.jpg',NULL,4,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(11,'Falcon Soldier','Figura de 30cm',1400,'figura4.jpg',NULL,4,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(12,'Combo X-MEN','Figuras de 35cm',2000,'figura5.jpg',NULL,4,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(13,'Wolverine','Figura de 20cm',1400,'figura6.jpg',NULL,4,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(14,'Deadpool','Figura de 25cm',1400,'figura7.jpg',NULL,4,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(15,'Alpargatas','comodidad infinita',400,'mercha1.jpg',NULL,2,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(16,'Taza Capitan America','Porcelana',400,'mercha2.jpg',NULL,2,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(17,'Taza Spiderman','Porcelana',400,'mercha3.jpg',NULL,2,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(18,'Almohada escudo','hecha de algodon',600,'mercha4.jpg',NULL,2,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(19,'Taza vengadores','Plastico infantil',350,'mercha6.jpg',NULL,2,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(20,'Poster Estados unidos','Poster edicion limitada',250,'poster.jpeg',NULL,2,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(21,'Taza marvel','Porcelana',400,'mercha7.jpg',NULL,2,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(22,'Remera Marvel','Remera de poliester',550,'remera1.jpg',NULL,1,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(23,'Buzo marvel','Buzo de Lana',650,'ropa2.jpg',NULL,1,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(24,'Remera Wakandiana','Remera de poliester',550,'ropa3.jpg',NULL,1,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(25,'Remera C.Marvel','Remera de poliester',550,'ropa4.jpg',NULL,1,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(26,'Remera C.America','Remera de poliester',550,'ropa5.jpg',NULL,1,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(27,'Remera Spidey','Remera de poliester',550,'ropa6.jpg',NULL,1,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(28,'Remera Vengadores','Remera de poliester',550,'ropa9.jpg',NULL,1,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(29,'Remera Capitan America','Remera de poliester',550,'ropa10.jpg',NULL,1,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(30,'Remera Capitan America','Remera de poliester',550,'ropa11.jpg',NULL,1,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(31,'Marvel #1000','Tomo unico',250,'comic6.jpg',NULL,3,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(32,'Spiderverse #3','Tomo unico',250,'comic7.jpeg',NULL,3,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(33,'Vengadores #556','Tomo unico',250,'comic8.jpg',NULL,3,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(34,'Marvel #755','Tomo unico',250,'comic9.jpg',NULL,3,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(35,'Shang chi #206','Tomo unico',200,'comic10.jpg',NULL,3,'2021-09-24 17:37:10','2021-09-24 17:37:10');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20210918185041-create-category.js'),('20210918185212-create-product.js'),('20210918185556-create-user.js'),('20210918185635-create-api-heroe.js'),('20210918185737-create-order.js'),('20210918185738-create-cart.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Daniella','123123','Ansley','Lorenzo.Pfannerstill59@gmail.com',NULL,'usuario',NULL,NULL,NULL,NULL,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(2,'Graciela','123123','Lewis','Celine.Mills1@gmail.com',NULL,'usuario',NULL,NULL,NULL,NULL,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(3,'Elian','123123','Vincenzo','Jude.Hilll@gmail.com',NULL,'usuario',NULL,NULL,NULL,NULL,'2021-09-24 17:37:10','2021-09-24 17:37:10'),(6,'eze','$2a$10$cX.njauCzK9310zAdRm/POvLsG6n5bl8n24BrQ8Rumbsp0V/8XL7m','Carlos Ezequiel','bauereze@gmail.com','E.jpg','usuario',NULL,NULL,NULL,NULL,'2021-09-26 22:54:11','2021-09-26 22:54:11');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-27 17:20:21
