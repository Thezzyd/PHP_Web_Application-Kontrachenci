-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 17 Sty 2021, 23:22
-- Wersja serwera: 10.1.28-MariaDB
-- Wersja PHP: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `kontrahenci`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `adres`
--

CREATE TABLE `adres` (
  `Id_adresu` int(10) NOT NULL,
  `Id_kontrahenta` int(10) NOT NULL,
  `Rodzaj` set('Siedziba_glowna','Oddzial') COLLATE utf8_polish_ci NOT NULL,
  `Ulica` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `Miejscowosc` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `Nr_budynku` varchar(10) COLLATE utf8_polish_ci NOT NULL,
  `Nr_lokalu` varchar(10) COLLATE utf8_polish_ci NOT NULL,
  `Kod_pocztowy` varchar(10) COLLATE utf8_polish_ci NOT NULL,
  `Gmina` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `Powiat` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `Wojewodztwo` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `Kraj` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `Nr_telefonu` varchar(11) COLLATE utf8_polish_ci NOT NULL,
  `Email` varchar(255) COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `adres`
--

INSERT INTO `adres` (`Id_adresu`, `Id_kontrahenta`, `Rodzaj`, `Ulica`, `Miejscowosc`, `Nr_budynku`, `Nr_lokalu`, `Kod_pocztowy`, `Gmina`, `Powiat`, `Wojewodztwo`, `Kraj`, `Nr_telefonu`, `Email`) VALUES
(42, 31, 'Siedziba_glowna', 'ZboÅ¼owa', 'tak', '1', '1', '35-205', 'tak', 'tak', 'tak', 'Polskaaa', '1212121212', 'rrr@gmail.com');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `adres-osoba_kontaktowa`
--

CREATE TABLE `adres-osoba_kontaktowa` (
  `Id_adresu` int(10) NOT NULL,
  `Id_osoby_kontaktowej` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `adres-osoba_kontaktowa`
--

INSERT INTO `adres-osoba_kontaktowa` (`Id_adresu`, `Id_osoby_kontaktowej`) VALUES
(42, 1),
(42, 22);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `kontrahent`
--

CREATE TABLE `kontrahent` (
  `Id_kontrahenta` int(10) NOT NULL,
  `Nazwa` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `NIP` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `Typ_kontrahenta` set('Dostawca','Odbiorca') COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `kontrahent`
--

INSERT INTO `kontrahent` (`Id_kontrahenta`, `Nazwa`, `NIP`, `Typ_kontrahenta`) VALUES
(31, 'Polimex Mostostal', '2223222232', 'Odbiorca'),
(35, 'StaszekCompany', '2147483647', 'Dostawca'),
(36, 'Nowy Kontrahent', '1231231231', 'Dostawca'),
(39, 'Kowalski Holdings plc.', '1231231239', 'Dostawca');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `osoba_kontaktowa`
--

CREATE TABLE `osoba_kontaktowa` (
  `Id_osoby_kontaktowej` int(10) NOT NULL,
  `Id_stanowiska` int(10) NOT NULL,
  `Imie` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `Nazwisko` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `Nr_telefonu` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `Email` varchar(255) COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `osoba_kontaktowa`
--

INSERT INTO `osoba_kontaktowa` (`Id_osoby_kontaktowej`, `Id_stanowiska`, `Imie`, `Nazwisko`, `Nr_telefonu`, `Email`) VALUES
(1, 2, 'Mariusz', 'Szenek', '123123123', 'ff@gmail.com'),
(2, 7, 'MichaÅ‚', 'Tak', '656567656', 'Michal.Tak@gmail.com'),
(3, 2, 'Krzych', 'Tak', '878787788', 'yyy@gmail.com'),
(4, 2, 'Jonasz', 'Fajny', '213254658', 'ui8@gmail.com'),
(13, 2, 'Stefan', 'Kowalski', '222111222', 'Stefan@gmail.com'),
(14, 2, 'Alicja', 'Tak', '454545454', 'gg@gmail.com'),
(16, 2, 'Maria', 'dd', '6666666666', 'tak@gmail.com'),
(18, 2, 'StanisÅ‚aw', 'Jakis', '444343334', 'srrr@gmail.com'),
(19, 2, 'dd', '', '123123123', 'ff@gmail.com'),
(21, 3, 'Mariusz', 'Kowalski', '333666999', 'dobryEmail@wp.pl'),
(22, 2, 'Jan', 'Wodny', '777111888', 'JanGr123@wp.pl');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `stanowisko`
--

CREATE TABLE `stanowisko` (
  `Id_stanowiska` int(10) NOT NULL,
  `Nazwa_stanowiska` varchar(255) COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `stanowisko`
--

INSERT INTO `stanowisko` (`Id_stanowiska`, `Nazwa_stanowiska`) VALUES
(2, 'Manager'),
(3, 'Prezes'),
(7, 'Konserwator'),
(8, 'Ksiegowy'),
(9, 'Doradca');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `adres`
--
ALTER TABLE `adres`
  ADD PRIMARY KEY (`Id_adresu`),
  ADD KEY `Id_kontrahenta` (`Id_kontrahenta`);

--
-- Indexes for table `adres-osoba_kontaktowa`
--
ALTER TABLE `adres-osoba_kontaktowa`
  ADD KEY `Id_adresu` (`Id_adresu`),
  ADD KEY `Id_osoby_kontaktowej` (`Id_osoby_kontaktowej`);

--
-- Indexes for table `kontrahent`
--
ALTER TABLE `kontrahent`
  ADD PRIMARY KEY (`Id_kontrahenta`);

--
-- Indexes for table `osoba_kontaktowa`
--
ALTER TABLE `osoba_kontaktowa`
  ADD PRIMARY KEY (`Id_osoby_kontaktowej`),
  ADD KEY `Id_stanowiska` (`Id_stanowiska`);

--
-- Indexes for table `stanowisko`
--
ALTER TABLE `stanowisko`
  ADD PRIMARY KEY (`Id_stanowiska`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `adres`
--
ALTER TABLE `adres`
  MODIFY `Id_adresu` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT dla tabeli `kontrahent`
--
ALTER TABLE `kontrahent`
  MODIFY `Id_kontrahenta` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT dla tabeli `osoba_kontaktowa`
--
ALTER TABLE `osoba_kontaktowa`
  MODIFY `Id_osoby_kontaktowej` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT dla tabeli `stanowisko`
--
ALTER TABLE `stanowisko`
  MODIFY `Id_stanowiska` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `adres`
--
ALTER TABLE `adres`
  ADD CONSTRAINT `adres_ibfk_2` FOREIGN KEY (`Id_kontrahenta`) REFERENCES `kontrahent` (`Id_kontrahenta`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `adres-osoba_kontaktowa`
--
ALTER TABLE `adres-osoba_kontaktowa`
  ADD CONSTRAINT `adres-osoba_kontaktowa_ibfk_1` FOREIGN KEY (`Id_adresu`) REFERENCES `adres` (`Id_adresu`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `adres-osoba_kontaktowa_ibfk_2` FOREIGN KEY (`Id_osoby_kontaktowej`) REFERENCES `osoba_kontaktowa` (`Id_osoby_kontaktowej`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `osoba_kontaktowa`
--
ALTER TABLE `osoba_kontaktowa`
  ADD CONSTRAINT `osoba_kontaktowa_ibfk_1` FOREIGN KEY (`Id_stanowiska`) REFERENCES `stanowisko` (`Id_stanowiska`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
