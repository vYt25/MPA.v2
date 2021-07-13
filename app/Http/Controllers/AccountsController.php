<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AccountsController extends Controller
{
    public function AddNewUser(Request $req)
    {
        $req['Password'] = Hash::make(md5($req->EmployeeID));
        $req['created_at'] = date('Y-m-d H:i:s');
        User::insert($req->all());
    }

    public function UpdateUserAccount(Request $req)
    {
        $user = User::find($req->id);
        $user->FirstNameEng = $req->FirstNameEng;
        $user->LastNameEng = $req->LastNameEng;
        $user->FirstNameJap = $req->FirstNameJap;
        $user->LastNameJap = $req->LastNameJap;
        $user->Department = $req->Department;
        $user->Password = Hash::make(md5($req->Password));
        $user->updated_at = date('Y-m-d H:i:s');
        $user->save();
    }

    public function UpdateUser(Request $req)
    {
        $user = User::find($req->id);
        $user->FirstNameEng = $req->FirstNameEng;
        $user->LastNameEng = $req->LastNameEng;
        $user->FirstNameJap = $req->FirstNameJap;
        $user->LastNameJap = $req->LastNameJap;
        $user->Department = $req->Department;
        $user->updated_at = date('Y-m-d H:i:s');
        $user->save();
    }

    public function DeleteUser(Request $req)
    {
        $user = User::find($req->id);
        $user->deleted_at = date('Y-m-d H:i:s');
        $user->save();
    }

    public function RestoreUser(Request $req)
    {
        $user = User::find($req->id);
        $user->deleted_at = null;
        $user->save();
    }
}
