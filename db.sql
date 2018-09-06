# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Hôte: localhost (MySQL 5.7.21)
# Base de données: king-stock
# Temps de génération: 2018-09-05 15:43:09 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Affichage de la table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` text NOT NULL,
  `password` varchar(200) NOT NULL DEFAULT '',
  `type` int(11) DEFAULT NULL,
  `societe` text,
  `siret_duns` text,
  `adresse_facturation` int(11) DEFAULT NULL,
  `adresse_livraison` int(11) DEFAULT NULL,
  `iban` text,
  `bic` text,
  `etat` tinyint(1) DEFAULT NULL,
  `verif_email` tinyint(1) DEFAULT NULL,
  `email_token` text,
  `img_user` text,
  `tel` text,
  PRIMARY KEY (`id`),
  KEY `type` (`type`),
  KEY `adresse_facturation` (`adresse_facturation`),
  KEY `adresse_livraison` (`adresse_livraison`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`type`) REFERENCES `type_user` (`id`),
  CONSTRAINT `users_ibfk_2` FOREIGN KEY (`adresse_facturation`) REFERENCES `adresses` (`id`) ON DELETE CASCADE,
  CONSTRAINT `users_ibfk_3` FOREIGN KEY (`adresse_livraison`) REFERENCES `adresses` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
