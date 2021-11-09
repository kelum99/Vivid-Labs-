-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 20, 2020 at 08:17 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

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
-- Table structure for table `user_details`
--

CREATE TABLE `user_details` (
  `FirstName` varchar(20) NOT NULL,
  `LastName` varchar(20) NOT NULL,
  `UserName` varchar(20) NOT NULL,
  `Date` date NOT NULL,
  `MobileNumber` int(10) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Address` varchar(50) NOT NULL,
  `Password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_details`
--

INSERT INTO `user_details` (`FirstName`, `LastName`, `UserName`, `Date`, `MobileNumber`, `Email`, `Address`, `Password`) VALUES
('Kelum', 'Ayuwardhana', 'Kelumz', '2020-10-20', 774586542, 'abc@gmail.com', 'ygffui', '12345'),
('nethmi', 'attalage', 'nethmiz', '1998-08-16', 763452314, 'neth@gmail.com', 'ddrystrst', '7879'),
('inuksi', 'sena', 'inuksiz', '1999-01-18', 774563789, 'inu@gmail.com', 'thkuctdrd', '9090'),
('thanura', 'pieris', 'thanurz', '1999-04-01', 763458796, 'thanu@gmail.com', 'ydytdyr', '4567'),
('laki', 'perera', 'lakiz', '1988-10-19', 763484567, 'laki@gmail.com', 'yyugifkd', '9078');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
