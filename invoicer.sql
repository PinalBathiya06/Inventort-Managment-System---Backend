-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 21, 2024 at 11:02 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `invoicer`
--

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `client_details` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`client_details`)),
  `invoice_dt` datetime DEFAULT NULL,
  `item_details` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`item_details`)),
  `total` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `invoices`
--

INSERT INTO `invoices` (`id`, `user_id`, `client_details`, `invoice_dt`, `item_details`, `total`, `createdAt`, `updatedAt`, `product_id`) VALUES
(110, 40, '{\"name\":\"dads\",\"address\":\"sfsd\",\"email\":\"sdfsd\",\"contact\":\"35555\"}', '2024-04-21 08:12:07', '[]', 0, '2024-04-21 08:12:07', '2024-04-21 08:12:07', NULL),
(111, 40, '{\"name\":\"sad\",\"address\":\"dfds\",\"email\":\"dsfsdf\",\"contact\":\"2556\"}', '2024-04-21 08:13:28', '[{\"description\":\"sadds\",\"qty\":\"222\",\"price\":\"222\",\"status\":0}]', 49284, '2024-04-21 08:13:28', '2024-04-21 08:13:28', NULL),
(112, 40, '{\"name\":\"asdsad\",\"address\":\"asfsd\",\"email\":\"dsfds\",\"contact\":\"2555\"}', '2024-04-21 08:14:14', '[{\"description\":\"asdsd\",\"qty\":\"522\",\"price\":\"222\",\"status\":0}]', 115884, '2024-04-21 08:14:14', '2024-04-21 08:14:14', NULL),
(113, 40, '{\"name\":\"asdsa\",\"address\":\"dsfsda\",\"email\":\"asdsa\",\"contact\":\"222\"}', '2024-04-21 08:15:50', '[{\"description\":\"sd\",\"qty\":\"222\",\"price\":\"22\",\"status\":0}]', 4884, '2024-04-21 08:15:50', '2024-04-21 08:15:50', NULL),
(114, 40, '{\"name\":\"asdsa\",\"address\":\"dsfsda\",\"email\":\"asdsa\",\"contact\":\"222\"}', '2024-04-21 08:15:53', '[{\"description\":\"sd\",\"qty\":\"222\",\"price\":\"22\",\"status\":0}]', 4884, '2024-04-21 08:15:53', '2024-04-21 08:15:53', NULL),
(115, 40, '{\"name\":\"sdds\",\"address\":\"asddsa\",\"email\":\"sadsd\",\"contact\":\"522\"}', '2024-04-21 08:17:11', '[{\"description\":\"sad\",\"qty\":\"22\",\"price\":\"22\",\"status\":0}]', 484, '2024-04-21 08:17:11', '2024-04-21 08:17:11', NULL),
(116, 40, '{\"name\":\"SXSAX\",\"address\":\"ZXCC\",\"email\":\"ZXCC\",\"contact\":\"222\"}', '2024-04-21 08:17:54', '[{\"description\":\"SDSC\",\"qty\":\"222\",\"price\":\"22\",\"status\":0}]', 4884, '2024-04-21 08:17:54', '2024-04-21 08:17:54', NULL),
(117, 40, '{\"name\":\"asdsad\",\"address\":\"sdsd\",\"email\":\"sdas\",\"contact\":\"522\"}', '2024-04-21 08:19:38', '[{\"description\":\"asdsd\",\"qty\":\"222\",\"price\":\"22\",\"status\":0}]', 4884, '2024-04-21 08:19:38', '2024-04-21 08:19:38', NULL),
(118, 40, '{\"name\":\"Pinal\",\"address\":\"Jamnagar\",\"email\":\"pinal@gmail.com\",\"contact\":\"123456\"}', '2024-04-21 08:22:50', '[{\"description\":\"asdasd\",\"qty\":\"552\",\"price\":\"222\",\"status\":0}]', 122544, '2024-04-21 08:22:50', '2024-04-21 08:22:50', NULL),
(119, 40, '{\"name\":\"Pinal\",\"address\":\"Jamnagar\",\"email\":\"pinal@gmail.com\",\"contact\":\"123456\"}', '2024-04-21 08:22:53', '[{\"description\":\"asdasd\",\"qty\":\"552\",\"price\":\"222\",\"status\":0}]', 122544, '2024-04-21 08:22:53', '2024-04-21 08:22:53', NULL),
(120, 40, '{\"name\":\"asd\",\"address\":\"sadsa\",\"email\":\"sfsdf\",\"contact\":\"222\"}', '2024-04-21 08:23:40', '[{\"description\":\"sdsdf\",\"qty\":\"22\",\"price\":\"22\",\"status\":0}]', 484, '2024-04-21 08:23:40', '2024-04-21 08:23:40', NULL),
(121, 40, '{\"name\":\"asd\",\"address\":\"as\",\"email\":\"safa\",\"contact\":\"522\"}', '2024-04-21 08:24:52', '[{\"description\":\"asdsa\",\"qty\":\"222\",\"price\":\"222\",\"status\":0}]', 49284, '2024-04-21 08:24:52', '2024-04-21 08:24:52', NULL),
(122, 40, '{\"name\":\"sadsa\",\"address\":\"sadsad\",\"email\":\"asds\",\"contact\":\"522\"}', '2024-04-21 08:25:47', '[{\"description\":\"dsc\",\"qty\":\"222\",\"price\":\"222\",\"status\":0}]', 49284, '2024-04-21 08:25:47', '2024-04-21 08:25:47', NULL),
(123, 40, '{\"name\":\"asdsa\",\"address\":\"asfsd\",\"email\":\"dsfsd\",\"contact\":\"222\"}', '2024-04-21 08:26:17', '[{\"description\":\"asdsa\",\"qty\":\"22\",\"price\":\"22\",\"status\":0}]', 484, '2024-04-21 08:26:17', '2024-04-21 08:26:17', NULL),
(124, 40, '{\"name\":\"Anila\",\"address\":\"Jamnagar\",\"email\":\"anila@gmail.com\",\"contact\":\"9944222117\"}', '2024-04-21 08:38:15', '[{\"description\":\"toys\",\"qty\":\"40\",\"price\":\"500\",\"status\":0}]', 20000, '2024-04-21 08:38:15', '2024-04-21 08:38:15', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `description` text NOT NULL,
  `qty` int(11) NOT NULL,
  `price` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `description`, `qty`, `price`, `createdAt`, `updatedAt`) VALUES
(1, '', 0, 0, '2024-04-16 09:43:55', '2024-04-16 09:43:55'),
(2, '', 0, 0, '2024-04-16 09:43:56', '2024-04-16 09:43:56'),
(3, 'toy', 20, 500, '2024-04-17 16:51:27', '2024-04-17 16:54:21'),
(4, 'tot', 50, 200, '2024-04-17 16:51:28', '2024-04-17 16:51:28'),
(5, 'tot', 50, 200, '2024-04-17 16:51:29', '2024-04-17 16:51:29'),
(6, 'a toy', 5, 20, '2024-04-17 16:52:47', '2024-04-17 16:52:47'),
(7, 'a toy', 5, 200, '2024-04-17 16:53:04', '2024-04-17 16:53:04'),
(8, '', 0, 0, '2024-04-18 10:15:25', '2024-04-18 10:15:25'),
(9, '', 0, 0, '2024-04-18 10:15:26', '2024-04-18 10:15:26'),
(10, 'doll', 10, 500, '2024-04-21 05:25:36', '2024-04-21 05:25:36'),
(11, 'doll', 10, 500, '2024-04-21 05:25:38', '2024-04-21 05:25:38'),
(12, 'doll', 10, 500, '2024-04-21 05:25:40', '2024-04-21 05:25:40');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `normal_password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `address`, `email`, `contact`, `password`, `normal_password`, `createdAt`, `updatedAt`) VALUES
(26, NULL, NULL, NULL, NULL, NULL, NULL, '2024-04-19 09:41:46', '2024-04-19 09:41:46'),
(27, NULL, NULL, NULL, NULL, NULL, NULL, '2024-04-19 09:41:46', '2024-04-19 09:41:46'),
(28, NULL, NULL, NULL, NULL, NULL, NULL, '2024-04-19 09:43:08', '2024-04-19 09:43:08'),
(29, NULL, NULL, NULL, NULL, NULL, NULL, '2024-04-19 09:43:10', '2024-04-19 09:43:10'),
(30, NULL, NULL, NULL, NULL, NULL, NULL, '2024-04-19 09:43:11', '2024-04-19 09:43:11'),
(31, NULL, NULL, NULL, NULL, NULL, NULL, '2024-04-19 09:43:11', '2024-04-19 09:43:11'),
(32, NULL, NULL, NULL, NULL, NULL, NULL, '2024-04-19 09:46:08', '2024-04-19 09:46:08'),
(33, NULL, NULL, NULL, NULL, NULL, NULL, '2024-04-19 09:48:12', '2024-04-19 09:48:12'),
(34, 'dasnkd', 'mlfmlf', 'fksfms', '2323', 'dlefm', 'dlefm', '2024-04-19 09:48:43', '2024-04-19 09:48:43'),
(35, NULL, NULL, NULL, NULL, NULL, NULL, '2024-04-19 09:49:22', '2024-04-19 09:49:22'),
(36, '', '', '', '', '', '', '2024-04-19 09:50:15', '2024-04-19 09:50:15'),
(37, '', '', '', '', '', '', '2024-04-19 09:50:21', '2024-04-19 09:50:21'),
(38, '', '', '', '', '', '', '2024-04-19 09:51:40', '2024-04-19 09:51:40'),
(39, 'Pinall', 'jamnagarr', 'pinall@gmail.com', '942664455', 'pinu', 'pinu', '2024-04-20 17:23:02', '2024-04-20 17:23:02'),
(40, 'abc', 'jam', 'abc@gmail.com', '9475555414', 'ceb6c970658f31504a901b89dcd3e461', 'test@123', '2024-04-21 05:02:31', '2024-04-21 05:02:31'),
(41, 'Reetu', '58 Digvijay Plot', 'reetu@gmail.com', '1234567890', '2a350f0af5ef4cab56e720ae79c577e3', 'reetu', '2024-04-21 05:24:09', '2024-04-21 05:24:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=125;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `invoices`
--
ALTER TABLE `invoices`
  ADD CONSTRAINT `invoices_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `invoices_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
