<?php
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: *");
 header("Access-Control-Allow-Headers: *");
 header("Access-Control-Allow-Credentials: true");
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;


//$app = new \Slim\App;

//Get wszystkie osoby kontaktowe
$app->get('/api/osoba_kontaktowa', function(Request $request, Response $response){
    $sql = "SELECT * FROM osoba_kontaktowa";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $osoba = $stmt->fetchAll(PDO::FETCH_OBJ);
     $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($osoba));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

$app->get('/api/osoba_kontaktowa/wyszukaj/{data_string}', function(Request $request, Response $response){
    $data_string = $request->getAttribute('data_string');
    $sql = "SELECT * FROM osoba_kontaktowa WHERE Imie LIKE '%$data_string%' OR Nazwisko LIKE '%$data_string%' OR Nr_telefonu LIKE '%$data_string%' OR Email LIKE '%$data_string%'";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $osoby = $stmt->fetchAll(PDO::FETCH_OBJ);
     $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($osoby));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});


$app->get('/api/osoba_kontaktowa/GetId/{nr_telefonu}', function(Request $request, Response $response){
    $data_string = $request->getAttribute('nr_telefonu');
    $sql = "SELECT Id_osoby_kontaktowej FROM osoba_kontaktowa WHERE Nr_telefonu LIKE '$data_string'";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $osoby = $stmt->fetchAll(PDO::FETCH_OBJ);
     $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($osoby));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});


//Get pojedyncza osoba_kontaktowa
$app->get('/api/osoba_kontaktowa/{Id_osoby_kontaktowej}', function(Request $request, Response $response){
    $Id_osoby_kontaktowej = $request->getAttribute('Id_osoby_kontaktowej');

    $sql = "SELECT * FROM osoba_kontaktowa WHERE Id_osoby_kontaktowej = $Id_osoby_kontaktowej";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->query($sql);
     $osoba = $stmt->fetchAll(PDO::FETCH_OBJ);
     $db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     ->write(json_encode($osoba));

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

//Add osoba_kontaktowa
$app->post('/api/osoba_kontaktowa/add', function(Request $request, Response $response){
    $Id_stanowiska = $request->getParam('Id_stanowiska');
    $Imie = $request->getParam('Imie');
    $Nazwisko = $request->getParam('Nazwisko');
    $Nr_telefonu = $request->getParam('Nr_telefonu');
    $Email = $request->getParam('Email');
   

    $sql = "INSERT INTO osoba_kontaktowa (Id_stanowiska, Imie, Nazwisko, Nr_telefonu, Email) 
    VALUES (:Id_stanowiska, :Imie, :Nazwisko, :Nr_telefonu, :Email)";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->prepare($sql);

     $osoba = $stmt->fetchAll(PDO::FETCH_OBJ);

     $stmt->bindParam(':Id_stanowiska', $Id_stanowiska);
     $stmt->bindParam(':Imie', $Imie);
     $stmt->bindParam(':Nazwisko', $Nazwisko);
     $stmt->bindParam(':Nr_telefonu', $Nr_telefonu);
     $stmt->bindParam(':Email', $Email);
    

     if($Imie !="" && $Nazwisko !="" && $Nr_telefonu !="" && $Email !="")
     {
     if(filter_var($Email, FILTER_VALIDATE_EMAIL))
     {
         if(strlen($Nr_telefonu) > 8 )
         {
            //if($Nr_faksu strlen($Nr_faksu) > 8 )
           // {
              $stmt->execute();
          //  }
           // else 
           // return $response-> write("Błędny numer faksu (przynajmniej 9 cyfr)!");   
         }
         else 
         return $response-> write("Błędny numer telefonu (przynajmniej 9 cyfr)!");   
    }
    else
    return $response-> write("Niepoprawny adres email!");   
     }
     else
     return $response-> write("Wypełnij wszystkie wymagane pola (Imie, Nazwisko, Nr telefonu, Email)!");   

   //  $stmt->execute();

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     //->write(json_encode($osoba));
     ->write("Pomyslnie dodano");

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});
/*
//Add osoba_kontaktowa
$app->post('/api/osoba_kontaktowa/add/{}', function(Request $request, Response $response){
    $Id_stanowiska = $request->getParam('Id_stanowiska');
    $Imie = $request->getParam('Imie');
    $Nazwisko = $request->getParam('Nazwisko');
    $Nr_telefonu = $request->getParam('Nr_telefonu');
    $Email = $request->getParam('Email');
   

    $sql = "INSERT INTO osoba_kontaktowa (Id_stanowiska, Imie, Nazwisko, Nr_telefonu, Email) 
    VALUES (:Id_stanowiska, :Imie, :Nazwisko, :Nr_telefonu, :Email)";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->prepare($sql);

     $osoba = $stmt->fetchAll(PDO::FETCH_OBJ);

     $stmt->bindParam(':Id_stanowiska', $Id_stanowiska);
     $stmt->bindParam(':Imie', $Imie);
     $stmt->bindParam(':Nazwisko', $Nazwisko);
     $stmt->bindParam(':Nr_telefonu', $Nr_telefonu);
     $stmt->bindParam(':Email', $Email);
    
     $stmt->execute();

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
     //->write(json_encode($osoba));
     ->write("Pomyslnie dodano");

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});
*/

    //Update osoba kontaktowa
    //Trzeba podac wszystkie pola przy update w body
$app->put('/api/osoba_kontaktowa/update/{Id_osoby_kontaktowej}', function(Request $request, Response $response){
    $Id_osoby_kontaktowej = $request->getAttribute('Id_osoby_kontaktowej');
    $Id_stanowiska = $request->getParam('Id_stanowiska');
    $Imie = $request->getParam('Imie');
    $Nazwisko = $request->getParam('Nazwisko');
    $Nr_telefonu = $request->getParam('Nr_telefonu');
    $Email = $request->getParam('Email');

    $sql_Id_stanowiska = "UPDATE osoba_kontaktowa SET Id_stanowiska = :Id_stanowiska WHERE Id_osoby_kontaktowej = $Id_osoby_kontaktowej";
    $sql_Imie = "UPDATE osoba_kontaktowa SET Imie = :Imie WHERE Id_osoby_kontaktowej = $Id_osoby_kontaktowej";
    $sql_Nazwisko = "UPDATE osoba_kontaktowa SET Nazwisko = :Nazwisko WHERE Id_osoby_kontaktowej = $Id_osoby_kontaktowej";
    $sql_Nr_telefonu = "UPDATE osoba_kontaktowa SET Nr_telefonu = :Nr_telefonu WHERE Id_osoby_kontaktowej = $Id_osoby_kontaktowej";
    $sql_Email = "UPDATE osoba_kontaktowa SET Email = :Email WHERE Id_osoby_kontaktowej = $Id_osoby_kontaktowej";


/*
    $sql = "UPDATE `osoba_kontaktowa` SET
     `Id_stanowiska` = :Id_stanowiska,
     `Imie` = :Imie,
     `Nazwisko` = :Nazwisko,
     `Nr_telefonu` = :Nr_telefonu,
     `Email` = :Email
     WHERE Id_osoby_kontaktowej = $Id_osoby_kontaktowej";
        */
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     if($Id_stanowiska)
     {
         $stmt = $db->prepare($sql_Id_stanowiska); $osoba = $stmt->fetchAll(PDO::FETCH_OBJ);  $stmt->bindParam(':Id_stanowiska', $Id_stanowiska);  $stmt->execute();
     }
     if($Imie)
     {
         $stmt = $db->prepare($sql_Imie); $osoba = $stmt->fetchAll(PDO::FETCH_OBJ); $stmt->bindParam(':Imie', $Imie);  $stmt->execute();
     }
     if($Nazwisko)
     {
         $stmt = $db->prepare($sql_Nazwisko);$osoba = $stmt->fetchAll(PDO::FETCH_OBJ);  $stmt->bindParam(':Nazwisko', $Nazwisko);  $stmt->execute();
     }
     if($Nr_telefonu)
     {
         if(strlen($Nr_telefonu) > 8 )
         {
          $stmt = $db->prepare($sql_Nr_telefonu); $osoba = $stmt->fetchAll(PDO::FETCH_OBJ); $stmt->bindParam(':Nr_telefonu', $Nr_telefonu);  $stmt->execute();
         }else  return $response-> write("Błędny numer telefonu (przynajmniej 9 cyfr)!");   
     }
     if($Email)
     {
        if(filter_var($Email, FILTER_VALIDATE_EMAIL))
        {
         $stmt = $db->prepare($sql_Email);$osoba = $stmt->fetchAll(PDO::FETCH_OBJ);  $stmt->bindParam(':Email', $Email);  $stmt->execute();
        }else   return $response-> write("Niepoprawny adres email!");   
     }
    /* $stmt = $db->prepare($sql);

     $stmt->bindParam(':Id_stanowiska', $Id_stanowiska);
     $stmt->bindParam(':Imie', $Imie);
     $stmt->bindParam(':Nazwisko', $Nazwisko);
     $stmt->bindParam(':Nr_telefonu', $Nr_telefonu);
     $stmt->bindParam(':Email', $Email);

     $stmt->execute();
*/
        

    return $response->withStatus(200)
    ->withHeader('Content-Type', 'application/json')
    //->write(json_encode($osoba));
    ->write("Pomyslnie zaktualizowano");

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

//Delete osoba kontaktowa
$app->delete('/api/osoba_kontaktowa/delete/{Id_osoby_kontaktowej}', function(Request $request, Response $response){
    $Id_osoby_kontaktowej = $request->getAttribute('Id_osoby_kontaktowej');

    $sql = "DELETE FROM osoba_kontaktowa WHERE Id_osoby_kontaktowej = $Id_osoby_kontaktowej";
    
    try{
     //Get DB Object
     $db = new db();
     //Connect
     $db = $db->connect();

     $stmt = $db->prepare($sql);
     $osoba = $stmt->fetchAll(PDO::FETCH_OBJ);
     $stmt->execute();
    
     //$db = null;

     return $response->withStatus(200)
     ->withHeader('Content-Type', 'application/json')
    // ->write(json_encode($osoba));
    ->write("Pomyslnie usunieto");

    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';

    }
});

