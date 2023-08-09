<?php
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: *");
 header("Access-Control-Allow-Headers: *");
 header("Access-Control-Allow-Credentials: true");
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
//use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../src/config/db.php';


$app = new \Slim\App;


require __DIR__ . '/../src/routes/kontrahent.php';
require __DIR__ . '/../src/routes/adres.php';
require __DIR__ . '/../src/routes/osoba_kontaktowa.php';
require __DIR__ . '/../src/routes/stanowisko.php';
require __DIR__ . '/../src/routes/Adres-Osoba_kontaktowa.php';
require __DIR__ . '/../src/routes/Integracja.php';


$app->run();