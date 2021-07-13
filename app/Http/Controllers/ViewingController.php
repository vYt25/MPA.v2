<?php

namespace App\Http\Controllers;

use App\Item;
use App\User;
use App\History;

use App\BlAttachment;
use App\ListApprover;
use App\PaymentSchedule;
use App\OtherInformation;
use App\CustomClass\Lists;
use App\InvoiceAttachment;
use App\GeneralInformation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ViewingController extends Controller
{
    private $ApplicationList, $req, $ApplicationCount, $ApproverDetails, $Approver;
    public $QueryBody;
    private $UserDetails;

    public function __construct()
    {
        $this->QueryBody = "
        Select 
            DISTINCT(Final.MpaNo),     
            Final.*,
            CONCAT(AP.LastNameJap, ' ', AP.FirstNameJap) as ApproverFullNameJap,
            CONCAT(AP.LastNameEng, ' ', AP.FirstNameEng) as ApproverFullNameEng,
            H.RevisedFieldItems ,
            PoA.Filename as PoAttachment,
            PoA.id as PoAttachmentID,
            BlA.Path as BlAttachment,
            BlA.id as BlAttachmentID,
            InA.Path as InAttachment,
            InA.id as InAttachmentID,
            CASE 
                WHEN (P.InspectionRatio > 0 AND Final.InspectionDate IS null) THEN 0
                WHEN (P.InspectionRatio > 0 AND Final.InspectionDate IS NOT null) THEN 1
                ELSE null
            END ForInspection,
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
                    WHERE A.Status NOT IN (2,3)) as Main 
                    LEFT JOIN list_approvers ON list_approvers.payer_code = Main.PayerCompanyCode
                ) AS Final
                LEFT JOIN users  as AP ON AP.EmployeeID = Final.ApproverF
                LEFT JOIN (SELECT * FROM histories ORDER BY id DESC LIMIT 1 ) as H ON H.MpaNo = Final.MpaNo
                LEFT JOIN payment_schedules P ON P.MpaNo = Final.MpaNo
                LEFT JOIN po_attachments PoA on PoA.MpaNo = Final.MpaNo
                LEFT JOIN bl_attachments BlA on BlA.MpaNo = Final.MpaNo
                LEFT JOIN invoice_attachments InA on InA.MpaNo = Final.MpaNo

                ";
    }

    public function GetApplicationCount()
    {
        return count(DB::select($this->QueryBody));
    }

    public function GetApplicationList()
    {
        // foreach ($this->req->search as $key => $val) {
        //     if ($key != 'menu' && $key != 'dates') {
        //         // echo strval(!isset($val));
        //         echo "$key  = $val" . "<br>";
        //     } else {
        //         print_r($val);
        //     }
        // }
        // return false;

        $this->UserDetails =  User::where('EmployeeID', $this->req->user)->first();
        // return dd($this->UserDetails->Department !=  "経理");

        $query = $this->QueryBody;
        $condition = null;
        if ($this->UserDetails->Department != '経理' && $this->UserDetails->FirstNameJap != null && $this->UserDetails->LastNameJap != null) {
            $condition .= " WHERE (Final.Applicant = '{$this->req->user}'";
            foreach ($this->req->search as $key => $val) {

                if ($key != 'menu' && $key != 'dates') {
                    if (isset($val)) {
                        $condition .= " AND Final.$key = '$val'";
                    }
                    // } else {
                    if ($key == 'dates' && count($val) == 2) {
                        $condition .= " AND Final.created_at Between '$val[0]' AND '$val[1]'";
                    }
                }
            }
            $condition .= ")";
            if (isset($this->req->approver)) {
                $condition .= " OR (Final.ApproverF = '{$this->req->approver}' ";
                foreach ($this->req->search as $key => $val) {
                    if ($key != 'menu' && $key != 'dates') {
                        if (isset($val)) {
                            $condition .= " AND Final.$key = '$val'";
                        }
                        // } else {
                        if ($key == 'dates' && count($val) == 2) {
                            $condition .= " AND Final.created_at Between '$val[0]' AND '$val[1]'";
                        }
                    }
                }
                $condition .= ")";
            }
        } else {

            $condition .= " WHERE (Final.Status IN (0,1)";
            foreach ($this->req->search as $key => $val) {
                if ($key != 'menu' && $key != 'dates') {
                    if (isset($val)) {
                        $condition .= " AND Final.$key = '$val'";
                    }
                    // } else {
                    if ($key == 'dates' && count($val) == 2) {
                        $condition .= " AND Final.created_at Between {$val[0]} AND {$val[1]}";
                    }
                }
            }
            $condition .= ")";
        }

        $query .= $condition;
        $this->ApplicationCount = count(DB::select($query));

        $query .= " ORDER BY Final.id DESC LIMIT {$this->req->skip},15";
        $this->ApplicationList = DB::select($query);
    }

    public function GetApproverDetails($field, $Approver, $PayerCompanyCode)
    {
        $this->ApproverDetails = ListApprover::select(
            $field,
            DB::raw('CONCAT(Approver.LastNameEng , " ", Approver.FirstNameEng) as ApproverFullNameEng'),
            DB::raw('CONCAT(Approver.LastNameJap , " ", Approver.FirstNameJap) as ApproverFullNameJap'),
            'Approver.Email as ApproverEmail'
        )
            ->join('users as Approver', 'Approver.EmployeeID', "list_approvers.receiver_{$Approver}")
            ->where('payer_code', $PayerCompanyCode)
            ->first();
    }

    public function GetApplications(Request $req)
    {
        $this->req = (object)$req;
        $this->GetApplicationList();
        $applications = (array)$this->ApplicationList;

        // //////////////////////////////////////////TO BE CHANGED \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        // foreach ($applications as $key => $val) {
        //     $applications[$key]->Bl = BlAttachment::where('MpaNo', $val->MpaNo)->get();
        //     $applications[$key]->Invoice = InvoiceAttachment::where('MpaNo', $val->MpaNo)->get();
        // }

        return [
            "ApplicationCount" => $this->ApplicationCount,
            "ApplicationList" => $applications
        ];
    }

    public function getMpaDetails(Request $req)
    {
        $this->QueryBody .= "WHERE Final.MpaNo = '{$req->MpaNo}'";
        return [
            'general_informations' => DB::select($this->QueryBody)[0]
            // GeneralInformation::select(
            //     'general_informations.*',
            //     DB::raw('CONCAT(users.FirstNameEng, " " , users.LastNameEng) as ApplicantFullNameEng'),
            //     DB::raw('CONCAT(users.FirstNameJap, " " , users.LastNameJap) as ApplicantFullNameJap')
            // )->where('MpaNo', $req->MpaNo)->join('users', 'users.EmployeeID', 'general_informations.Applicant')->first()
            ,
            'items' => Item::where('MpaNo', $req->MpaNo)->get(),
            'other_informations' => OtherInformation::where('MpaNo', $req->MpaNo)->first(),
            'payment_schedules' => PaymentSchedule::where('MpaNo', $req->MpaNo)->first(),
            'history' => History::where('MpaNo', $req->MpaNo)->orderBy('id', 'desc')->first()
        ];
    }
}
