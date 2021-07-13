<?php

namespace App\Http\Controllers;

use App\GeneralInformation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\ViewingController;

class NotificationController extends Controller
{
    public $QueryBody = "
    Select 
        DISTINCT(Final.MpaNo),     
        Final.*,
        CONCAT(AP.LastNameJap, ' ', AP.FirstNameJap) as ApproverFullNameJap,
        CONCAT(AP.LastNameEng, ' ', AP.FirstNameEng) as ApproverFullNameEng,
        AP.Email as ApproverEmail
            FROM(
                SELECT
                Main.*,
                CASE 
                    WHEN (Main.TotalPriceJPY > 199999 AND Main.TotalPriceJPY < 5000000 ) THEN 
                        CASE 
                            WHEN Main.Approver != Main.Applicant THEN list_approvers.receiver_1
                            ELSE 
                                CASE
                                    WHEN list_approvers.receiver_2 != Main.Approver THEN list_approvers.receiver_2
                                    ELSE list_approvers.receiver_3
                                END
                        END
                    WHEN (Main.TotalPriceJPY > 4999999 AND Main.TotalPriceJPY < 10000000 ) THEN 
                        CASE 
                            WHEN Main.Approver != Main.Applicant THEN list_approvers.receiver_2
                            ELSE list_approvers.receiver_3
                        END 
                    WHEN (Main.TotalPriceJPY > 10000000) THEN list_approvers.receiver_3 
                END ApproverF
                FROM (
                SELECT  
                A.*,
                CONCAT(U.LastNameEng, ' ', U.FirstNameEng) as ApplicantFullNameEng,
                CONCAT(U.LastNameJap, ' ', U.FirstNameJap) as ApplicantFullNameJap,
                attachments.Attachment,
                item.ItemNameEng,
                item.ItemNameJap,
                CASE 
                    WHEN (A.TotalPriceJPY > 199999 AND A.TotalPriceJPY < 5000000 ) THEN list_approvers.receiver_1 
                    WHEN (A.TotalPriceJPY > 4999999 AND A.TotalPriceJPY < 10000000 ) THEN list_approvers.receiver_2  
                    WHEN (A.TotalPriceJPY > 10000000) THEN list_approvers.receiver_3 
                END Approver
                FROM general_informations A 
                JOIN users as U ON U.EmployeeID = A.Applicant
                JOIN attachments on attachments.MpaNo = A.MpaNo
                JOIN (select * from items) as item ON item.MpaNo = A.MpaNo 
                JOIN list_approvers ON list_approvers.payer_code = A.PayerCompanyCode
                WHERE A.Status = '0') as Main 
                LEFT JOIN list_approvers ON list_approvers.payer_code = Main.PayerCompanyCode
            ) AS Final
            LEFT JOIN users  as AP ON AP.EmployeeID = Final.ApproverF
            ";
    public function GetNotifications(Request $req)
    {
        $v = new ViewingController;
        return [
            "Approver" => count(DB::select($v->QueryBody . " WHERE Final.ApproverF = '{$req->EmployeeID}' AND Final.Status = 0")),
            "Applicant" => count(DB::select($v->QueryBody . " WHERE Final.Applicant = '{$req->EmployeeID}' AND Final.Status = 0"))
        ];
    }
}
