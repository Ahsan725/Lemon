-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Aug 16, 2023 at 05:58 PM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `login_register`
--

-- --------------------------------------------------------

--
-- Table structure for table `test_table`
--

CREATE TABLE `test_table` (
  `full_name` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `test_table`
--

INSERT INTO `test_table` (`full_name`, `email`, `password`) VALUES
('hello', 'hello@apple.com', 'hellokitty'),
('Ahsan ', 'ahsan@123.com', '^O%rMmdf48KDG1$B'),
('Ahsan ', 'ahsan@123com', '6DvVxmbrE$r1MG2&'),
('admin', 'clientcareus@gmail.com', '0Bn#r0dmHOsQETW8'),
('admin', 'clientcareus@gmailcom', 'uUNu*6vEAOx6VRHs'),
('admin', 'clientcareus@com', 'gBlb6Zj$RZaL9K&N'),
('admin', 'clientcareus@com', '1234567'),
('', '', ''),
('', '', ''),
('', '', ''),
('test1', 'hello@hello.com', 'a8OEC$kg!0QsMx*4'),
('test1', 'hello@hello.com', 'OhRu$ENfA&7mS5Ep'),
('test2', 'hello@hello.com', 'LXHZYzrV0@LsvX1@'),
('test3', 'test3@test.com', '2$MNIVNuA@y&zfms'),
('test3', 'test3@test.com', '#Utozvtg1Q$&4DxA'),
('test6', 'test6@test.com', 'xy@WkC9awzGT'),
('test8', 'test8@test.com', 'cyberlink'),
('Ahsan', 'test@test.com', 'cyber');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
