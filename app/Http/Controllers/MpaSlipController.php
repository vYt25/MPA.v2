<?php

namespace App\Http\Controllers;

use PDF;
use App\Item;
use App\GeneralInformation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MpaSlipController extends Controller
{
    public function MpaSlip(Request $req)
    {
        $query = $req->input('q');
        $MpaNo = DB::select("SELECT * FROM (SELECT MD5(MpaNo) as Hash, MpaNo FROM general_informations) as A where A.Hash = '{$query}'")[0]->MpaNo;
        // return $MpaNo;
        $html = "<h1>$MpaNo</h1>";

        PDF::SetTitle($MpaNo);
        PDF::AddPage();
        PDF::writeHTML($html, true, false, true, false, '');

        PDF::Output('hello_world.pdf');
    }

    public function test(Request $req)
    {
        $query = $req->input('q');
        $val = DB::select("SELECT * FROM (SELECT MD5(MpaNo) as Hash, MpaNo FROM general_informations) as A where A.Hash = '{$query}'");
        if (count($val) == 0) {
            return abort(404);
        }
        $MpaNo = DB::select("SELECT * FROM (SELECT MD5(MpaNo) as Hash, MpaNo FROM general_informations) as A where A.Hash = '{$query}'")[0]->MpaNo;


        $query = "
        Select 
            DISTINCT(Final.MpaNo),     
            Final.*,
            payers.payer_company_name as PayerCompanyName,
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
                    WHERE A.Status NOT IN (2,3)) as Main 
                    LEFT JOIN list_approvers ON list_approvers.payer_code = Main.PayerCompanyCode
                ) AS Final
                LEFT JOIN users  as AP ON AP.EmployeeID = Final.ApproverF
                JOIN payers ON payers.payer_code = Final.PayerCompanyCode
                WHERE Final.MpaNo = '$MpaNo'";

        $general_informations = DB::select($query)[0];
        //$general_informations->PayerCompanyName;
        // $company = DB::select("Select payer_company_name from maindrafts m INNER JOIN
        // payers p ON m.payer_name = p.payer_name where m.mpa_no = '{$mpa}'");

        // $supplier = DB::table('maindrafts')->join('approvers', 'maindrafts.approver', '=', 'approvers.id')
        //     ->join('users', 'approvers.email', '=', 'users.email')
        //     ->where('mpa_no', '=', $mpa)->get(['maindrafts.vendor_name_en', 'maindrafts.applicant', 'users.first_name_en', 'users.last_name_en']);
        // $item = DB::table('mainfacility')->where('mpa_no', '=', $mpa)->get();
        $item = Item::select('items.*', 'departments.AccountingCode', 'departments.DepartmentNameEng')->where('MpaNo', $MpaNo)->join('departments', 'departments.id', 'items.DepartmentCode')->get();
        $x = date('M d, Y');
        define('COMPANY', $general_informations->PayerCompanyName);
        define('MPANO', $MpaNo);
        define('SUPPLIER', $general_informations->VendorNameEng);
        define('APPLICANT', $general_informations->ApplicantFullNameEng);
        define('APPROVER', $general_informations->ApproverFullNameEng);

        PDF::setHeaderCallback(function ($pdf) {
            $pdf->SetY(15);
            // Set font
            $pdf->SetFont('helvetica', 'B', 25);
            // Title
            // $pdf->Cell(100, 100, COMPANY, 0, false, 'C', 0, '', 0, false, 'M', 'M');
            $pdf->Cell(0, 100, COMPANY, 0, false, 'L', 0, '', 0, false, 'M', 'M');


            $pdf->SetY(5);
            // Set font
            $pdf->SetFont('helvetica', 'B', 10);
            // Title
            $pdf->Cell(475, 100, "ISO No.", 0, false, 'C', 0, '', 0, false, 'M', 'M');

            $pdf->SetY(5);
            // Set font
            $pdf->SetFont('helvetica', 'B', 10);
            // Title
            $pdf->Cell(500, 100, "___________________", 0, false, 'C', 0, '', 0, false, 'M', 'M');


            $pdf->SetY(15);
            // Set font
            $pdf->SetFont('helvetica', 'B', 25);
            // Title
            $pdf->Cell(500, 100, "MPA Slip", 0, false, 'C', 0, '', 0, false, 'M', 'M');


            $pdf->SetY(25);
            // Set font
            $pdf->SetFont('helvetica', false, 12);
            // Title
            $pdf->Cell(430, 100, "Machineries Tools and Equipments Purchase Application", 0, false, 'C', 0, '', 0, false, 'M', 'M');


            $pdf->SetY(35);
            // Set font
            $pdf->SetFont('helvetica', false, 12);
            // Title
            $pdf->Cell(10, 100, "Date: ", 0, false, 'C', 0, '', 0, false, 'M', 'M');


            $pdf->SetY(35);
            // Set font
            $pdf->SetFont('helvetica', false, 12);
            // Title
            $pdf->Cell(50, 100, date('d-M-Y'), 0, false, 'C', 0, '', 0, false, 'M', 'M');


            $pdf->SetY(35);
            // Set font
            $pdf->SetFont('helvetica', false, 12);
            // Title
            $pdf->Cell(530, 100, $pdf->getAliasNumPage() . ' / ' . $pdf->getAliasNbPages(), 0, false, 'C', 0, '', 0, false, 'M', 'M');

            $pdf->SetY(36);
            // Set font
            $pdf->SetFont('helvetica', false, 12);
            // Title
            $pdf->Cell(510, 100, "____________", 0, false, 'C', 0, '', 0, false, 'M', 'M');


            $pdf->SetY(40);
            // Set font
            $pdf->SetFont('helvetica', false, 12);
            // Title
            $pdf->Cell(17, 100, 'MPA No: ', 0, false, 'C', 0, '', 0, false, 'M', 'M');


            $pdf->SetY(40);
            // Set font
            $pdf->SetFont('helvetica', false, 12);
            // Title
            $pdf->Cell(60, 100, MPANO, 0, false, 'C', 0, '', 0, false, 'M', 'M');


            $pdf->SetY(45);
            // Set font
            $pdf->SetFont('helvetica', false, 12);
            // Title
            $pdf->Cell(17, 100, 'Supplier: ', 0, false, 'C', 0, '', 0, false, 'M', 'M');


            $pdf->SetY(45);
            // Set font
            $pdf->SetFont('helvetica', false, 12);
            // Title
            $pdf->Cell(25, 100, "               " . SUPPLIER, 0, false, 'L', 0, '', 0, false, 'M', 'M');


            $pdf->SetY(55);
            // Set font
            $pdf->SetFont('helvetica', false, 12);
            // Title
            $pdf->Cell(249, 100, "Either this form or Purchase Requisition Slip must be submitted to Engineering Department for the preparation of Installation Process.", 0, false, 'C', 0, '', 0, false, 'M', 'M');
        });
        $html = "<table style=\"width:100%\">
        <thead>
            <tr>
                <th style=\"line-height:17px;text-align:center;height:20px;width:40px;border:1px solid black\">No.</th>
                <th style=\"line-height:17px;text-align:center;width:120px;border:1px solid black\">Code</th>
                <th style=\"line-height:17px;text-align:center;width:380px;border:1px solid black\">Item Name</th>
                <th style=\"line-height:17px;text-align:center;width:70px;border:1px solid black\">Qty</th>
                <th style=\"line-height:17px;text-align:center;width:160px;border:1px solid black\">Department</th>
            </tr>
        </thead>
        <tbody>";

        for ($i = 0; $i < count($item); $i++) {
            $html .= "<tr>
                                            <td style=\"text-align:center;border:1px solid black;width:40px\">" . ($i + 1) . "</td>
                                            <td style=\"border:1px solid black;width:120px\">{$item[$i]->ItemID}</td>
                                            <td style=\"border:1px solid black;width:380px\">{$item[$i]->ItemNameEng}</td>
                                            <td style=\"text-align:center;border:1px solid black;width:70px\">{$item[$i]->Quantity}</td>
                                            <td style=\"text-align:center;border:1px solid black;width:160px\"> {$item[$i]->DepartmentNameEng}
                                            </td>
                                        </tr>";
        }
        // $x = 13 - count($item);

        // for ($y = 1; $y < $x; $y++) {
        //     $html .= "
        //             <tr>
        //                 <td></td>
        //             </tr>
        //             ";
        // }
        // $getAttention = Department::select(DB::raw('CONCAT(users.first_name_en," ",users.last_name_en) as fullName'))
        //     ->join('users', 'departments.attention', '=', 'users.email')
        //     ->where('departments.accounting_code', substr($mpa, 2, 2));
        // if (substr($mpa, 0, 2) != 'HS') {
        //     $getAttention->where('departments.payer_code', substr($mpa, 0, 2));
        // }
        // $attention = $getAttention->first();

        $html .= "
        </tbody>
                </table>
                <div></div>
                <table border=\"0.5\" style=\"width: 45%\" nobr=\"true\">
            <thead>
                <tr>
                    <th>Attachment Checklist</th>
                    <th>Due Date Of Submission</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Machine/Facility Request Form</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Facility Job Order Form</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Gantt Chart</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Machine/Facility Lay-out</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Temporary Location</td>
                    <td></td>
                </tr>
            </tbody>
        </table>";

        // "<table border=\"0.5\" style=\"width: 45%\">
        //     <thead>
        //         <tr>
        //             <th>Attachment Checklist</th>
        //             <th>Due Date Of Submission</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //             <td>Machine/Facility Request Form</td>
        //             <td></td>
        //         </tr>
        //         <tr>
        //             <td>Facility Job Order Form</td>
        //             <td></td>
        //         </tr>
        //         <tr>
        //             <td>Gantt Chart</td>
        //             <td></td>
        //         </tr>
        //         <tr>
        //             <td>Machine/Facility Lay-out</td>
        //             <td></td>
        //         </tr>
        //         <tr>
        //             <td>Temporary Location</td>
        //             <td></td>
        //         </tr>
        //     </tbody>
        // </table>
        // <div></div>
        // <table>
        //     <tr>
        //         <td  colspan=\"2\"></td>
        //         <td style=\"width:188px\" colspan=\"2\"></td>
        //         <td style=\"width:190px\" colspan=\"2\">Prepared By</td>
        //         <td style=\"width:180px\" colspan=\"2\">Recieved By:</td>
        //     </tr>
        //     <tr>
        //         <td style=\"width:193px\" colspan=\"2\">Requestor:</td>
        //         <td style=\"width:193px\" colspan=\"2\">Approver:</td>
        //         <td style=\"width:193px\" colspan=\"2\"> Division Approval:</td>
        //         <td style=\"width:193px\" colspan=\"2\">(Engineering or Maintainance)</td>
        //     </tr>
        //     <br><br>
        //     <tr>
        //         <td style=\"text-align:center;width:150px;border-bottom:1px solid black\">" . strtoupper($general_informations->ApplicantFullNameEng) . "</td>
        //         <td style=\"width:43px\"></td>
        //         <td style=\"text-align:center;width:150px;border-bottom:1px solid black\">{$general_informations->ApproverFullNameEng} </td>
        //         <td style=\"width:43px\"></td>
        //         <td style=\"text-align:center;width:150px;border-bottom:1px solid black\"></td>
        //         <td style=\"width:43px\"></td>
        //         <td style=\"text-align:center;width:150px;border-bottom:1px solid black\"></td>
        //         <td style=\"width:43px\"></td>
        //     </tr>
        //     <tr>
        //         <td style=\"text-align:center;width:150px;\"></td>
        //         <td style=\"width:43px\"></td>
        //         <td style=\"text-align:center;width:150px;\"> </td>
        //         <td style=\"width:43px\"></td>
        //         <td style=\"text-align:center;width:150px;font-size:8px\">Signature Over Printed Name(JA or DH)</td>
        //         <td style=\"width:43px\"></td>
        //         <td style=\"text-align:center;width:150px;font-size:8px\">Signature Over Printed Name</td>
        //         <td style=\"width:43px\"></td>
        //     </tr>
        // </table>

        // ";

        PDF::setFooterCallback(function ($pdf) {

            if ((int)$pdf->getAliasNumPage() == (int)$pdf->getAliasNbPages()) {

                $pdf->SetY(175);
                // Set font
                $pdf->SetFont('helvetica', false, 12);
                // Title
                $pdf->Cell(25, 100, "Requestor:", 0, false, 'C', 0, '', 0, false, 'M', 'M');

                $pdf->SetY(193);
                // Set font
                $pdf->SetFont('helvetica', false, 12);
                // Title
                $pdf->Cell(65, 100, APPLICANT, 0, false, 'C', 0, '', 0, false, 'M', 'M');

                $pdf->SetY(195);
                // Set font
                $pdf->SetFont('helvetica', false, 12);
                // Title
                $pdf->Cell(65, 100, "_________________________", 0, false, 'C', 0, '', 0, false, 'M', 'M');


                $pdf->SetY(175);
                // Set font
                $pdf->SetFont('helvetica', false, 12);
                // Title
                $pdf->Cell(160, 100, "Approver:", 0, false, 'C', 0, '', 0, false, 'M', 'M');

                $pdf->SetY(193);
                // Set font
                $pdf->SetFont('helvetica', false, 12);
                // Title
                $pdf->Cell(200, 100, APPROVER, 0, false, 'C', 0, '', 0, false, 'M', 'M');

                $pdf->SetY(195);
                // Set font
                $pdf->SetFont('helvetica', false, 12);
                // Title
                $pdf->Cell(200, 100, "_________________________", 0, false, 'C', 0, '', 0, false, 'M', 'M');



                $pdf->SetY(170);
                // Set font
                $pdf->SetFont('helvetica', false, 12);
                // Title
                $pdf->Cell(300, 100, "Prepared By", 0, false, 'C', 0, '', 0, false, 'M', 'M');

                $pdf->SetY(175);
                // Set font
                $pdf->SetFont('helvetica', false, 12);
                // Title
                $pdf->Cell(310, 100, "Division Approval:", 0, false, 'C', 0, '', 0, false, 'M', 'M');

                // $pdf->SetY(193);
                // // Set font
                // $pdf->SetFont('helvetica', false, 12);
                // // Title
                // $pdf->Cell(335, 100, "Division Approval", 0, false, 'C', 0, '', 0, false, 'M', 'M');

                $pdf->SetY(195);
                // Set font
                $pdf->SetFont('helvetica', false, 9);
                // Title
                $pdf->Cell(375, 100, "Date & Time", 0, false, 'C', 0, '', 0, false, 'M', 'M');

                $pdf->SetY(195);
                // Set font
                $pdf->SetFont('helvetica', false, 12);
                // Title
                $pdf->Cell(335, 100, "_________________________", 0, false, 'C', 0, '', 0, false, 'M', 'M');

                $pdf->SetY(199);
                // Set font
                $pdf->SetFont('helvetica', false, 9);
                // Title
                $pdf->Cell(335, 100, "Signature Over Printed name (JA or DH)", 0, false, 'C', 0, '', 0, false, 'M', 'M');



                $pdf->SetY(170);
                // Set font
                $pdf->SetFont('helvetica', false, 12);
                // Title
                $pdf->Cell(443, 100, "Received By", 0, false, 'C', 0, '', 0, false, 'M', 'M');

                $pdf->SetY(175);
                // Set font
                $pdf->SetFont('helvetica', false, 12);
                // Title
                $pdf->Cell(475, 100, "(Engineering or Maintainance)", 0, false, 'C', 0, '', 0, false, 'M', 'M');

                // $pdf->SetY(193);
                // // Set font
                // $pdf->SetFont('helvetica', false, 12);
                // // Title
                // $pdf->Cell(475, 100, "Test", 0, false, 'C', 0, '', 0, false, 'M', 'M');


                $pdf->SetY(195);
                // Set font
                $pdf->SetFont('helvetica', false, 9);
                // Title
                $pdf->Cell(515, 100, "Date & Time", 0, false, 'C', 0, '', 0, false, 'M', 'M');

                $pdf->SetY(195);
                // Set font
                $pdf->SetFont('helvetica', false, 12);
                // Title
                $pdf->Cell(475, 100, "_________________________", 0, false, 'C', 0, '', 0, false, 'M', 'M');

                $pdf->SetY(199);
                // Set font
                $pdf->SetFont('helvetica', false, 9);
                // Title
                $pdf->Cell(475, 100, "Signature Over Printed Name", 0, false, 'C', 0, '', 0, false, 'M', 'M');
            }
        });



        PDF::SetAutoPageBreak(TRUE, 45);
        PDF::SetTitle($MpaNo);
        PDF::SetPageOrientation('L');
        PDF::SetMargins(13, 63, 0, 0);
        PDF::AddPage();
        PDF::writeHTML($html, false, true, false, true, '');

        PDF::Output('mpa_pdf_report.pdf');
    }
}
