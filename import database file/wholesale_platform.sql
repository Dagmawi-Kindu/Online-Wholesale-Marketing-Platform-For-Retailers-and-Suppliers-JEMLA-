-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 19, 2023 at 10:22 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wholesale_platform`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth`
--

CREATE TABLE `auth` (
  `id` varchar(36) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `middleName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `tradeLiscenceNumber` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `approval` varchar(255) NOT NULL DEFAULT 'pending',
  `phoneNumber` varchar(255) NOT NULL,
  `accountStatus` varchar(255) NOT NULL DEFAULT 'enabled',
  `tradeLiscence` text DEFAULT NULL,
  `kebeleID` text DEFAULT NULL,
  `profilePicture` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth`
--

INSERT INTO `auth` (`id`, `firstName`, `middleName`, `lastName`, `email`, `tradeLiscenceNumber`, `role`, `password`, `approval`, `phoneNumber`, `accountStatus`, `tradeLiscence`, `kebeleID`, `profilePicture`) VALUES
('022ca1fb-1752-4e89-87e2-4062a089b2e3', 'Biniyam ', 'Endeg', 'Shitae', 'bini@gmail.com', '21352352', 'supplier', '$2b$10$u9D.gwXTKv6GlCDjk6NnTO9zXGRFGNCTWbSRKCTFl0db9invljXaq', 'approved', '091122334455', 'enabled', 'tradeLiscence-1674242396337-1.jpeg', 'kebeleID-1674242396388-1.jpeg', 'profilePicture-1674242396410-1.jpeg'),
('0e5ccba0-c6b2-46e1-b553-bd7b3078b308', 'Zerihun ', 'Weldemariam ', 'Desta', 'Zedo@gmail.com', '', 'retailer', '$2b$10$/ov0YvoUlgu6OgXdYYsK1.fgwsUMMhODraCL.UXKf7p/ee6.lirs6', 'approved', '0911109559', 'enabled', 'tradeLiscence-1675235278823-1.jpeg', 'kebeleID-1675235278859-1.jpeg', 'profilePicture-1675235278871-1.jpeg'),
('2b8ca30e-0c8b-4dbe-a429-479d97f084c4', 'dave', 'tamire', 'abebe', 'dave@gmail.com', '123456', 'retailer', '$2b$10$Qg1m4dnUEKFd2hxGsFfFM.69zN5cnKMZjt8NNXhXkdX.W/9O/b6GW', 'approved', '0900000001', 'enabled', 'tradeLiscence-1674287614697-1.jpeg', 'kebeleID-1674287614727-1.jpeg', 'profilePicture-1675068696880-1.jpeg'),
('36cb08b4-4ed3-4eb3-91fd-ac78476f5dc5', 'fsd', 'fsd', 'fsd', 'dagim16Kindu@gmail.com', '', 'retailer', '$2b$10$i5lz1OAAQ/Mm40uK2Ask2eEAVn2vuEfMWNo4XkLgUSPmEGeM4YyEC', 'approved', '0909090909', 'enabled', 'tradeLiscence-1675191858699-1.jpeg', 'kebeleID-1675191858715-1.jpeg', 'profilePicture-1675191858722-1.jpeg'),
('3873c42e-d402-4ec0-b7f8-8c003e1ebcea', 'Dagmawi', 'Kindu', 'Mekonnen', 'dagim16Kindu@gmail.com', '0000000000', 'admin', '$2b$10$ksjurIwXAFZBxBkhPPLeOuDKEEUV4lJuj76iM8kwlfjJAOPOn4bQa', 'approved', '0970513180', 'enabled', 'tradeLiscence-1675190617675-1.jpeg', 'kebeleID-1675190617697-1.jpeg', 'profilePicture-1675190617706-1.jpeg'),
('466a9967-1f7a-449e-9668-3123ddd7c4f0', 'dave', 'tamire', 'abebe', 'dagim16Kindu@gmail.com', '124213', 'supplier', '$2b$10$0XhcfE6C8.s8yv7BXFjaA.4KqoezdsAWbsHDMlBGAcBO6vLlJBvJ.', 'approved', '0900000000', 'enabled', 'tradeLiscence-1674806568627-1.jpeg', 'kebeleID-1674806568699-1.jpeg', 'profilePicture-1674806568739-1.jpeg'),
('7c9ecf37-5575-41ae-aa96-0bd4182d8ffb', 'Khalid', 'Mubarek', 'Nassir', 'Khalido@gmail.com', '', 'supplier', '$2b$10$SXYKuldCvUZIOkt0OOa1LOkj6chaREeOmPS33AjasJHsEZi4Xrc7O', 'approved', '0945398592', 'enabled', 'tradeLiscence-1675235758841-1.jpeg', 'kebeleID-1675235758880-1.jpeg', 'profilePicture-1675235758890-1.jpeg'),
('dabdc6ae-8fd9-43b5-8d87-9c863a8f5996', 'Kebede', 'Lemma', 'Jemberu', 'Kebede@gmail.com', '123456789', 'supplier', '$2b$10$78vu5Rp77HWH2ed2KCNCweGd/mf.ri4wTH5bndtqmS46wMfzr05MW', 'approved', '091212121212', 'enabled', 'tradeLiscence-1672123163623-1.jpeg', 'kebeleID-1672123163652-1.jpeg', 'profilePicture-1672123163664-1.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id` varchar(36) NOT NULL,
  `companyName` varchar(255) NOT NULL,
  `region` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `mainCategory` varchar(255) NOT NULL,
  `yearCompanyRegistered` varchar(255) NOT NULL,
  `numOfEmployees` varchar(255) NOT NULL,
  `websiteURL` varchar(255) NOT NULL,
  `legalOwner` varchar(255) NOT NULL,
  `certificates` text DEFAULT NULL,
  `mainProducts1` varchar(255) NOT NULL,
  `mainProducts2` varchar(255) NOT NULL,
  `mainProducts3` varchar(255) NOT NULL,
  `otherProducts1` varchar(255) NOT NULL,
  `otherProducts2` varchar(255) NOT NULL,
  `otherProducts3` varchar(255) NOT NULL,
  `companyIntroduction` varchar(255) NOT NULL,
  `companyLogo` text DEFAULT NULL,
  `supplierID` varchar(255) NOT NULL DEFAULT 'None'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id`, `companyName`, `region`, `city`, `mainCategory`, `yearCompanyRegistered`, `numOfEmployees`, `websiteURL`, `legalOwner`, `certificates`, `mainProducts1`, `mainProducts2`, `mainProducts3`, `otherProducts1`, `otherProducts2`, `otherProducts3`, `companyIntroduction`, `companyLogo`, `supplierID`) VALUES
('1361fdb1-ca7c-45d0-b96c-0454fd8c9d76', 'dagi z', 'Addis Ababa', 'Lemi Kura', 'Chemicals & minerals', '2023-01-10', '101 - 200 People', 'gjdyrjd', 'Dagmawi Zinahbizu', 'certificates-1674288489624-1.jpeg', 'dfsg', 'jbhjkkhj', 'hjhjgv', 'guuky', 'yutf', 'tyf', 'Khalid Mubarek Trading is an Ethiopian trade company established in 2010, with head offices located in Dembel City Centre, Addis Ababa. They specialise in the import and export of different goods including coffee, oilseed, tires, stationery items, office ', 'companyLogo-1674288489641-1.jpeg', '70b8a5ba-d1d5-4332-ad30-fbb646ccd6a2'),
('86db3f42-b15b-48d4-a917-d71a7d918060', 'khalid mubarek trading', 'Addis Ababa', 'Kirkos', 'Agriculture & food beavrages', '2022-02-02', '101 - 200 People', 'https://www.tridge.com/fr/offers/PRN-05ED5C3F', 'Khalid Mubarek', 'certificates-1675235990703-1.jpeg', 'Coffee', 'Tea', 'Ethiopia Herbs and Spices', 'Construction Materials', 'Checmical and minerals', 'Electronic Materials', 'Khalid Mubarek Trading is an Ethiopian trade company established in 2010, with head offices located in Dembel City Centre, Addis Ababa. They specialise in the import and export of different goods including coffee, oilseed, tires, stationery items.', 'companyLogo-1675235990720-1.jpeg', '7c9ecf37-5575-41ae-aa96-0bd4182d8ffb'),
('d7292301-8f04-4edb-a0f3-eef01c7a9e40', 'Bini Org', 'Addis Ababa', 'Gerji', 'Electrical & Electronics', '2013-02-15', '501 - 1000 People', 'http://Bini_Org.com', 'Biniyam Endeg', 'certificates-1671990138303-1.jpeg', 'machines', 'Str', 'Ial', 'Equ', 'ipm', 'ent', 'We have the best company!', 'companyLogo-1671990138326-1.jpeg', 'dabdc6ae-8fd9-43b5-8d87-9c863a8f5996');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `id` varchar(36) NOT NULL,
  `providedFeedback` varchar(255) NOT NULL,
  `feedBackType` varchar(255) NOT NULL,
  `product_ID` varchar(36) DEFAULT NULL,
  `supplier_ID` varchar(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id`, `providedFeedback`, `feedBackType`, `product_ID`, `supplier_ID`) VALUES
('2fac06bf-b13c-4059-b917-7241561e589c', 'asafasg  afsafa asdsadasda', 'something_is_not_right', '10be8de5-40b4-4fb9-8e81-f09c3ce74623', 'dabdc6ae-8fd9-43b5-8d87-9c863a8f5996'),
('5aeb4268-e615-4969-bd9e-7096100ef498', 'abc@gmail.com', 'something_is_not_right', '10be8de5-40b4-4fb9-8e81-f09c3ce74623', 'dabdc6ae-8fd9-43b5-8d87-9c863a8f5996'),
('8caed9bc-a986-4758-a7b6-78b34133e8d2', 'asafasg  afsafa ', 'suggestion', '10be8de5-40b4-4fb9-8e81-f09c3ce74623', 'dabdc6ae-8fd9-43b5-8d87-9c863a8f5996'),
('aa6a5c7f-09ec-4c65-a4af-f80955a4c136', 'niceeeee', 'compliment', '10be8de5-40b4-4fb9-8e81-f09c3ce74623', 'dabdc6ae-8fd9-43b5-8d87-9c863a8f5996'),
('e4605d6e-8b9b-4d9e-b562-273ec5e76255', 'sdsagsdgsa', 'compliment', '0bbba650-da04-4373-ae8f-581628692988', 'dabdc6ae-8fd9-43b5-8d87-9c863a8f5996');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` varchar(36) NOT NULL,
  `title` varchar(255) NOT NULL,
  `productCategory` varchar(255) NOT NULL,
  `productDescription` varchar(255) NOT NULL,
  `costPerItem` int(11) NOT NULL,
  `minimumOrder` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `availability` varchar(255) NOT NULL,
  `productImage1` text DEFAULT NULL,
  `productImage2` text DEFAULT NULL,
  `productImage3` text DEFAULT NULL,
  `productImage4` text DEFAULT NULL,
  `secret_key` varchar(255) NOT NULL,
  `supplierName` varchar(255) NOT NULL,
  `supplierCredentials` varchar(255) NOT NULL,
  `companyID` varchar(255) NOT NULL,
  `supplier_ID` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `productCategory`, `productDescription`, `costPerItem`, `minimumOrder`, `location`, `availability`, `productImage1`, `productImage2`, `productImage3`, `productImage4`, `secret_key`, `supplierName`, `supplierCredentials`, `companyID`, `supplier_ID`) VALUES
('0bbba650-da04-4373-ae8f-581628692988', 'Interlocking Plastic PVC Laminated Wall Ceiling Panels', 'Construction & Decoration', 'Quiet and neighbor friendly fully enclosed design dramatically reduces noise levels.', 3, '2000', 'Afar, Ethiopia', 'available', 'productImage1-1674398059799-1.jpeg', 'productImage2-1674398059829-1.jpeg', 'productImage3-1674398059856-1.jpeg', 'productImage4-1674398059871-1.jpeg', 'CHASECK_TEST-2d0UzlEIQNs2lYYP03NvdpXmFEa1DkAv', 'Mr. Jefar Wendimu', 'jefar@gmail.com', 'd7292301-8f04-4edb-a0f3-eef01c7a9e40', 'dabdc6ae-8fd9-43b5-8d87-9c863a8f5996'),
('10be8de5-40b4-4fb9-8e81-f09c3ce74623', 'Spray Polyurethane Waterproof Paint Coating for Building Materials', 'Chemicals & minerals', 'Two components of epoxy resin and Hardener with Mix Ratio of 2:1, Non toxic, 100% solids, low VOC, low odor, Thin liquid easy to handle,automaticly Self-leveling & Anti-foaming, Crystal clear,high see through, yellow resistance, Excellent color stability ', 5, '100', 'Addis Ababa, Ethiopia', 'available', 'productImage1-1674401301444-1.jpeg', 'productImage2-1674401301463-1.jpeg', 'productImage3-1674401301501-1.jpeg', 'productImage4-1674401301515-1.jpeg', 'CHASECK_TEST-2d0UzlEIQNs2lYYP03NvdpXmFEa1DkAv', 'Ms. Jemila Mohammed', 'sam2013b\n', 'd7292301-8f04-4edb-a0f3-eef01c7a9e40', 'dabdc6ae-8fd9-43b5-8d87-9c863a8f5996'),
('169479a3-8e55-4871-a562-6217a5614461', 'Arabica Roasted Coffee Bean', 'Agriculture & food beavrages', 'ISO, Organic certification, Jute Bag packaging material, coffee bean, dark brown, weighs 60 kg, arabica variety', 0, '', 'Addis Ababa', 'available', 'productImage1-1675236150469-1.jpeg', 'productImage2-1675236150495-1.jpeg', 'productImage3-1675236150512-1.jpeg', 'productImage4-1675236150531-1.jpeg', 'CHAPUBK_TEST-CdjIhAdI7bK2K46t76pIEJl4KTl9ovjM', 'Mr.Khalid Mubarek', 'Omenization', '86db3f42-b15b-48d4-a917-d71a7d918060', '7c9ecf37-5575-41ae-aa96-0bd4182d8ffb'),
('4b2b3b3c-29b8-4156-95fd-9664535f40f0', 'Good Quality Dehydrated Garlic Granules (8-16 mesh)', 'Agriculture & food beavrages', 'High quality, normal, clean, aluminum water pump 2\" 3\" 4\",aluminum high pressure water pump 1.5\" 2\" 3\"', 30, '10', 'Bahir Dar, Ethiopia', 'available', 'productImage1-1674394957096-1.jpeg', 'productImage2-1674394957134-1.jpeg', 'productImage3-1674394957151-1.jpeg', 'productImage4-1674394957175-1.jpeg', 'CHASECK_TEST-2d0UzlEIQNs2lYYP03NvdpXmFEa1DkAv', 'Mr. Shewangizaw Bekele', '0997112345', 'd7292301-8f04-4edb-a0f3-eef01c7a9e40', 'dabdc6ae-8fd9-43b5-8d87-9c863a8f5996'),
('4d9224d2-b52a-4e4a-be73-8a56a816db88', 'S11-200kVA Electric Distribution Transformer with off-Circuit Tap Changer', 'Electrical & Electronics', 'Quality assurance for direct supply of key materials, Corrugated type tank: automatic, welding, zero leakage rate, strong corrosion resistance, Positioning device for active-part: free core suspending, maintenance-free, safe and reliable, Dedicated automa', 460000, '1', 'Arba Minch, Ethiopia', 'available', 'productImage1-1674416798065-1.jpeg', 'productImage2-1674416798085-1.jpeg', 'productImage3-1674416798102-1.jpeg', 'productImage4-1674416798121-1.jpeg', 'CHASECK_TEST-2d0UzlEIQNs2lYYP03NvdpXmFEa1DkAv', 'Ms. Biritu Meshesha', 'Omenization', 'd7292301-8f04-4edb-a0f3-eef01c7a9e40', 'dabdc6ae-8fd9-43b5-8d87-9c863a8f5996'),
('554ce444-5822-430e-9e8e-c7a612f2d775', '423cfm 7bar Diesel Movable Screw Air Compressor for Stone Drilling Machine', 'Industrial Equipment & Components', 'Installation type: Movable Type, Skfbearing, closed type structure, single screw compressor, direct driven', 600000, '1', 'Hawassa, Ethiopia', 'available', 'productImage1-1674417630207-1.jpeg', 'productImage2-1674417630230-1.jpeg', 'productImage3-1674417630245-1.jpeg', 'productImage4-1674417630261-1.jpeg', 'CHASECK_TEST-2d0UzlEIQNs2lYYP03NvdpXmFEa1DkAv', 'Mr. Mengesha', 'menge@gmail.com', 'd7292301-8f04-4edb-a0f3-eef01c7a9e40', 'dabdc6ae-8fd9-43b5-8d87-9c863a8f5996'),
('68accbab-8a7c-4c6c-ad83-2d65162b8314', 'Automatic Cloth Washing Film Filter Press/Industrial Filter Press', 'Industrial Equipment & Components', 'Cantilever Beam Type,PE/PP filter material, mechanical pressure, Plate filter press, water purification system', 2000000, '1', 'Bale, Ethiopia', 'available', 'productImage1-1674418131734-1.jpeg', 'productImage2-1674418131754-1.jpeg', 'productImage3-1674418131771-1.jpeg', 'productImage4-1674418131788-1.jpeg', 'CHASECK_TEST-2d0UzlEIQNs2lYYP03NvdpXmFEa1DkAv', 'Mr. Teferi Alemu', 'menge@gmail.com', 'd7292301-8f04-4edb-a0f3-eef01c7a9e40', 'dabdc6ae-8fd9-43b5-8d87-9c863a8f5996'),
('6fa6e235-c87f-4dc3-b7fa-247bbaad87e1', 'Carton Indoor Garbon China Ceiling PVC Wood Wall Plastic Panel TV Background ', 'Construction & Decoration', 'The look and feel of natural wood, 100% recyclable, environmentally friendly, UV resistance and color stability, Good weather resistance, suitable for -40°C to 60°C, Waterproof and corrosion resistant, Insect-free and mildew-proof, No cracking, warping an', 8000, '1', 'Gambella, Ethiopia', 'available', 'productImage1-1674399280073-1.jpeg', 'productImage2-1674399280091-1.jpeg', 'productImage3-1674399280109-1.jpeg', 'productImage4-1674399280132-1.jpeg', 'CHASECK_TEST-2d0UzlEIQNs2lYYP03NvdpXmFEa1DkAv', 'Mr. Degefa Birru', 'degefa@gmail.com', 'd7292301-8f04-4edb-a0f3-eef01c7a9e40', 'dabdc6ae-8fd9-43b5-8d87-9c863a8f5996'),
('9a4727b2-1aa5-486e-82be-a9dc1f7dfaf2', 'OEM Wholesalers Oriental Snack Mix Ovaltine Snack', 'Agriculture & food beavrages', 'Clean surface, no insect pest, no stain, no sprout, no rotten, no mouldy, no pesticide thin skin, complete body, bright color and luster, Raw carrots are 88% water, 9% carbohydrates, 0.9% protein, 2.8% dietary fiber, 1% ash and 0.2% fat. Carrot dietary fi', 2, '15000', 'Gojam, Ethiopia', 'available', 'productImage1-1674395874054-1.jpeg', 'productImage2-1674395874078-1.jpeg', 'productImage3-1674395874105-1.jpeg', 'productImage4-1674395874119-1.jpeg', 'CHASECK_TEST-2d0UzlEIQNs2lYYP03NvdpXmFEa1DkAv', 'Mr. Arega Shimelis', 'abc@gmail.com', 'd7292301-8f04-4edb-a0f3-eef01c7a9e40', 'dabdc6ae-8fd9-43b5-8d87-9c863a8f5996'),
('baebef32-9c30-49cc-a00a-095900b13320', '900 Ton Energy Saving High Pressure Cold Chamber Die Casting Machine', 'Manufacturing & Processing Machinery', 'Tolerance grade 4, automatic grade, Auto Casting Parts, 5g Casting Parts,horizontal pressure chamber structure, precision die casting', 500000, '1', 'Mekele, Ethiopia', 'available', 'productImage1-1674415277958-1.jpeg', 'productImage2-1674415277991-1.jpeg', 'productImage3-1674415278014-1.jpeg', 'productImage4-1674415278036-1.jpeg', 'CHASECK_TEST-2d0UzlEIQNs2lYYP03NvdpXmFEa1DkAv', 'Mr. Assefa', 'assefa@gmail.com', 'd7292301-8f04-4edb-a0f3-eef01c7a9e40', 'dabdc6ae-8fd9-43b5-8d87-9c863a8f5996'),
('be3b1924-3bb6-4f49-a1f3-bf6fc9c7496a', 'ABBEE', 'Manufacturing & Processing Machinery', 'asf', 112, '3', 'fsfsd', 'available', 'productImage1-1674465778127-1.jpeg', 'productImage2-1674465778149-1.jpeg', 'productImage3-1674465778188-1.jpeg', 'productImage4-1674465778214-1.jpeg', 'gdsgds', 'gsdgs', 'gsgsd', 'd7292301-8f04-4edb-a0f3-eef01c7a9e40', 'dabdc6ae-8fd9-43b5-8d87-9c863a8f5996'),
('c16cbd7b-334a-49d9-b356-aa603963d997', 'Matcha Green Tea Powder 100% Pure Matcha Hot Sale Food Drink Healthy Diet Food for Low -Fat', 'Agriculture & food beavrages', 'Green Tea, new, steamed, Health Tea, Organic Tea, Bag, Bottle, Box', 2, '200', 'Jima, Ethiopia', 'available', 'productImage1-1674397045925-1.jpeg', 'productImage2-1674397045945-1.jpeg', 'productImage3-1674397045966-1.jpeg', 'productImage4-1674397045984-1.jpeg', 'CHASECK_TEST-2d0UzlEIQNs2lYYP03NvdpXmFEa1DkAv', 'Ms. Almaz Birhane', 'almaz@gmail.com', 'd7292301-8f04-4edb-a0f3-eef01c7a9e40', 'dabdc6ae-8fd9-43b5-8d87-9c863a8f5996'),
('c44a890d-9685-4389-a4a7-3d2485b05ff5', 'Acrylic Coating High Elastic Waterproofing Coating for Building', 'Chemicals & minerals', 'High Flexible and excellent waterproof effect, Anti - shock, anti - corrosion and anti - rust, High and low temperature resistance, Strong adhesion with roofs, Non-toxic, harmless, eco-friendly products, Easy construction and wide application.', 2, '1000', 'Arba Minch, Ethiopia', 'available', 'productImage1-1674402747289-1.jpeg', 'productImage2-1674402747313-1.jpeg', 'productImage3-1674402747330-1.jpeg', 'productImage4-1674402747350-1.jpeg', 'CHASECK_TEST-2d0UzlEIQNs2lYYP03NvdpXmFEa1DkAv', 'Ms. Aster Melese', 'aster@gmail.com', 'd7292301-8f04-4edb-a0f3-eef01c7a9e40', 'dabdc6ae-8fd9-43b5-8d87-9c863a8f5996'),
('ddc6ff7e-ae45-49f5-88a9-27aa16fcbd36', '3-5t/H Poultry Animal Chicken Feed Pellet Machine Feed Processing Machine', 'Manufacturing & Processing Machinery', 'SCE offers 10kVA to 20000kVA with a maximum voltage of 35KV power and distribution transformers for industrial and commercial applications. SCE\'s Oil-filled transformers are manufactured in accordance with the domestic and international standards.', 300000, '1', 'Sululta, Ethiopia', 'available', 'productImage1-1674415825338-1.jpeg', 'productImage2-1674415825357-1.jpeg', 'productImage3-1674415825374-1.jpeg', 'productImage4-1674415825389-1.jpeg', 'CHASECK_TEST-2d0UzlEIQNs2lYYP03NvdpXmFEa1DkAv', 'Mr. Nafyad', 'nafyad@gmail.com', 'd7292301-8f04-4edb-a0f3-eef01c7a9e40', 'dabdc6ae-8fd9-43b5-8d87-9c863a8f5996'),
('f0fde616-fe3f-4a66-8921-0105106d89d6', '12 Fibers Sc/APC 9/125 Single Mode Bunch Fiber Optic/Optical Pigtail', 'Electrical & Electronics', 'Stimulated By 5G Network Construction, Exporting Busniess In HX Grows Rapidly. At Present, Over 6 Containers Cargo Includes FO Cables, Connectors And Devices Were Exported To Europe, LATAM, SEA At Daily Basis', 1500, '2', 'Arba Minch, Ethiopia', 'available', 'productImage1-1674416230968-1.jpeg', 'productImage2-1674416230986-1.jpeg', 'productImage3-1674416231002-1.jpeg', 'productImage4-1674416231019-1.jpeg', 'CHASECK_TEST-2d0UzlEIQNs2lYYP03NvdpXmFEa1DkAv', 'Mr. Ketema Birru', 'ketema@gmail.com', 'd7292301-8f04-4edb-a0f3-eef01c7a9e40', 'dabdc6ae-8fd9-43b5-8d87-9c863a8f5996'),
('f1b4249b-c1cd-4b41-85a4-46022a0649e5', 'Porcelain Wood Plank Rustic Ceramic Tile for Floor and Wall', 'Construction & Decoration', 'High quality normal clean aluminum water pump 2\" 3\" 4\",aluminum high pressure water pump 1.5\" 2\" 3\"', 5, '300', 'Mekele, Ethiopia', 'available', 'productImage1-1674397535468-1.jpeg', 'productImage2-1674397535490-1.jpeg', 'productImage3-1674397535510-1.jpeg', 'productImage4-1674397535531-1.jpeg', 'CHASECK_TEST-2d0UzlEIQNs2lYYP03NvdpXmFEa1DkAv', 'Ms. Teklu Shiferaw', 'teklu@gmail.com', 'd7292301-8f04-4edb-a0f3-eef01c7a9e40', 'dabdc6ae-8fd9-43b5-8d87-9c863a8f5996');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_2bb8f13a84174151fb182d67251` (`product_ID`),
  ADD KEY `FK_f6052e436b7266f30b652e3b1f4` (`supplier_ID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `FK_2bb8f13a84174151fb182d67251` FOREIGN KEY (`product_ID`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_f6052e436b7266f30b652e3b1f4` FOREIGN KEY (`supplier_ID`) REFERENCES `auth` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
