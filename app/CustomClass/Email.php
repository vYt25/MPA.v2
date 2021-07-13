<?php

namespace App\CustomClass;

use App\Item;
use App\User;
use App\History;
use App\Department;
use App\ApproverMaster;
use App\GeneralInformation;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\ViewingController;
use App\OtherInformation;
use App\PaymentSchedule;
use App\Reason;

class Email
{
    public $EmailBody = "", $subject = "";
    public $items, $MpaNo, $general_information, $ApproverDetails;
    public $from = [];
    public $to = [];
    public $cc = [];
    protected $MonitorEmail = 'sd1test@hrd-s.com';
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
                ) as Main 
                LEFT JOIN list_approvers ON list_approvers.payer_code = Main.PayerCompanyCode
            ) AS Final
            LEFT JOIN users  as AP ON AP.EmployeeID = Final.ApproverF
            ";

    public $AdditionalRecievers = [
        'k-kimura@hrd-s.com',
        'y-kanomata@hrd-s.com',
        't-fujii@hrd-s.com',
        'm-nishida@hrd-s.com',
    ];

    public $AdditionalCC = [
        'accounting_import@hrd-s.com',
        'gpc03@hrd-s.com'
    ];

    public function ApproveEmailBodyWithPriceRevision($MpaNo, $history)
    {
        $ChangedFields = [];
        $ChangedFields['general_informations_old'] = json_decode($history->GeneralInformations);
        $ChangedFields['items_old'] = json_decode($history->Items);
        // return $ChangedFields['items_old'];
        $ChangedFields['items_old'];
        $ChangedFields['other_informations_old'] = json_decode($history->OtherInformations);
        $ChangedFields['payment_schedules_old'] = json_decode($history->Items);


        $ChangedFields['general_informations_new'] = GeneralInformation::where('MpaNo', $MpaNo)->first();
        $ChangedFields['items_new'] = Item::where('MpaNo', $MpaNo)->get()->toArray();
        $ChangedFields['other_informations_new'] = OtherInformation::where('MpaNo', $MpaNo)->first();
        $ChangedFields['payment_schedules_new'] = PaymentSchedule::where('MpaNo', $MpaNo)->first();

        $ChangedFields['Reason'] = Reason::where('MpaNo', $MpaNo)->orderBy('id', 'desc')->first()->Reason;

        $ChangedFields['general_informations'] = json_decode($history->RevisedFieldGeneralInformations);
        $ChangedFields['item_diff'] = json_decode($history->RevisedFieldItems);
        $ChangedFields['other_informations'] = json_decode($history->RevisedFieldOtherInformations);
        $ChangedFields['payment_schedules']  = json_decode($history->RevisedFieldPaymentSchedules);

        // return dd($ChangedFields);
        $this->ModifyApplicationApprovalEmailBody($MpaNo, (object)$ChangedFields);
    }

    public function ModifyApplicationApprovalEmailBody($MpaNo, $ChangedFields)
    {

        $this->MpaNo = $MpaNo;
        $this->GetDetails();
        $this->CreateSubject();
        // return dd($ChangedFields->items_old[0]->MpaNo);

        $Changed = [];
        $Changed['general_informations'] = [];
        foreach ($ChangedFields->general_informations as $key => $val) {
            $Changed['general_informations'][] = $key;
        }

        $Changed['items'] = [];
        foreach ($ChangedFields->item_diff as $key => $val) {
            $explode = explode('.', $key);
            $ctr = (int)$explode[0] + 1;
            $Changed['items'][] = $explode[1] . "({$ctr})";
        }

        $Changed['other_informations'] = [];
        foreach ($ChangedFields->other_informations as $key => $val) {
            $Changed['other_informations'][] = $key;
        }

        $Changed['payment_schedules'] = [];
        foreach ($ChangedFields->payment_schedules as $key => $val) {
            $Changed['payment_schedules'][] = $key;
        }

        $informations = [];

        $ctr = 0;
        foreach ($ChangedFields->general_informations as $key => $val) {
            $informations[$ctr]['field'] = $key;
            $informations[$ctr]['old'] = $ChangedFields->general_informations_old->$key;
            $informations[$ctr]['new'] = $ChangedFields->general_informations_new->$key;
            $ctr++;
        }
        foreach ($ChangedFields->item_diff as $key => $val) {
            $x = explode('.', $key);
            $informations[$ctr]['field'] = "$x[1](" . ($x[0] + 1) . ")";
            if (strpos($x[1], 'UnitPrice') !== false) {
                $informations[$ctr]['currency_old'] = $ChangedFields->items_old[$x[0]]->Currency;
                $informations[$ctr]['currency_new'] = $ChangedFields->items_new[$x[0]]['Currency'];
                $informations[$ctr]['ItemNameJap'] = $ChangedFields->items_new[$x[0]]['ItemNameJap'];
                $informations[$ctr]['ItemNameEng'] = $ChangedFields->items_new[$x[0]]['ItemNameEng'];
            }
            $informations[$ctr]['old'] = strpos($x[1], 'UnitPrice') !== false ? number_format((int)$ChangedFields->items_old[$x[0]]->{$x[1]}) : $ChangedFields->items_old[$x[0]]->{$x[1]};
            $informations[$ctr]['new'] = strpos($x[1], 'UnitPrice') !== false ? number_format((int)$ChangedFields->items_new[$x[0]][$x[1]]) : $ChangedFields->items_new[$x[0]][$x[1]];
            $ctr++;
        }
        foreach ($ChangedFields->other_informations as $key => $val) {
            $informations[$ctr]['field'] = $key;
            $informations[$ctr]['old'] = $ChangedFields->other_informations_old[$key];
            $informations[$ctr]['new'] = $ChangedFields->other_informations_new[$key];
            $ctr++;
        }
        foreach ($ChangedFields->payment_schedules as $key => $val) {
            $informations[$ctr]['field'] = $key;
            $informations[$ctr]['old'] = $ChangedFields->payment_schedules_old[$key];
            $informations[$ctr]['new'] = $ChangedFields->payment_schedules_new[$key];
            $ctr++;
        }

        // return $informations;
        $this->EmailBody .= '
            <style>
            #revision {
                font-family: Arial, Helvetica, sans-serif;
                border-collapse: collapse;
                width: 100%;
              }
              
              #revision td, #revision th {
                border: 1px solid #ddd;
                padding: 3px;
                font-size: 10px;
              }
              
              #revision tr:nth-child(even){background-color: #f2f2f2;}
              
              #revision tr:hover {background-color: #ddd;}
              
              #revision th {
                padding-top: 5px;
                padding-bottom: 5px;
                font-weight:normal;
                text-align: left;
                background-color: #004D40;
                color: white;
              }
            </style>
            ';

        // $values =  array_merge($Changed['general_informations'], $Changed['items'], $Changed['other_informations'], $Changed['payment_schedules']);
        // if ($ChangedFields->price_modified == 0) { // PRICE NOT AFFECTED

        $this->subject;
        $this->EmailBody .= "機械設備の発注金額の訂正が承認されました。<br><br>"; //<- WRONG

        $this->EmailBody .= "申請者： {$this->general_information->ApplicantFullNameJap}<br>";
        $this->EmailBody .= "取引先名称： {$this->general_information->VendorNameJap}<br>";
        $this->EmailBody .= "MPA No.: {$this->general_information->MpaNo}<br/><br/>";

        $this->EmailBody .= "理由： {$ChangedFields->Reason}<br/><br/>";

        $this->EmailBody .= '
                                        <table id="revision">
                                            <thead>
                                                <tr>
                                                    <th style="width: 5%">#</th>
                                                    <th style="width: 20%">訂正箇所</th>
                                                    <th style="width: 37.5%">訂正前</th>
                                                    <th style="width: 37.5%">訂正後</th>
                                                </tr>
                                            </thead>
                                            <tbody>';

        $rownum = 1;

        foreach ($informations as $key => $val) {
            if (isset($val['ItemNameJap'])) {
                $this->EmailBody .= "           <tr>
                                                    <td>{$rownum}</td>
                                                    <td>$val[field]<br>($val[ItemNameJap])</td>
                                                    <td>$val[currency_old] $val[old]</td>
                                                    <td>$val[currency_new] $val[new]</td>
                                                </tr>";
            } else {

                $this->EmailBody .= "           <tr>
                                                    <td>{$rownum}</td>
                                                    <td>$val[field]</td>
                                                    <td>$val[old]</td>
                                                    <td>$val[new]</td>
                                                </tr>";
            }
            $rownum++;
        }

        $this->EmailBody .=    '        </tbody>
                                        </table><br/><br/>';



        $this->EmailBody .= "URL: <a href='" . strtolower(explode('/', $_SERVER['SERVER_PROTOCOL'])[0]) . "://$_SERVER[HTTP_HOST]/application_list?MpaNo={$this->general_information->MpaNo}'>" . strtolower(explode('/', $_SERVER['SERVER_PROTOCOL'])[0]) . "://$_SERVER[HTTP_HOST]/application_list?MpaNo={$this->general_information->MpaNo}</a><br/><br/>";
        $this->EmailBody .= "Revision of the price was approved.<br><br>";
        $this->EmailBody .= "Applicant： {$this->general_information->ApplicantFullNameEng}<br>";
        $this->EmailBody .= "Vendor Name: {$this->general_information->VendorNameEng}<br>";
        $this->EmailBody .= "MPA No.: {$this->general_information->MpaNo}<br/><br/>";
        $this->EmailBody .= "Reason: {$ChangedFields->Reason}<br/><br/>";

        $this->EmailBody .= '       <table id="revision">
                                            <thead>
                                                <tr>
                                                    <th style="width: 5%">#</th>
                                                    <th style="width: 20%">Revised field</th>
                                                    <th style="width: 37.5%">Before</th>
                                                    <th style="width: 37.5%">After</th>
                                                </tr>
                                            </thead>
                                            <tbody>';
        $rownum = 1;
        foreach ($informations as $key => $val) {
            if (isset($val['ItemNameJap'])) {
                $this->EmailBody .= "           <tr>
                                                    <td>{$rownum}</td>
                                                    <td>$val[field]<br>($val[ItemNameEng])</td>
                                                    <td>$val[currency_old] $val[old]</td>
                                                    <td>$val[currency_new] $val[new]</td>
                                                </tr>";
            } else {

                $this->EmailBody .= "           <tr>
                                                        <td>{$rownum}</td>
                                                        <td>$val[field]</td>
                                                        <td>$val[old]</td>
                                                        <td>$val[new]</td>
                                                    </tr>";
            }
            $rownum++;
        }
        $this->EmailBody .=    '        </tbody>
                                        </table><br/>';
        return $this->EmailBody;
    }

    public function ModifyApplicationEmailRecipient($MpaNo, $update)
    {
        if ($update->price_modified > 0) {
            $gi = DB::select($this->QueryBody . " WHERE Final.MpaNo = '$MpaNo'");
            $gi = (object)$gi[0];
            $to[] = $gi->ApproverEmail;
            $cc[] = User::where('EmployeeID', $gi->Applicant)->first()->Email;
        } else {
            $gi = DB::select($this->QueryBody . " WHERE Final.MpaNo = '$MpaNo'");
            $gi = (object)$gi[0];
            $applicant = $gi->Applicant;
            $ApplicantEmail = User::where('EmployeeID', $applicant)->first()->Email;
            $to = [];
            $cc = [];
            $reciever = Department::find($gi->DepartmentCode);

            $McJaEmails = explode(',', $reciever->McJaEmails);
            $ProductionJaEmails = explode(',', $reciever->ProductionJaEmails);
            $FaCustodianEmails = explode(',', $reciever->FaCustodianEmails);
            $ProductionStaffEmails = explode(',', $reciever->ProductionStaffEmails);
            $AccountingEmails = explode(',', $reciever->AccountingEmails);
            $McStaffEmails = explode(',', $reciever->McStaffEmails);

            foreach ($McJaEmails as $reciever) {
                if ($reciever != "" && $reciever != null) {
                    $to[] = $reciever;
                }
            }
            foreach ($ProductionJaEmails as $reciever) {
                if ($reciever != "" && $reciever != null) {
                    $to[] = $reciever;
                }
            }
            foreach ($FaCustodianEmails as $reciever) {
                if ($reciever != "" && $reciever != null) {
                    $to[] = $reciever;
                }
            }
            foreach ($ProductionStaffEmails as $reciever) {
                if ($reciever != "" && $reciever != null) {
                    $to[] = $reciever;
                }
            }
            foreach ($AccountingEmails as $reciever) {
                if ($reciever != "" && $reciever != null) {
                    $cc[] = $reciever;
                }
            }

            foreach ($McStaffEmails as $reciever) {
                if ($reciever != "" && $reciever != null) {
                    $cc[] = $reciever;
                }
            }
            $cc[] = $ApplicantEmail;
            $cc[] = $gi->ApproverEmail;
            $cc[] = $this->MonitorEmail;
        }
        return (object)[
            'to' => $to,
            "cc" => $cc
        ];
    }

    public function CancelApplicationEmailRecipient($MpaNo)
    {
        $gi = DB::select($this->QueryBody . " WHERE Final.MpaNo = '$MpaNo'");
        $gi = (object)$gi[0];
        $to[] = $gi->ApproverEmail;
        $cc[] = User::where('EmployeeID', $gi->Applicant)->first()->Email;
        $cc[] = $this->MonitorEmail;
        return (object)[
            'to' => $to,
            "cc" => $cc
        ];
    }

    public function SuccessEmailRecipient($MpaNo)
    {
        // $vc = new ViewingController;
        $gi = DB::select($this->QueryBody . " WHERE Final.MpaNo = '$MpaNo'");
        $gi = (object)$gi[0];
        $applicant = $gi->Applicant;
        $ApplicantEmail = User::where('EmployeeID', $applicant)->first()->Email;
        $to = [];
        $cc = [];
        if (substr($MpaNo, 0, 2) == 'HS') {
            $to = $this->AdditionalRecievers;
            $cc = $this->AdditionalCC;
        }
        $reciever = Department::find($gi->DepartmentCode);

        $McJaEmails = explode(',', $reciever->McJaEmails);
        $ProductionJaEmails = explode(',', $reciever->ProductionJaEmails);
        $FaCustodianEmails = explode(',', $reciever->FaCustodianEmails);
        $ProductionStaffEmails = explode(',', $reciever->ProductionStaffEmails);
        $AccountingEmails = explode(',', $reciever->AccountingEmails);
        $McStaffEmails = explode(',', $reciever->McStaffEmails);

        foreach ($McJaEmails as $reciever) {
            if ($reciever != "" && $reciever != null) {
                $to[] = $reciever;
            }
        }
        foreach ($ProductionJaEmails as $reciever) {
            if ($reciever != "" && $reciever != null) {
                $to[] = $reciever;
            }
        }
        foreach ($FaCustodianEmails as $reciever) {
            if ($reciever != "" && $reciever != null) {
                $to[] = $reciever;
            }
        }
        foreach ($ProductionStaffEmails as $reciever) {
            if ($reciever != "" && $reciever != null) {
                $to[] = $reciever;
            }
        }
        foreach ($AccountingEmails as $reciever) {
            if ($reciever != "" && $reciever != null) {
                $cc[] = $reciever;
            }
        }

        foreach ($McStaffEmails as $reciever) {
            if ($reciever != "" && $reciever != null) {
                $cc[] = $reciever;
            }
        }
        $cc[] = $ApplicantEmail;
        $cc[] = $gi->ApproverEmail;
        $cc[] = $this->MonitorEmail;


        return (object)[
            'to' => $to,
            "cc" => $cc
        ];
    }

    public function DisapproveEmailRecipient($MpaNo)
    {

        // $vc = new ViewingController;
        // $vc->QueryBody;
        $values = DB::select($this->QueryBody . " WHERE Final.MpaNo = '$MpaNo'");
        $applicant = $values[0]->Applicant;
        $ApplicantEmail = User::where('EmployeeID', $applicant)->first()->Email;
        $cc = [];
        $cc[] = $values[0]->ApproverEmail;
        $cc[] = $this->MonitorEmail;
        return (object)[
            'to' => $ApplicantEmail,
            "cc" => $cc
        ];
    }

    public function RegisterApplicationEmailRecipient($MpaNo)
    {
        // $vc = new ViewingController;
        $values = DB::select($this->QueryBody . " WHERE Final.MpaNo = '$MpaNo'");
        $applicant = $values[0]->Applicant;
        $ApplicantEmail = User::where('EmployeeID', $applicant)->first()->Email;
        $cc = [];
        $cc[] = $ApplicantEmail;
        $cc[] = $this->MonitorEmail;
        return (object)[
            'to' => $values[0]->ApproverEmail,
            "cc" => $cc
        ];
    }

    public function CreateSubject()
    {
        $this->subject =  "【機械設備購入申請書_ 「";
        $this->subject .= "{$this->items[0]->ItemNameJap}";
        if (count($this->items) > 1) {
            $this->subject .= " 他";
        }
        $this->subject .= "」】";
    }

    public function ModifyApplicationEmailBody($MpaNo, $ChangedFields)
    {

        $this->MpaNo = $MpaNo;
        $this->GetDetails();
        $this->CreateSubject();
        // return dd($ChangedFields->other_informations);

        $Changed = [];
        $Changed['general_informations'] = [];
        foreach ($ChangedFields->general_informations as $key => $val) {
            $Changed['general_informations'][] = $key;
        }

        $Changed['items'] = [];
        foreach ($ChangedFields->item_diff as $key => $val) {
            $explode = explode('.', $key);
            $ctr = (int)$explode[0] + 1;
            $Changed['items'][] = $explode[1] . "({$ctr})";
        }

        $Changed['other_informations'] = [];
        foreach ($ChangedFields->other_informations as $key => $val) {
            $Changed['other_informations'][] = $key;
        }

        $Changed['payment_schedules'] = [];
        foreach ($ChangedFields->payment_schedules as $key => $val) {
            $Changed['payment_schedules'][] = $key;
        }

        $informations = [];

        $ctr = 0;
        foreach ($ChangedFields->general_informations as $key => $val) {
            $informations[$ctr]['field'] = $key;
            $informations[$ctr]['old'] = $ChangedFields->general_informations_old->$key;
            $informations[$ctr]['new'] = $ChangedFields->general_informations_new->$key;
            $ctr++;
        }
        foreach ($ChangedFields->item_diff as $key => $val) {
            $x = explode('.', $key);
            $informations[$ctr]['field'] = "$x[1](" . ($x[0] + 1) . ")";
            if (strpos($x[1], 'UnitPrice') !== false) {
                $informations[$ctr]['currency_old'] = $ChangedFields->items_old[$x[0]]['Currency'];
                $informations[$ctr]['currency_new'] = $ChangedFields->items_new[$x[0]]['Currency'];
                $informations[$ctr]['ItemNameJap'] = $ChangedFields->items_new[$x[0]]['ItemNameJap'];
                $informations[$ctr]['ItemNameEng'] = $ChangedFields->items_new[$x[0]]['ItemNameEng'];
            }
            $informations[$ctr]['old'] = strpos($x[1], 'UnitPrice') !== false ? number_format((int)$ChangedFields->items_old[$x[0]][$x[1]]) : $ChangedFields->items_old[$x[0]][$x[1]];
            $informations[$ctr]['new'] = strpos($x[1], 'UnitPrice') !== false ? number_format((int)$ChangedFields->items_new[$x[0]][$x[1]]) : $ChangedFields->items_new[$x[0]][$x[1]];
            $ctr++;
        }
        foreach ($ChangedFields->other_informations as $key => $val) {
            $informations[$ctr]['field'] = $key;
            $informations[$ctr]['old'] = $ChangedFields->other_informations_old[$key];
            $informations[$ctr]['new'] = $ChangedFields->other_informations_new[$key];
            $ctr++;
        }
        foreach ($ChangedFields->payment_schedules as $key => $val) {
            $informations[$ctr]['field'] = $key;
            $informations[$ctr]['old'] = $ChangedFields->payment_schedules_old[$key];
            $informations[$ctr]['new'] = $ChangedFields->payment_schedules_new[$key];
            $ctr++;
        }

        // return $informations;
        $this->EmailBody .= '
            <style>
            #revision {
                font-family: Arial, Helvetica, sans-serif;
                border-collapse: collapse;
                width: 100%;
              }
              
              #revision td, #revision th {
                border: 1px solid #ddd;
                padding: 3px;
                font-size: 10px;
              }
              
              #revision tr:nth-child(even){background-color: #f2f2f2;}
              
              #revision tr:hover {background-color: #ddd;}
              
              #revision th {
                padding-top: 5px;
                padding-bottom: 5px;
                font-weight:normal;
                text-align: left;
                background-color: #004D40;
                color: white;
              }
            </style>
            ';

        // $values =  array_merge($Changed['general_informations'], $Changed['items'], $Changed['other_informations'], $Changed['payment_schedules']);
        // if ($ChangedFields->price_modified == 0) { // PRICE NOT AFFECTED

        $this->subject;
        if ($ChangedFields->price_modified == 0) {
            //発注承認済みの機械設備の金額に訂正があります。
            $this->EmailBody .= "発注承認済みの機械設備情報に訂正が入りました。<br><br>";
        } else {
            $this->EmailBody .= "発注承認済みの機械設備の金額に訂正があります。<br>";
            $this->EmailBody .= "内容を確認し、承認を行ってください。<br><br>";
        }
        $this->EmailBody .= "申請者： {$this->general_information->ApplicantFullNameJap}<br>";
        $this->EmailBody .= "取引先名称： {$this->general_information->VendorNameJap}<br>";
        $this->EmailBody .= "MPA No.: {$this->general_information->MpaNo}<br/><br/>";

        if ($ChangedFields->price_modified !== 0) {
            $this->EmailBody .= "理由： {$ChangedFields->req->Reason}<br/><br/>";
        }

        $this->EmailBody .= '
                                        <table id="revision">
                                            <thead>
                                                <tr>
                                                    <th style="width: 5%">#</th>
                                                    <th style="width: 20%">訂正箇所</th>
                                                    <th style="width: 37.5%">訂正前</th>
                                                    <th style="width: 37.5%">訂正後</th>
                                                </tr>
                                            </thead>
                                            <tbody>';

        $rownum = 1;

        foreach ($informations as $key => $val) {
            if (isset($val['ItemNameJap'])) {
                $this->EmailBody .= "           <tr>
                                                    <td>{$rownum}</td>
                                                    <td>$val[field]<br>($val[ItemNameJap])</td>
                                                    <td>$val[currency_old] $val[old]</td>
                                                    <td>$val[currency_new] $val[new]</td>
                                                </tr>";
            } else {

                $this->EmailBody .= "           <tr>
                                                    <td>{$rownum}</td>
                                                    <td>$val[field]</td>
                                                    <td>$val[old]</td>
                                                    <td>$val[new]</td>
                                                </tr>";
            }
            $rownum++;
        }

        $this->EmailBody .=    '        </tbody>
                                        </table><br/><br/>';



        $this->EmailBody .= "URL: <a href='" . strtolower(explode('/', $_SERVER['SERVER_PROTOCOL'])[0]) . "://$_SERVER[HTTP_HOST]/application_list?MpaNo={$this->general_information->MpaNo}'>" . strtolower(explode('/', $_SERVER['SERVER_PROTOCOL'])[0]) . "://$_SERVER[HTTP_HOST]/application_list?MpaNo={$this->general_information->MpaNo}</a><br/><br/>";
        $this->EmailBody .= "Revision was made as follows.<br><br>";
        $this->EmailBody .= "Applicant： {$this->general_information->ApplicantFullNameEng}<br>";
        $this->EmailBody .= "Vendor Name: {$this->general_information->VendorNameEng}<br>";
        $this->EmailBody .= "MPA No.: {$this->general_information->MpaNo}<br/><br/>";
        if ($ChangedFields->price_modified !== 0) {
            $this->EmailBody .= "Reason: {$ChangedFields->req->Reason}<br/><br/>";
        }

        $this->EmailBody .= '       <table id="revision">
                                            <thead>
                                                <tr>
                                                    <th style="width: 5%">#</th>
                                                    <th style="width: 20%">Revised field</th>
                                                    <th style="width: 37.5%">Before</th>
                                                    <th style="width: 37.5%">After</th>
                                                </tr>
                                            </thead>
                                            <tbody>';
        $rownum = 1;
        foreach ($informations as $key => $val) {
            if (isset($val['ItemNameJap'])) {
                $this->EmailBody .= "           <tr>
                                                    <td>{$rownum}</td>
                                                    <td>$val[field]<br>($val[ItemNameEng])</td>
                                                    <td>$val[currency_old] $val[old]</td>
                                                    <td>$val[currency_new] $val[new]</td>
                                                </tr>";
            } else {

                $this->EmailBody .= "           <tr>
                                                        <td>{$rownum}</td>
                                                        <td>$val[field]</td>
                                                        <td>$val[old]</td>
                                                        <td>$val[new]</td>
                                                    </tr>";
            }
            $rownum++;
        }
        $this->EmailBody .=    '        </tbody>
                                        </table><br/>';
        return $this->EmailBody;
    }

    public function GetDetails()
    {
        $this->general_information =  GeneralInformation::select(
            'general_informations.*',
            'departments.DepartmentNameJap',
            'departments.DepartmentNameEng',
            'users.Email as ApplicantEmail',
            DB::raw('CONCAT(users.LastNameJap, " ",users.FirstNameJap ) as ApplicantFullNameJap'),
            DB::raw('CONCAT(users.LastNameEng, " ",users.FirstNameEng ) as ApplicantFullNameEng')
        )->where('MpaNo', $this->MpaNo)
            ->join('users', 'users.EmployeeID', 'general_informations.Applicant')
            ->join('departments', 'departments.id', 'general_informations.DepartmentCode')
            ->first();
        $this->items =  Item::where('MpaNo', $this->MpaNo)->get();
        $this->GetApproverDetails();
    }

    public function CancelApplicationEmailBody($MpaNo, $Reason)
    {
        $this->MpaNo = $MpaNo;
        $this->GetDetails();
        $this->CreateSubject();

        // return $this->general_information;

        $this->EmailBody .= "機械設備の発注承認依頼がキャンセルされました。<br/><br/>";
        $this->EmailBody .= "申請者： {$this->general_information->ApplicantFullNameJap}<br/>";
        $this->EmailBody .= "MPA No.: {$this->general_information->MpaNo}<br/>";
        $this->EmailBody .= "設備名称： {$this->items[0]->ItemNameJap}<br/>";
        $this->EmailBody .= "取引先名称：{$this->general_information->VendorNameJap}<br/>";
        $this->EmailBody .= "使用部署： {$this->general_information->DepartmentNameJap}<br/><br/>";
        $this->EmailBody .= "URL: <a href='" . strtolower(explode('/', $_SERVER['SERVER_PROTOCOL'])[0]) . "://$_SERVER[HTTP_HOST]/application_list?MpaNo={$this->general_information->MpaNo}'>" . strtolower(explode('/', $_SERVER['SERVER_PROTOCOL'])[0]) . "://$_SERVER[HTTP_HOST]/application_list?MpaNo={$this->general_information->MpaNo}</a><br/><br/>";
        $this->EmailBody .= "理由: {$Reason}<br/>";

        return $this->EmailBody;
    }

    public function DisapproveEmailBody($MpaNo, $Reason)
    {
        $this->MpaNo = $MpaNo;
        $this->GetDetails();
        $this->CreateSubject();

        $this->EmailBody .= "機械設備の発注が拒否されました。<br/><br/>";
        $this->EmailBody .= "申請者： {$this->general_information->ApplicantFullNameJap}<br/>";
        $this->EmailBody .= "MPA No.: {$this->general_information->MpaNo}<br/>";
        $this->EmailBody .= "設備名称： {$this->items[0]->ItemNameJap}<br/>";
        $this->EmailBody .= "取引先名称：{$this->general_information->VendorNameJap}<br/>";
        $this->EmailBody .= "使用部署： {$this->general_information->DepartmentNameJap}<br/>";
        $this->EmailBody .= "承認者：{$this->ApproverDetails->ApproverFullNameJap}<br/><br/>";
        $this->EmailBody .= "理由: {$Reason}";

        return $this->EmailBody;
    }

    public function GetApproverDetails()
    {
        $MpaNo = $this->MpaNo;
        $req = (object)['items' => $this->items];
        $mpa = new Mpa($req);
        $totalPrice = $mpa->TotalPriceJPY();
        $approver_level = null;

        if ($totalPrice >= 200000 && $totalPrice < 5000000) {
            $approver_level = 1;
        }
        if ($totalPrice >= 5000000 && $totalPrice < 10000000) {
            $approver_level = 2;
        }
        if ($totalPrice >= 10000000) {
            $approver_level = 3;
        }
        $approver_level;
        return $this->ApproverDetails = ApproverMaster::select(
            "receiver_$approver_level as Approver",
            DB::raw('CONCAT(users.LastNameJap," ", users.FirstNameJap) as ApproverFullNameJap'),
            DB::raw('CONCAT(users.LastNameEng," ", users.FirstNameEng) as ApproverFullNameEng'),
            'users.Email'
        )
            ->where('payer_code', substr($MpaNo, 0, 2))
            ->join('users', 'users.EmployeeID', "list_approvers.receiver_$approver_level")
            ->first();
    }

    public function ApproveEmailBody($MpaNo)
    {
        $this->MpaNo = $MpaNo;
        $this->GetDetails();
        $this->CreateSubject();

        $this->EmailBody .= "機械設備の発注が承認されました<br/>";
        $this->EmailBody .= "発注を進めてください。<br/><br/>";
        $this->EmailBody .= "申請者： {$this->general_information->ApplicantFullNameJap}<br/>";
        $this->EmailBody .= "MPA No.: {$this->general_information->MpaNo}<br/>";
        $this->EmailBody .= "設備名称： {$this->items[0]->ItemNameJap}<br/>";
        $this->EmailBody .= "取引先名称： {$this->general_information->VendorNameJap}<br/>";
        $this->EmailBody .= "使用部署： {$this->general_information->DepartmentNameJap}<br/>";
        $this->EmailBody .= "承認者： {$this->ApproverDetails->ApproverFullNameJap}<br/><br/>";

        $this->EmailBody .= "URL: <a href='" . strtolower(explode('/', $_SERVER['SERVER_PROTOCOL'])[0]) . "://$_SERVER[HTTP_HOST]/application_list?MpaNo={$this->general_information->MpaNo}'>" . strtolower(explode('/', $_SERVER['SERVER_PROTOCOL'])[0]) . "://$_SERVER[HTTP_HOST]/application_list?MpaNo={$this->general_information->MpaNo}</a><br/><br/>";

        $this->EmailBody .= "The request was approved.<br/><br/>";
        $this->EmailBody .= "Applicant: {$this->general_information->ApplicantFullNameEng}<br/>";
        $this->EmailBody .= "MPA No.: {$this->general_information->MpaNo}<br/>";
        $this->EmailBody .= "ITEM NAME： {$this->items[0]->ItemNameEng}<br/>";
        $this->EmailBody .= "VENDOR NAME： {$this->general_information->VendorNameJap}<br/>";
        $this->EmailBody .= "DEPARTMENT： {$this->general_information->DepartmentNameEng}<br/>";
        $this->EmailBody .= "Approver: {$this->ApproverDetails->ApproverFullNameEng}<br/><br/>";


        $this->to[] = $this->ApproverDetails->email;
        $this->cc[] = $this->general_information->ApplicantEmail;
        $this->cc[] = $this->MonitorEmail;
        $this->from[] = $this->general_information->ApplicantEmail;
        return $this->EmailBody;
    }

    public function RegisterApplicationEmailBody($MpaNo)
    {
        $this->MpaNo = $MpaNo;
        $this->GetDetails();
        $this->CreateSubject();

        $this->EmailBody .= "機械設備の発注承認依頼が届きました。<br><br>";
        $this->EmailBody .= "申請者： {$this->general_information->ApplicantFullNameJap}<br>";
        $this->EmailBody .= "MPA No.:  {$this->general_information->MpaNo}<br>";
        foreach ($this->items as $key => $val) {
            $this->EmailBody .= "設備名称：$val->ItemNameJap<br>";
        }

        $this->EmailBody .= "取引先名称：{$this->general_information->VendorNameJap}<br>";
        $this->EmailBody .= "使用部署： {$this->general_information->DepartmentNameJap}<br><br>";

        $this->EmailBody .= "URL: <a href='" . strtolower(explode('/', $_SERVER['SERVER_PROTOCOL'])[0]) . "://$_SERVER[HTTP_HOST]/application_list?MpaNo={$this->general_information->MpaNo}'>" . strtolower(explode('/', $_SERVER['SERVER_PROTOCOL'])[0]) . "://$_SERVER[HTTP_HOST]/application_list?MpaNo={$this->general_information->MpaNo}</a>";
        // dd($this->ApproverDetails);
        $this->to[] = $this->ApproverDetails->email;
        $this->cc[] = $this->general_information->ApplicantEmail;
        $this->cc[] = $this->MonitorEmail;
        $this->from[] = $this->general_information->ApplicantEmail;
    }
}
