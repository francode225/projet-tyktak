<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

try {
    // Connexion à la base de données
    $connect = new PDO("mysql:host=localhost;dbname=gdc; charset=utf8", "root", "");
    $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        // pour les appels d'offre
        $data_piste = array();
        $query_appel = "SELECT * FROM gdcme";
        $statement = $connect->prepare($query_appel);
        $statement->execute();
        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $data_appel[] = $row;
        }

        // Répondre avec les données récupérées
        echo json_encode($data_piste);
    } 
     } catch (PDOException $e) {
        // Gérer les erreurs de connexion à la base de données
        echo "Erreur de connexion à la base de données : " . $e->getMessage();
    }

?>
