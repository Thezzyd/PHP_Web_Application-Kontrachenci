<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Credentials: *");
 
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
//use Slim\Factory\AppFactory;

//$app = new \Slim\App;

//Get All Kontrahenci
$app->get('/api/kontrahent', function(Request $request, Response $response){
    $sql = "SELECT * FROM kontrahent";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $kontrahenci = $stmt->fetchAll(PDO::FETCH_OBJ);
     $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($kontrahenci));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

$app->get('/api/kontrahent/Desc', function(Request $request, Response $response){
    $sql = "SELECT * FROM kontrahent ORDER BY Id_kontrahenta DESC";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $kontrahenci = $stmt->fetchAll(PDO::FETCH_OBJ);
     $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($kontrahenci));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

$app->get('/api/kontrahent/Nazwa/Desc', function(Request $request, Response $response){
    $sql = "SELECT * FROM kontrahent ORDER BY Nazwa DESC";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $kontrahenci = $stmt->fetchAll(PDO::FETCH_OBJ);
     $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($kontrahenci));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

$app->get('/api/kontrahent/Nazwa/Asc', function(Request $request, Response $response){
    $sql = "SELECT * FROM kontrahent ORDER BY Nazwa ASC";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $kontrahenci = $stmt->fetchAll(PDO::FETCH_OBJ);
     $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($kontrahenci));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

$app->get('/api/kontrahent/NIP/Asc', function(Request $request, Response $response){
    $sql = "SELECT * FROM kontrahent ORDER BY NIP ASC";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $kontrahenci = $stmt->fetchAll(PDO::FETCH_OBJ);
     $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($kontrahenci));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

$app->get('/api/kontrahent/NIP/Desc', function(Request $request, Response $response){
    $sql = "SELECT * FROM kontrahent ORDER BY NIP DESC";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $kontrahenci = $stmt->fetchAll(PDO::FETCH_OBJ);
     $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($kontrahenci));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

$app->get('/api/kontrahent/Typ/Desc', function(Request $request, Response $response){
    $sql = "SELECT * FROM kontrahent ORDER BY Typ_kontrahenta DESC";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $kontrahenci = $stmt->fetchAll(PDO::FETCH_OBJ);
     $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($kontrahenci));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

$app->get('/api/kontrahent/Typ/Asc', function(Request $request, Response $response){
    $sql = "SELECT * FROM kontrahent ORDER BY Typ_kontrahenta ASC";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $kontrahenci = $stmt->fetchAll(PDO::FETCH_OBJ);
     $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($kontrahenci));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});


//Get Single kontrahent
$app->get('/api/kontrahent/{Id_kontrahenta}', function(Request $request, Response $response){
    $Id_kontrahenta = $request->getAttribute('Id_kontrahenta');

    $sql = "SELECT * FROM kontrahent WHERE Id_kontrahenta = $Id_kontrahenta";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $kontrahent = $stmt->fetchAll(PDO::FETCH_OBJ);
     $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($kontrahent));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

//Get NIP of kontrahent
/*$app->get('/api/kontrahent/Get_NIP/{Id_kontrahenta}', function(Request $request, Response $response){
    $Id_kontrahenta = $request->getAttribute('Id_kontrahenta');

    $sql = "SELECT NIP FROM kontrahent WHERE Id_kontrahenta = $Id_kontrahenta";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $kontrahent = $stmt->fetchAll(PDO::FETCH_OBJ);
     $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($kontrahent));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});*/

//Add kontrahent
$app->post('/api/kontrahent/add', function(Request $request, Response $response){
    $Nazwa = $request->getParam('Nazwa');
    $NIP = $request->getParam('NIP');
    $Typ_kontrahenta = $request->getParam('Typ_kontrahenta');

    $sql = "INSERT INTO kontrahent (Nazwa, NIP, Typ_kontrahenta) VALUES (:Nazwa, :NIP, :Typ_kontrahenta)";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->prepare($sql);

     $kontrahent = $stmt->fetchAll(PDO::FETCH_OBJ);

     $stmt->bindParam(':Nazwa', $Nazwa);
     $stmt->bindParam(':NIP', $NIP);
     $stmt->bindParam(':Typ_kontrahenta', $Typ_kontrahenta);

     if($Nazwa != "" && $NIP !="") 
     {        
     if(strlen($NIP) == 10 && is_numeric($NIP))
     {
        
         $stmt->execute();
 
    
     } else
      return $response-> write("Błędny NIP (musi zawierać 10 cyfr)!");
    }else
    return $response-> write("Nazwa kontrahenta i NIP nie mogą być puste!");
     
    // echo '{"notice": {"text": "Kontrahent Dodany"}';
     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
    // ->write(json_encode($kontrahent));
    ->write("Pomyslnie dodano");

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

$app->get('/api/kontrahent/wyszukaj/{data_string}', function(Request $request, Response $response){
    $data_string = $request->getAttribute('data_string');
    $sql = "SELECT * FROM kontrahent WHERE Nazwa LIKE '%$data_string%' OR NIP LIKE '%$data_string%' OR Typ_kontrahenta LIKE '%$data_string%'";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $kontrahenci = $stmt->fetchAll(PDO::FETCH_OBJ);
     $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($kontrahenci));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});


    //Update kontrahent
    //Trzeba podac wszystkie pola przy update w body
$app->put('/api/kontrahent/update/{Id_kontrahenta}', function(Request $request, Response $response){
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
         $stmt = $db->prepare($sql_Nazwa); $kontrahent = $stmt->fetchAll(PDO::FETCH_OBJ);  $stmt->bindParam(':Nazwa', $Nazwa);   $stmt->execute();
     }

     if($NIP)
     {
         if(strlen($NIP) == 10 && is_numeric($NIP))
         {
         $stmt= $db->prepare($sql_NIP); $kontrahent = $stmt->fetchAll(PDO::FETCH_OBJ); $stmt->bindParam(':NIP', $NIP);   $stmt->execute();
         }
         else 
         return $response-> write("Błędny NIP (musi zawierać 10 cyfr)!");   
    }
  
    

     if($Typ_kontrahenta)
     {
         $stmt= $db->prepare($sql_Typ_kontrahenta); $kontrahent = $stmt->fetchAll(PDO::FETCH_OBJ);  $stmt->bindParam(':Typ_kontrahenta', $Typ_kontrahenta); $stmt->execute();
     }

    /* $stmt = $db->prepare($sql);

     $stmt->bindParam(':Nazwa', $Nazwa);
     $stmt->bindParam(':NIP', $NIP);
     $stmt->bindParam(':Typ_kontrahenta', $Typ_kontrahenta);

     $stmt->execute();*/
     

       return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write("Pomyslnie zaktualizowano");

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

//Delete kontrahent
$app->delete('/api/kontrahent/delete/{Id_kontrahenta}', function(Request $request, Response $response){
    $Id_kontrahenta = $request->getAttribute('Id_kontrahenta');

   

 
    $sql = "DELETE FROM kontrahent WHERE Id_kontrahenta = $Id_kontrahenta";
    
    try{
     //Get DB Object
     $db = new db();
     $db = $db->connect();
     //Connect

     $stmt = $db->prepare($sql);
     $kontrahent = $stmt->fetchAll(PDO::FETCH_OBJ);
     $stmt->execute();
    
     
     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
   //  ->write(json_encode($kontrahent));
     ->write("Pomyslnie usunieto");

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

//Przeszukaj Wszystko
$app->get('/api/wyszukaj/{data_string}', function(Request $request, Response $response){
    $data_string = $request->getAttribute('data_string');

    $sql_kontrahent = "SELECT * FROM kontrahent WHERE Nazwa LIKE '%$data_string%' OR NIP LIKE '%$data_string%' OR Typ_kontrahenta LIKE '%$data_string%'";
    $sql_adres = "SELECT * FROM adres WHERE Id_kontrahenta LIKE '%$data_string%' OR Rodzaj LIKE '%$data_string%' OR Ulica LIKE '%$data_string%' OR Miejscowosc LIKE '%$data_string%' OR Nr_budynku LIKE '%$data_string%' OR Nr_lokalu LIKE '%$data_string%' OR Kod_pocztowy LIKE '%$data_string%' OR Gmina LIKE '%$data_string%' OR Powiat LIKE '%$data_string%' OR Wojewodztwo LIKE '%$data_string%' OR Kraj LIKE '%$data_string%' OR Nr_telefonu LIKE '%$data_string%' OR Nr_faksu LIKE '%$data_string%'";
    $sql_osoba = "SELECT * FROM osoba_kontaktowa WHERE Id_stanowiska LIKE '%$data_string%' OR Imie LIKE '%$data_string%' OR Nazwisko LIKE '%$data_string%' OR Nr_telefonu LIKE '%$data_string%' OR Email LIKE '%$data_string%'";
    $sql_stanowisko = "SELECT * FROM stanowisko WHERE Nazwa_stanowiska LIKE '%$data_string%'";
   
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $result = [];
     

     $stmt = $db->query($sql_kontrahent);
     $result['kontrahent'] = $stmt->fetchAll(PDO::FETCH_OBJ);
    
     $stmt = $db->query($sql_adres);
     $result['adres'] = $stmt->fetchAll(PDO::FETCH_OBJ);

     $stmt = $db->query($sql_osoba);
     $result['osoba'] = $stmt->fetchAll(PDO::FETCH_OBJ);

     $stmt = $db->query($sql_stanowisko);
     $result['stanowisko'] = $stmt->fetchAll(PDO::FETCH_OBJ);

    //  execute($stmt);

   /*  $stmt = $db->prepare($sql_adres);
     $kontrahenci = $stmt->fetchAll(PDO::FETCH_OBJ);

     $result['adres'] = execute($stmt);
    // $stmt->execute();

     $stmt = $db->prepare($sql_osoba);
     $kontrahenci = $stmt->fetchAll(PDO::FETCH_OBJ);

     $result['osoba'] = execute($stmt);
    // $stmt->execute();

     $stmt = $db->prepare($sql_kontrahent);
     $kontrahenci = $stmt->fetchAll(PDO::FETCH_OBJ);*/

   //  $result['stanowisko'] = execute($stmt);
   //  $stmt->execute();
     // $db = null;


     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($result));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});