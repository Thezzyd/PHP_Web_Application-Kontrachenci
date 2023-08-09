<?php
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: *");
 header("Access-Control-Allow-Headers: *");
 header("Access-Control-Allow-Credentials: true");
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;


//$app = new \Slim\App;

//Get wszystkie Adresy
$app->get('/api/adres', function(Request $request, Response $response){
    $sql = "SELECT * FROM adres";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $adresy = $stmt->fetchAll(PDO::FETCH_OBJ);
    // $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($adresy));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

$app->get('/api/adres/wyszukaj/{data_string}/{Id_kontrahenta}', function(Request $request, Response $response){
    $data_string = $request->getAttribute('data_string');
    $Id_kontrahenta = $request->getAttribute('Id_kontrahenta');
    $sql = "SELECT * FROM adres WHERE Id_kontrahenta LIKE $Id_kontrahenta AND ( Rodzaj LIKE '%$data_string%' OR Ulica LIKE '%$data_string%' OR Miejscowosc LIKE '%$data_string%' OR Nr_budynku LIKE '%$data_string%' OR Nr_lokalu LIKE '%$data_string%' OR Kod_pocztowy LIKE '%$data_string%' OR Gmina LIKE '%$data_string%' OR Powiat LIKE '%$data_string%' OR Wojewodztwo LIKE '%$data_string%' OR Kraj LIKE '%$data_string%' OR Nr_telefonu LIKE '%$data_string%' OR Email LIKE '%$data_string%' )";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $adresy = $stmt->fetchAll(PDO::FETCH_OBJ);
    // $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($adresy));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

$app->get('/api/adres/wyszukaj/{data_string}', function(Request $request, Response $response){
    $data_string = $request->getAttribute('data_string');
    $sql = "SELECT * FROM adres WHERE Id_kontrahenta LIKE '%$data_string%' OR  Rodzaj LIKE '%$data_string%' OR Ulica LIKE '%$data_string%' OR Miejscowosc LIKE '%$data_string%' OR Nr_budynku LIKE '%$data_string%' OR Nr_lokalu LIKE '%$data_string%' OR Kod_pocztowy LIKE '%$data_string%' OR Gmina LIKE '%$data_string%' OR Powiat LIKE '%$data_string%' OR Wojewodztwo LIKE '%$data_string%' OR Kraj LIKE '%$data_string%' OR Nr_telefonu LIKE '%$data_string%' OR Email LIKE '%$data_string%' ";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $adresy = $stmt->fetchAll(PDO::FETCH_OBJ);
    // $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($adresy));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});
//Get pojedynczy adres po kontrahencie, siedziba glowna pierwsza
$app->get('/api/adres/kontrahent/{Id_kontrahenta}', function(Request $request, Response $response){
    $Id_kontrahenta = $request->getAttribute('Id_kontrahenta');

    $sql = "SELECT * FROM adres WHERE Id_kontrahenta = $Id_kontrahenta  ORDER BY Rodzaj ASC";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $adres = $stmt->fetchAll(PDO::FETCH_OBJ);
    // $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($adres));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

//Get pojedynczy adres
$app->get('/api/adres/{Id_adresu}', function(Request $request, Response $response){
    $Id_adresu = $request->getAttribute('Id_adresu');

    $sql = "SELECT * FROM adres WHERE Id_adresu = $Id_adresu";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $adres = $stmt->fetchAll(PDO::FETCH_OBJ);
    // $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($adres));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

//Add adres
$app->post('/api/adres/add', function(Request $request, Response $response){
    $Id_kontrahenta = $request->getParam('Id_kontrahenta');
    $Rodzaj = $request->getParam('Rodzaj');
    $Ulica = $request->getParam('Ulica');
    $Miejscowosc = $request->getParam('Miejscowosc');
    $Nr_budynku = $request->getParam('Nr_budynku');
    $Nr_lokalu = $request->getParam('Nr_lokalu');
    $Kod_pocztowy = $request->getParam('Kod_pocztowy');
    $Gmina = $request->getParam('Gmina');
    $Powiat = $request->getParam('Powiat');
    $Wojewodztwo = $request->getParam('Wojewodztwo');
    $Kraj = $request->getParam('Kraj');
    $Nr_telefonu = $request->getParam('Nr_telefonu');
    $Email= $request->getParam('Email');

    $sql = "INSERT INTO adres (Id_kontrahenta, Rodzaj, Ulica, Miejscowosc, Nr_budynku, Nr_lokalu, Kod_pocztowy, Gmina, Powiat, Wojewodztwo, Kraj, Nr_telefonu, Email) 
    VALUES (:Id_kontrahenta, :Rodzaj, :Ulica, :Miejscowosc, :Nr_budynku, :Nr_lokalu, :Kod_pocztowy, :Gmina, :Powiat, :Wojewodztwo, :Kraj, :Nr_telefonu, :Email)";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->prepare($sql);
     $adres = $stmt->fetchAll(PDO::FETCH_OBJ);

     $stmt->bindParam(':Id_kontrahenta', $Id_kontrahenta);
     $stmt->bindParam(':Rodzaj', $Rodzaj);
     $stmt->bindParam(':Ulica', $Ulica);
     $stmt->bindParam(':Miejscowosc', $Miejscowosc);
     $stmt->bindParam(':Nr_budynku', $Nr_budynku);
     $stmt->bindParam(':Nr_lokalu', $Nr_lokalu);
     $stmt->bindParam(':Kod_pocztowy', $Kod_pocztowy);
     $stmt->bindParam(':Gmina', $Gmina);
     $stmt->bindParam(':Powiat', $Powiat);
     $stmt->bindParam(':Wojewodztwo', $Wojewodztwo);
     $stmt->bindParam(':Kraj', $Kraj);
     $stmt->bindParam(':Nr_telefonu', $Nr_telefonu);
     $stmt->bindParam(':Email', $Email);

     if($Ulica !="" && $Miejscowosc !="" && $Nr_budynku !="" && $Kod_pocztowy !="" && $Kraj !="" && $Nr_telefonu !="" && $Email !="")
     {
     if(strlen($Kod_pocztowy) > 4)
     {
         if(strlen($Nr_telefonu) > 8 )
         {
            if(filter_var($Email, FILTER_VALIDATE_EMAIL))
            {
           
              $stmt->execute();
            }
            else return $response-> write("Błędny adres email!");   
         }
         else 
         return $response-> write("Błędny numer telefonu (przynajmniej 9 cyfr)!");   
    }
    else
    return $response-> write("Niepoprawny kod pocztowy (przynajmniej 5 znaków)!");   
     }
     else
     return $response-> write("Wypełnij wszystkie wymagane pola (Ulica, Miejscowość, Nr budynku, Kod pocztowy, Kraj, Nr telefonu, Email)!");   
   

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write("Pomyslnie dodano");
    // ->write(json_encode($adres));
   

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

    //Update adres
    //Trzeba podac wszystkie pola przy update w body
$app->put('/api/adres/update/{Id_adresu}', function(Request $request, Response $response){
    $Id_adresu = $request->getAttribute('Id_adresu');
    $Id_kontrahenta = $request->getParam('Id_kontrahenta');
    $Rodzaj = $request->getParam('Rodzaj');
    $Ulica = $request->getParam('Ulica');
    $Miejscowosc = $request->getParam('Miejscowosc');
    $Nr_budynku = $request->getParam('Nr_budynku');
    $Nr_lokalu = $request->getParam('Nr_lokalu');
    $Kod_pocztowy = $request->getParam('Kod_pocztowy');
    $Gmina = $request->getParam('Gmina');
    $Powiat = $request->getParam('Powiat');
    $Wojewodztwo = $request->getParam('Wojewodztwo');
    $Kraj = $request->getParam('Kraj');
    $Nr_telefonu = $request->getParam('Nr_telefonu');
    $Email = $request->getParam('Email');

    $sql_Id_kontrahenta = "UPDATE adres SET Id_kontrahenta = :Id_kontrahenta  WHERE Id_adresu = $Id_adresu";
    $sql_Rodzaj =         "UPDATE adres SET Rodzaj = :Rodzaj WHERE Id_adresu = $Id_adresu";
    $sql_Ulica =          "UPDATE adres SET Ulica = :Ulica WHERE Id_adresu = $Id_adresu";
    $sql_Miejscowosc =    "UPDATE adres SET Miejscowosc = :Miejscowosc WHERE Id_adresu = $Id_adresu";
    $sql_Nr_budynku =     "UPDATE adres SET Nr_budynku = :Nr_budynku WHERE Id_adresu = $Id_adresu";
    $sql_Nr_lokalu =      "UPDATE adres SET Nr_lokalu = :Nr_lokalu WHERE Id_adresu = $Id_adresu";
    $sql_Kod_pocztowy =   "UPDATE adres SET Kod_pocztowy = :Kod_pocztowy WHERE Id_adresu = $Id_adresu";
    $sql_Gmina =          "UPDATE adres SET Gmina = :Gmina WHERE Id_adresu = $Id_adresu";
    $sql_Powiat =         "UPDATE adres SET Powiat = :Powiat WHERE Id_adresu = $Id_adresu";
    $sql_Wojewodztwo =    "UPDATE adres SET Wojewodztwo = :Wojewodztwo WHERE Id_adresu = $Id_adresu";
    $sql_Kraj =           "UPDATE adres SET Kraj = :Kraj WHERE Id_adresu = $Id_adresu";
    $sql_Nr_telefonu =    "UPDATE adres SET Nr_telefonu = :Nr_telefonu WHERE Id_adresu = $Id_adresu";
    $sql_Email =          "UPDATE adres SET Email = :Email WHERE Id_adresu = $Id_adresu";
/*
    $sql = "UPDATE adres SET
     Id_kontrahenta = :Id_kontrahenta,
     Rodzaj = :Rodzaj, Ulica = :Ulica,
     Miejscowosc = :Miejscowosc,
     Nr_budynku = :Nr_budynku,
     Nr_lokalu = :Nr_lokalu,
     Kod_pocztowy = :Kod_pocztowy,
     Gmina = :Gmina,
     Powiat = :Powiat,
     Wojewodztwo = :Wojewodztwo,
     Kraj = :Kraj,
     Nr_telefonu = :Nr_telefonu,
     Nr_faksu = :Nr_faksu
     WHERE Id_adresu = $Id_adresu";
        */
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     if($Id_kontrahenta)
     {
         $stmt = $db->prepare($sql_Id_kontrahenta);   $adres = $stmt->fetchAll(PDO::FETCH_OBJ); $stmt->bindParam(':Id_kontrahenta', $Id_kontrahenta);  $stmt->execute();
     }
     if($Rodzaj)
     {
         $stmt = $db->prepare($sql_Rodzaj);  $adres = $stmt->fetchAll(PDO::FETCH_OBJ);  $stmt->bindParam(':Rodzaj', $Rodzaj);  $stmt->execute();
     }
     if($Ulica)
     {
         $stmt = $db->prepare($sql_Ulica);  $adres = $stmt->fetchAll(PDO::FETCH_OBJ);  $stmt->bindParam(':Ulica', $Ulica);  $stmt->execute();
     }
     if($Miejscowosc)
     {
         $stmt = $db->prepare($sql_Miejscowosc);  $adres = $stmt->fetchAll(PDO::FETCH_OBJ);  $stmt->bindParam(':Miejscowosc', $Miejscowosc);  $stmt->execute();
     }
     if($Nr_budynku)
     { 
       $stmt = $db->prepare($sql_Nr_budynku);  $adres = $stmt->fetchAll(PDO::FETCH_OBJ);  $stmt->bindParam(':Nr_budynku', $Nr_budynku);  $stmt->execute();
     }
     if($Nr_lokalu)
     {
      $stmt = $db->prepare($sql_Nr_lokalu);  $adres = $stmt->fetchAll(PDO::FETCH_OBJ);  $stmt->bindParam(':Nr_lokalu', $Nr_lokalu);  $stmt->execute();
     }
     if($Kod_pocztowy)
     {
        if(strlen($Kod_pocztowy) > 4)
        {
          $stmt = $db->prepare($sql_Kod_pocztowy);  $adres = $stmt->fetchAll(PDO::FETCH_OBJ);  $stmt->bindParam(':Kod_pocztowy', $Kod_pocztowy);  $stmt->execute();
        }else  return $response-> write("Błędny kod pocztowy (przynajmniej 5 znaków)!");   
    }
       if($Gmina)
     {
      $stmt = $db->prepare($sql_Gmina);  $adres = $stmt->fetchAll(PDO::FETCH_OBJ);  $stmt->bindParam(':Gmina', $Gmina);  $stmt->execute();
     }
     if($Powiat)
     {
      $stmt = $db->prepare($sql_Powiat);  $adres = $stmt->fetchAll(PDO::FETCH_OBJ);  $stmt->bindParam(':Powiat', $Powiat);  $stmt->execute();
     }
     if($Wojewodztwo)
     {
         $stmt = $db->prepare($sql_Wojewodztwo);  $adres = $stmt->fetchAll(PDO::FETCH_OBJ);  $stmt->bindParam(':Wojewodztwo', $Wojewodztwo);  $stmt->execute();
     }
     if($Kraj)
     {
         $stmt = $db->prepare($sql_Kraj);  $adres = $stmt->fetchAll(PDO::FETCH_OBJ);  $stmt->bindParam(':Kraj', $Kraj);  $stmt->execute();
     }
     if($Nr_telefonu)
     {
       if(strlen($Nr_telefonu) > 8 )
         {
           $stmt = $db->prepare($sql_Nr_telefonu);  $adres = $stmt->fetchAll(PDO::FETCH_OBJ);  $stmt->bindParam(':Nr_telefonu', $Nr_telefonu);  $stmt->execute();
         } else return $response-> write("Błędny numer telefonu (przynajmniej 9 cyfr)!");   
     }
     if($Email)
     {
        if(filter_var($Email, FILTER_VALIDATE_EMAIL))
        {
         $stmt = $db->prepare($sql_Email);  $adres = $stmt->fetchAll(PDO::FETCH_OBJ);  $stmt->bindParam(':Email', $Email);  $stmt->execute();
        }
        else return $response-> write("Błędny adres email!");   

     }
/*
     $stmt = $db->prepare($sql);
     $stmt->bindParam(':Id_adresu', $Id_adresu);
     $stmt->bindParam(':Id_kontrahenta', $Id_kontrahenta);
     $stmt->bindParam(':Rodzaj', $Rodzaj);
     $stmt->bindParam(':Ulica', $Ulica);
     $stmt->bindParam(':Miejscowosc', $Miejscowosc);
     $stmt->bindParam(':Nr_budynku', $Nr_budynku);
     $stmt->bindParam(':Nr_lokalu', $Nr_lokalu);
     $stmt->bindParam(':Kod_pocztowy', $Kod_pocztowy);
     $stmt->bindParam(':Gmina', $Gmina);
     $stmt->bindParam(':Powiat', $Powiat);
     $stmt->bindParam(':Wojewodztwo', $Wojewodztwo);
     $stmt->bindParam(':Kraj', $Kraj);
     $stmt->bindParam(':Nr_telefonu', $Nr_telefonu);
     $stmt->bindParam(':Nr_faksu', $Nr_faksu);
*/

     //$stmt->execute();

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write("Pomyslnie zaktualizowano");
     //->write(json_encode($adres));
   

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

//Delete adres
$app->delete('/api/adres/delete/{Id_adresu}', function(Request $request, Response $response){
    $Id_adresu = $request->getAttribute('Id_adresu');

    $sql = "DELETE FROM adres WHERE Id_adresu = $Id_adresu";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->prepare($sql);
     $adres = $stmt->fetchAll(PDO::FETCH_OBJ);
     $stmt->execute();
    // $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
    // ->write(json_encode($adres));
    ->write("Pomyslnie usunieto");

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});
