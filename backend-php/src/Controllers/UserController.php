<?php

namespace POS\Controllers;

use POS\Controller;
use POS\Models\User;

class UserController extends Controller {

    public function index() {

        $users = [
            new User('John Doe', 'john@example.com'),
            new User('Jane Doe', 'jane@example.com')
        ];

        $this->render('user/index', ['users' => $users]);
    }

}
    