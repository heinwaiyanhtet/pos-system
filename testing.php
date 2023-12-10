<?php

    $url = 'http://geeksforgeeks.org/daf/php/google/#basics';

    $trimedUri =  trim(
        parse_url($url, PHP_URL_PATH),
    '/');

    $explodedUri = explode('/',$trimedUri);

    array_shift($explodedUri);

    $impodedUri = implode('/', $explodedUri);
    // var_dump($explodedUri);
    echo $impodedUri;
    

?>