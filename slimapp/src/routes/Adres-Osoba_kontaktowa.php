<?php
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: *");
 header("Access-Control-Allow-Headers: *");
 header("Access-Control-Allow-Credentials: true");
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
//use Slim\Factory\AppFactory;

//$app = new \Slim\App;

//Get All Kontrahenci
/*$app->get('/api/adres', function(Request $request, Response $response){
    $sql = "SELECT * FROM kontrahent";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $kontrahenci = $stmt->fetchAll(PDO::FETCH_OBJ);
     $db = null;
     echo json_encode($kontrahenci);

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});*/

//Get Single powiazanie po Id_adresu
$app->get('/api/adres-osoba_kontaktowa/adres/{Id_adresu}', function(Request $request, Response $response){
    $Id_adresu = $request->getAttribute('Id_adresu');

    $sql = "SELECT * FROM `adres-osoba_kontaktowa` WHERE Id_adresu = $Id_adresu";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $AdresOsoba= $stmt->fetchAll(PDO::FETCH_OBJ);
     $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($AdresOsoba));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

//Get Single powiazanie po Id_osoby_kontaktowej
$app->get('/api/adres-osoba_kontaktowa/osoba_kontaktowa/{Id_osoby_kontaktowej}', function(Request $request, Response $response){
    $Id_osoby_kontaktowej= $request->getAttribute('Id_osoby_kontaktowej');

    $sql = "SELECT * FROM `adres-osoba_kontaktowa` WHERE Id_osoby_kontaktowej = $Id_osoby_kontaktowej";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $AdresOsoba = $stmt->fetchAll(PDO::FETCH_OBJ);
     $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($AdresOsoba));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

//Add powiazanie

$app->post('/api/adres-osoba_kontaktowa/add', function(Request $request, Response $response){
    header("Access-Control-Allow-Origin: *");
    $Id_adresu = $request->getParam('Id_adresu');
    $Id_osoby_kontaktowej = $request->getParam('Id_osoby_kontaktowej');
  

    $sql = "INSERT INTO `adres-osoba_kontaktowa` (Id_adresu, Id_osoby_kontaktowej) VALUES (:Id_adresu, :Id_osoby_kontaktowej)";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->prepare($sql);
     $AdresOsoba = $stmt->fetchAll(PDO::FETCH_OBJ);
     $stmt->bindParam(':Id_adresu', $Id_adresu);
     $stmt->bindParam(':Id_osoby_kontaktowej', $Id_osoby_kontaktowej);

     $stmt->execute();

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
    // ->write(json_encode($AdresOsoba));
    ->write("Pomyslnie dodano");

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});


$app->post('/api/adres-osoba_kontaktowa/add/{Id_adresu}/{Id_osoby_kontaktowej}', function(Request $request, Response $response){
    $Id_adresu = $request->getAttribute('Id_adresu');
    $Id_osoby_kontaktowej = $request->getAttribute('Id_osoby_kontaktowej');
  

    $sql = "INSERT INTO `adres-osoba_kontaktowa` (Id_adresu, Id_osoby_kontaktowej) VALUES ($Id_adresu, $Id_osoby_kontaktowej)";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->prepare($sql);
     $AdresOsoba = $stmt->fetchAll(PDO::FETCH_OBJ);
    // $stmt->bindParam(':Id_adresu', $Id_adresu);
    // $stmt->bindParam(':Id_osoby_kontaktowej', $Id_osoby_kontaktowej);
//
     $stmt->execute();

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
    // ->write(json_encode($AdresOsoba));
    ->write("Pomyslnie dodano");

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

    //Update kontrahent
    //Trzeba podac wszystkie pola przy update w body
/*$app->patch('/api/kontrahent/update/{Id_kontrahenta}', function(Request $request, Response $response){
    $Id_kontrahenta = $request->getAttribute('Id_kontrahenta');
    $Nazwa = $request->getParam('Nazwa');
    $NIP = $request->getParam('NIP');
    $Typ_kontrahenta = $request->getParam('Typ_kontrahenta');

   //$sql = "UPDATE kontrahent SET Nazwa = :Nazwa, NIP = :NIP, Typ_kontrahenta = :Typ_kontrahenta WHERE Id_kontrahenta = $Id_kontrahenta";

    $sql_Nazwa =            "UPDATE kontrahent SET Nazwa = :Nazwa WHERE Id_kontrahenta = $Id_kontrahenta";
    $sql_NIP =              "UPDATE kontrahent SET NIP = :NIP WHERE Id_kontrahenta = $Id_kontrahenta";
    $sql_Typ_kontrahenta =  "UPDATE kontrahent SET Typ_kontrahenta = :Typ_kontrahenta WHERE Id_kontrahenta = $Id_kontrahenta";

    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     if($Nazwa)
     {
         $stmt = $db->prepare($sql_Nazwa);   $stmt->bindParam(':Nazwa', $Nazwa);   $stmt->execute();
     }

     if($NIP)
     {
         $stmt= $db->prepare($sql_NIP);  $stmt->bindParam(':NIP', $NIP);   $stmt->execute();
     }

     if($Typ_kontrahenta)
     {
         $stmt= $db->prepare($sql_Typ_kontrahenta);  $stmt->bindParam(':Typ_kontrahenta', $Typ_kontrahenta); $stmt->execute();
     }

    /* $stmt = $db->prepare($sql);

     $stmt->bindParam(':Nazwa', $Nazwa);
     $stmt->bindParam(':NIP', $NIP);
     $stmt->bindParam(':Typ_kontrahenta', $Typ_kontrahenta);

     $stmt->execute();

     echo '{"notice": {"text": "Kontrahent Zaktualizowany"}';

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});*/

//Delete powiazanie
$app->delete('/api/adres-osoba_kontaktowa/delete/{Id_adresu}/{Id_osoby_kontaktowej}', function(Request $request, Response $response){
    $Id_adresu = $request->getAttribute('Id_adresu');
    $Id_osoby_kontaktowej = $request->getAttribute('Id_osoby_kontaktowej');

    $sql = "DELETE FROM `adres-osoba_kontaktowa` WHERE Id_adresu = $Id_adresu AND Id_osoby_kontaktowej = $Id_osoby_kontaktowej";
    
    try{
     //Get DB Object
     $db = new db();
     $db = $db->connect();
     //Connect

     $stmt = $db->prepare($sql);
     $AdresOsoba = $stmt->fetchAll(PDO::FETCH_OBJ);
     $stmt->execute();
    
     $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     //->write(json_encode($AdresOsoba));
     ->write("Pomyslnie usunieto");

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});
