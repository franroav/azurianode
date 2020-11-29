-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-11-2020 a las 16:31:53
-- Versión del servidor: 10.4.11-MariaDB-log
-- Versión de PHP: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `azurian`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `my_friend`
--

CREATE TABLE `my_friend` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updateAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `gender` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `my_friend`
--

INSERT INTO `my_friend` (`id`, `name`, `createdAt`, `updateAt`, `gender`) VALUES
(1, 'Raul', '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 'male'),
(2, 'Francisca', '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 'female'),
(3, 'Sebastian', '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 'other'),
(4, 'Francisco Roa', '2020-11-28 19:31:44.062735', '2020-11-28 19:31:44.062735', 'male'),
(5, 'Christina Peralta', '2020-11-29 10:12:27.843468', '2020-11-29 10:12:51.000000', 'female');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `fullname` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updateAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `username`, `fullname`, `createdAt`, `updateAt`, `age`) VALUES
(1, 'Peldi', 'Giacamo Guilizzoni Fundador & CEO', '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 40),
(7, 'Marcs', 'Marco Botton Chef', '2020-11-04 10:31:51.908423', '2020-11-04 11:25:09.000000', 38),
(8, 'Mariah Maclachian Ayudante Cocina', 'Patata', '2020-11-04 10:32:36.837596', '2020-11-04 10:32:36.837596', 41),
(9, 'Valery Liberty Garzón', 'Val', '2020-11-04 11:11:09.105951', '2020-11-04 12:15:26.000000', 30);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `my_friend`
--
ALTER TABLE `my_friend`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_78a916df40e02a9deb1c4b75ed` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `my_friend`
--
ALTER TABLE `my_friend`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
