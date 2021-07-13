<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Response;

class LoginController extends Controller
{
    public function MPALogin(Request $req)
    {
        $validate =  Validator::make($req->all(), [
            'email' => 'required|email',
            'password' => 'required|min:4'
        ]);

        if (!$validate->fails()) {
            $user = User::where('email', $req->email)->first();
            if (isset($user->Password)) {
                if (Hash::check($req->Password, $user->Password)) {

                    $response = $user;
                    $response['token'] = $user->createToken('Token Name')->accessToken;

                    return $response = Response::json($response, 200);
                } else {
                    return 'Invalid Password';
                }
            } else {
                return 'Invalid Email';
            }
        } else {
            return $validate->errors();
        }
    }

    public function logout(Request $req)
    {
        // $req->user()->token()->revoke();
        return $req->user()->token()->revoke();
    }
}
