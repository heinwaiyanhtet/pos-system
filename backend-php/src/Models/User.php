<?php

namespace POS\Models;

class User {

    public $name;
    public $email;

    public function __construct($name, $email) 
    {
        $this->name = $name;
        $this->email = $email;
    }

}
    