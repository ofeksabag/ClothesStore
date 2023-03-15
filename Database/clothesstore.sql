-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2023 at 11:27 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clothesstore`
--
CREATE DATABASE IF NOT EXISTS `clothesstore` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `clothesstore`;

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `brandId` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`brandId`, `name`) VALUES
(1, 'Adidas'),
(2, 'Off White'),
(3, 'Aldo Moro'),
(4, 'Alo Yoga'),
(5, 'Armani'),
(6, 'Armani Exchange'),
(7, 'Balr'),
(8, 'Barrow'),
(9, 'Bulgari'),
(10, 'Burberry'),
(11, 'Gant'),
(12, 'Gucci'),
(13, 'Goorin'),
(14, 'Guess'),
(15, 'Dolce & Gabbana'),
(16, 'Dr. Martens'),
(17, 'Diesel'),
(18, 'Dsquared2'),
(19, 'Ugg'),
(20, 'Hugo'),
(21, 'Hugo Boss'),
(22, 'Havaianas'),
(23, 'Vans'),
(24, 'Vogue'),
(25, 'Versace'),
(26, 'Tommy Hilfiger'),
(27, 'Timberland'),
(28, 'Levis'),
(29, 'Lacoste'),
(30, 'Moschino'),
(31, 'Michael Kors'),
(32, 'Nautica'),
(33, 'Nike'),
(34, 'Steve Madden'),
(35, 'Palm Angels'),
(36, 'Paul & Shark'),
(37, 'Polo Ralph Lauren'),
(38, 'Palladium'),
(39, 'Phillip Plein'),
(40, 'Plein Sport'),
(41, 'Prada'),
(42, 'Prada Sport'),
(43, 'Fred Perry'),
(44, 'The North Face'),
(45, 'Replay'),
(46, 'Colombia'),
(47, 'Converse'),
(48, 'Calvin Klein'),
(49, 'Kenzo'),
(50, 'Karl Lagerfeld'),
(51, 'Ralph Lauren'),
(52, 'Ainker'),
(53, 'Amiri'),
(54, 'Alexander McQueen'),
(55, 'Balenciaga'),
(56, 'Balmain'),
(57, 'Defend'),
(58, 'Dior'),
(59, 'Fendi'),
(60, 'GCDS'),
(61, 'Givenchy'),
(62, 'Golden Goose'),
(63, 'Heron Preston'),
(64, 'Moncler'),
(65, 'P448'),
(66, 'Valentino'),
(67, 'Channel'),
(68, 'Louis Vuitton');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cartId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`cartId`, `userId`, `date`) VALUES
(2, 4, '2023-03-16');

-- --------------------------------------------------------

--
-- Table structure for table `cartitems`
--

CREATE TABLE `cartitems` (
  `itemId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `cartId` int(11) NOT NULL,
  `amount` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cartitems`
--

INSERT INTO `cartitems` (`itemId`, `productId`, `cartId`, `amount`) VALUES
(10, 3, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `categoryId` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`categoryId`, `name`) VALUES
(1, 'men'),
(2, 'women'),
(3, 'boys'),
(4, 'girls');

-- --------------------------------------------------------

--
-- Table structure for table `discounts`
--

CREATE TABLE `discounts` (
  `discountId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `discount` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `discounts`
--

INSERT INTO `discounts` (`discountId`, `productId`, `discount`) VALUES
(1, 3, 10);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `cartId` int(11) NOT NULL,
  `totalPrice` decimal(5,2) NOT NULL,
  `city` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `house` int(4) NOT NULL,
  `zipcode` int(10) NOT NULL,
  `orderDate` date NOT NULL,
  `lastDigits` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`orderId`, `userId`, `cartId`, `totalPrice`, `city`, `address`, `house`, `zipcode`, `orderDate`, `lastDigits`) VALUES
(2, 4, 2, '50.00', 'tel aviv', 'sumsum 5', 1, 88372, '2023-03-16', 9948);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productId` int(11) NOT NULL,
  `brandId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `subcategoryId` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(300) NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `imageUrl` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productId`, `brandId`, `categoryId`, `subcategoryId`, `name`, `description`, `price`, `imageUrl`) VALUES
(3, 2, 1, 3, 'Test', 'This is test', '5.00', 'bb7e2f6b-5fd6-4f5c-b521-c8b8fd68bfe4.JPG');

-- --------------------------------------------------------

--
-- Table structure for table `subcategory`
--

CREATE TABLE `subcategory` (
  `subcategoryId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subcategory`
--

INSERT INTO `subcategory` (`subcategoryId`, `categoryId`, `name`) VALUES
(1, 1, 'Coats and Jackets'),
(2, 1, 'Formal Jackets'),
(3, 1, 'Knitwear'),
(4, 1, 'Sweatshirts'),
(5, 1, 'T-Shirts'),
(6, 1, 'Shirts'),
(7, 1, 'Denim'),
(8, 1, 'Pants'),
(9, 1, 'Shorts'),
(10, 1, 'Swimwear'),
(11, 1, 'Underwear & Socks'),
(12, 1, 'Active tops'),
(13, 1, 'Active bottoms'),
(14, 1, 'Skiwear'),
(15, 1, 'Sneakers'),
(16, 1, 'Boots'),
(17, 1, 'Formal shoes'),
(18, 1, 'Clogs'),
(19, 1, 'Slides'),
(20, 1, 'Backpacks'),
(21, 1, 'Clutches and Belts bags'),
(22, 1, 'Travel bags'),
(23, 1, 'Shoulder Bags'),
(24, 1, 'Wallets & Cardholders'),
(25, 1, 'Soft accessories'),
(26, 1, 'Belts'),
(27, 1, 'Technology items'),
(28, 1, 'Other accessories'),
(29, 1, 'Earrings'),
(30, 1, 'Necklaces'),
(31, 1, 'Rings'),
(32, 1, 'Bracelets'),
(33, 2, 'Coats and Jackets'),
(34, 2, 'Blazers'),
(35, 2, 'Leather'),
(36, 2, 'Knitwear'),
(37, 2, 'Sweatshirts'),
(38, 2, 'T-shirt & Tops'),
(39, 2, 'Shirts'),
(40, 2, 'Dresses'),
(41, 2, 'Denim'),
(42, 2, 'Pants'),
(43, 2, 'Skirts'),
(44, 2, 'Shorts'),
(45, 2, 'Swimwear'),
(46, 2, 'Underwear & Socks'),
(47, 2, 'Active tops'),
(48, 2, 'Active bottoms'),
(49, 2, 'Skiwear'),
(50, 2, 'Sneakers'),
(51, 2, 'Boots'),
(52, 2, 'Mules & Pumps'),
(53, 2, 'Lace up & Loafers'),
(54, 2, 'Sandals'),
(55, 2, 'Slides & Espadrilles'),
(56, 2, 'Shoulder Bags'),
(57, 2, 'Tote bags'),
(58, 2, 'Top handle bags'),
(59, 2, 'Clutches and Pouches'),
(60, 2, 'Mini bags'),
(61, 2, 'Wallet & Cardholders'),
(62, 2, 'Soft accessories'),
(63, 2, 'Belts'),
(64, 2, 'Technology items'),
(65, 2, 'Other accessories'),
(66, 2, 'Earrings'),
(67, 2, 'Necklaces'),
(68, 2, 'Rings'),
(69, 2, 'Bracelets'),
(70, 3, 'Boy Clothing'),
(71, 3, 'Boy Shoes'),
(72, 3, 'Boy Accessories'),
(73, 4, 'Girl Clothing'),
(74, 4, 'Girl Shoes'),
(75, 4, 'Girl Accessories');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(256) NOT NULL,
  `role` int(1) NOT NULL,
  `city` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `house` int(4) NOT NULL,
  `zipcode` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `firstName`, `lastName`, `email`, `password`, `role`, `city`, `address`, `house`, `zipcode`) VALUES
(4, 'Menashe', 'Kadishman', 'admin@gmail.com', 'e5a90c351f38ff167d226e1a64797f935baf5efdc6d2ae6af2bf916b71a8719064c76b287c8ee2c7c28531c6737f73ac64d7b3ad5ca53b9f8e96d5de388e883b', 3, 'Tel Aviv', 'Sesame street', 1, 88473647);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`brandId`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cartId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `cartitems`
--
ALTER TABLE `cartitems`
  ADD PRIMARY KEY (`itemId`),
  ADD KEY `productId` (`productId`),
  ADD KEY `cartId` (`cartId`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`categoryId`);

--
-- Indexes for table `discounts`
--
ALTER TABLE `discounts`
  ADD PRIMARY KEY (`discountId`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`),
  ADD KEY `userId` (`userId`),
  ADD KEY `cartId` (`cartId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productId`),
  ADD KEY `brandId` (`brandId`),
  ADD KEY `subcategoryId` (`subcategoryId`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `subcategory`
--
ALTER TABLE `subcategory`
  ADD PRIMARY KEY (`subcategoryId`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `brandId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cartId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `cartitems`
--
ALTER TABLE `cartitems`
  MODIFY `itemId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `categoryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `discounts`
--
ALTER TABLE `discounts`
  MODIFY `discountId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `subcategory`
--
ALTER TABLE `subcategory`
  MODIFY `subcategoryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`);

--
-- Constraints for table `cartitems`
--
ALTER TABLE `cartitems`
  ADD CONSTRAINT `cartitems_ibfk_1` FOREIGN KEY (`cartId`) REFERENCES `cart` (`cartId`),
  ADD CONSTRAINT `cartitems_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`productId`);

--
-- Constraints for table `discounts`
--
ALTER TABLE `discounts`
  ADD CONSTRAINT `discounts_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`productId`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`cartId`) REFERENCES `cart` (`cartId`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `category` (`categoryId`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`brandId`) REFERENCES `brands` (`brandId`),
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`subcategoryId`) REFERENCES `subcategory` (`subcategoryId`);

--
-- Constraints for table `subcategory`
--
ALTER TABLE `subcategory`
  ADD CONSTRAINT `subcategory_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `category` (`categoryId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
