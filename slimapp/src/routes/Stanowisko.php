<?php
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: *");
 header("Access-Control-Allow-Headers: *");
  header("Access-Control-Allow-Credentials: true");
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;


//$app = new \Slim\App;

//Get wszystkie stanowiska
$app->get('/api/stanowisko', function(Request $request, Response $response){
    $sql = "SELECT * FROM stanowisko";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $stanowisko = $stmt->fetchAll(PDO::FETCH_OBJ);
     $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($stanowisko));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

//Get pojedyncze stanowisko
$app->get('/api/stanowisko/{Id_stanowiska}', function(Request $request, Response $response){
    $Id_stanowiska = $request->getAttribute('Id_stanowiska');

    $sql = "SELECT * FROM stanowisko WHERE Id_stanowiska = $Id_stanowiska";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $stanowisko = $stmt->fetchAll(PDO::FETCH_OBJ);
     $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($stanowisko));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});


$app->get('/api/stanowisko/wyszukaj/{data_string}', function(Request $request, Response $response){
    $data_string = $request->getAttribute('data_string');
    $sql = "SELECT * FROM stanowisko WHERE Nazwa_stanowiska LIKE '%$data_string%'";
    
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

//Add stanowisko
$app->post('/api/stanowisko/add', function(Request $request, Response $response){
    $Nazwa_stanowiska = $request->getParam('Nazwa_stanowiska');
  
    $sql = "INSERT INTO stanowisko (Nazwa_stanowiska) 
    VALUES (:Nazwa_stanowiska)";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->prepare($sql);

     $stanowisko = $stmt->fetchAll(PDO::FETCH_OBJ);
     $stmt->bindParam(':Nazwa_stanowiska', $Nazwa_stanowiska);

     if($Nazwa_stanowiska != "")
     {
       $stmt->execute();
     }
     else
     return $response->write("Nazwa stanowiska jest pusta!");


     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     //->write(json_encode($stanowisko));
     ->write("Pomyslnie dodano");

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

    //Update stanowisko
    //Trzeba podac wszystkie pola przy update w body
$app->put('/api/stanowisko/update/{Id_stanowiska}', function(Request $request, Response $response){
    $Id_stanowiska = $request->getAttribute('Id_stanowiska');
    $Nazwa_stanowiska = $request->getParam('Nazwa_stanowiska');

    $sql = "UPDATE stanowisko SET
     Nazwa_stanowiska = :Nazwa_stanowiska
     WHERE Id_stanowiska = $Id_stanowiska";
        
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->prepare($sql);
     $stanowisko = $stmt->fetchAll(PDO::FETCH_OBJ);
     $stmt->bindParam(':Nazwa_stanowiska', $Nazwa_stanowiska);

     if($Nazwa_stanowiska != "")
     {
       $stmt->execute();
     }
     else
     return $response->write("Nazwa stanowiska jest pusta!");

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     //->write(json_encode($stanowisko));
     ->write("Pomyslnie zaktualizowano");

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

//Delete stanowisko
$app->delete('/api/stanowisko/delete/{Id_stanowiska}', function(Request $request, Response $response){
    $Id_stanowiska = $request->getAttribute('Id_stanowiska');

    $sql = "DELETE FROM stanowisko WHERE Id_stanowiska = $Id_stanowiska";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->prepare($sql);
     $stanowisko = $stmt->fetchAll(PDO::FETCH_OBJ);
     $stmt->execute();
    
     $db = null;

    
     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
    // ->write(json_encode($stanowisko));
    ->write("Pomyslnie usunieto");

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});
