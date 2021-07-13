<?php

namespace App\Http\Controllers;

use App\Department;
use Illuminate\Http\Request;

class MaintainanceController extends Controller
{
    public function UpdateDepartment(Request $req)
    {
        // return implode(',', $req->DcCode);
        $dept = Department::find($req->id);

        $dept->PayerCode = $req->PayerCode;
        $dept->DcCode = $req->DcCode != null ?  implode(',', $req->DcCode) : null;
        $dept->AccountingCode = $req->AccountingCode;
        $dept->DepartmentNameEng = $req->DepartmentNameEng;
        $dept->DepartmentNameJap = $req->DepartmentNameJap;
        $dept->McJaEmails = implode(',', $req->McJaEmails);
        $dept->McStaffEmails = implode(',', $req->McStaffEmails);
        $dept->ProductionJaEmails = implode(',', $req->ProductionJaEmails);
        $dept->ProductionStaffEmails = implode(',', $req->ProductionStaffEmails);
        $dept->FaCustotianEmails = implode(',', $req->FaCustotianEmails);
        $dept->AccountingEmails = implode(',', $req->AccountingEmails);
        $dept->updated_at =  date('Y-m-d H:i:s');
        $dept->save();
    }
    public function GetDepartment()
    {
        return Department::all();
    }
}
