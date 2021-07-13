<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function GetUsers()
    {
        $users =  User::all();

        foreach ($users as $key => $user) {
            $users[$key]['AccessName'] = $user['AccessLevel'] == 1 ? "Administrator" : "User";
        }

        return $users;
    }
}
