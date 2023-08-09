<?php
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: *");
 header("Access-Control-Allow-Headers: *");
 header("Access-Control-Allow-Credentials: *");
 
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
//use Slim\Factory\AppFactory;



//Get Single kontrahent
$app->get('/api/dane_kontrahenta/{NIP}', function(Request $request, Response $response){
    $NIP = $request->getAttribute('NIP');

    $sql = "SELECT kontrahent.Id_kontrahenta AS ID, kontrahent.Nazwa,
     CONCAT('Ul. ', adres.Ulica, ' ', adres.Nr_budynku,  IF(adres.Nr_lokalu !='', (CONCAT('/', adres.Nr_lokalu)), adres.Nr_lokalu), ', ',
     adres.Kod_pocztowy, ' ', adres.Miejscowosc) AS Adres, kontrahent.NIP, adres.Email, adres.Nr_telefonu AS Telefon FROM kontrahent, adres
     WHERE kontrahent.NIP = $NIP AND kontrahent.Id_kontrahenta = adres.Id_kontrahenta AND adres.Rodzaj = 'Siedziba_glowna'";
  
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
    // $stmt_NIP = $db->query($sql_NIP);

     $kontrahent = $stmt->fetch(PDO::FETCH_OBJ);
     $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($kontrahent));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});


$app->get('/api/dane_kontrahenta', function(Request $request, Response $response){
  //  $NIP = $request->getAttribute('NIP');

    $sql = "SELECT kontrahent.Id_kontrahenta AS ID, kontrahent.Nazwa,
     CONCAT('Ul. ', adres.Ulica, ' ', adres.Nr_budynku,  IF(adres.Nr_lokalu !='', (CONCAT('/', adres.Nr_lokalu)), adres.Nr_lokalu), ', ',
     adres.Kod_pocztowy, ' ', adres.Miejscowosc) AS Adres, kontrahent.NIP, adres.Email, adres.Nr_telefonu AS Telefon FROM kontrahent, adres
     WHERE kontrahent.Id_kontrahenta = adres.Id_kontrahenta AND adres.Rodzaj = 'Siedziba_glowna'";
  
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
    // $stmt_NIP = $db->query($sql_NIP);

     $kontrahent = $stmt->fetchAll(PDO::FETCH_OBJ);
     $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($kontrahent));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});
