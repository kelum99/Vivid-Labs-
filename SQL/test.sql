-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 21, 2020 at 03:31 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `payment_details`
--

CREATE TABLE `payment_details` (
  `CardName` varchar(20) NOT NULL,
  `CardNumber` bigint(20) NOT NULL,
  `CVV` int(10) NOT NULL,
  `Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payment_details`
--

INSERT INTO `payment_details` (`CardName`, `CardNumber`, `CVV`, `Date`) VALUES
('Inukshi', 1111222233334444, 123, '2020-10-31'),
('', 0, 0, '0000-00-00'),
('Inukshi', 4561789446941234, 654, '2020-10-31'),
('', 0, 0, '0000-00-00'),
('Lakindu', 12345, 123, '2020-10-30');

-- --------------------------------------------------------

--
-- Table structure for table `payment_details2`
--

CREATE TABLE `payment_details2` (
  `Name` varchar(20) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Address` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payment_details2`
--

INSERT INTO `payment_details2` (`Name`, `Email`, `Address`) VALUES
('Kelum', 'abc@gmail.com', 'colombo 7'),
('nethmi', 'fkg@gmail.com', 'Kandy'),
('', '', ''),
('', '', ''),
('Thanura', 'edf@gmail.com', 'Mathara'),
('', '', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
