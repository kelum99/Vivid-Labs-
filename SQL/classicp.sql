-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 21, 2020 at 03:12 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eventbooking`
--

-- --------------------------------------------------------

--
-- Table structure for table `classicp`
--

CREATE TABLE `classicp` (
  `locationv` varchar(200) NOT NULL,
  `nicv` varchar(12) NOT NULL,
  `enamev` varchar(200) NOT NULL,
  `evtimev` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `classicp`
--

INSERT INTO `classicp` (`locationv`, `nicv`, `enamev`, `evtimev`) VALUES
('', '', '', '0000-00-00'),
('', '', '', '0000-00-00'),
('', '', '', '0000-00-00'),
('', '', '', '0000-00-00'),
('', '', '', '0000-00-00'),
('', '', '', '0000-00-00'),
('', '', '', '0000-00-00'),
('', '', '', '0000-00-00'),
('', '', '', '0000-00-00'),
('', '', '', '0000-00-00'),
('', '', '', '0000-00-00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
