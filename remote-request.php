<?php 
// Wenn man wegen CORS nicht direkt per JS Daten von einer Seite holen darf, muss PHP das für uns machen
if (str_starts_with($_GET['url'], "https://vegpool.de") || str_starts_with($_GET['url'], "https://www.vegan.at")){
    echo file_get_contents($_GET['url']);
}else{
    echo "Fehler";
}