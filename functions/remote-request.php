<?php 
// Wenn man wegen CORS nicht direkt per JS Daten von einer Seite holen darf, muss das Backend das für uns machen
if (str_starts_with($_GET['url'], "https://vegpool.de") || str_starts_with($_GET['url'], "https://www.vegan.at")){
    echo file_get_contents($_GET['url']);
}else{
    http_response_code(400);
    echo "Fehler";
}