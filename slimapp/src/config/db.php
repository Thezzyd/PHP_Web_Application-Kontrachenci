<?php 
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: *");
 header("Access-Control-Allow-Headers: *");
 header("Access-Control-Allow-Credentials: true");
     class db{
         //Properties
         private $dbhost = 'localhost';
         private $dbuser = 'root';
         private $dbpass = '';
         private $dbname = 'kontrahenci';

         //Connect
         public function connect(){
           
              $mysql_connect_str = "mysql:host=".$this->dbhost.";dbname=".$this->dbname;
              $dbConnection = new PDO($mysql_connect_str, $this->dbuser, $this->dbpass);
              $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
              return $dbConnection;

         }
     }