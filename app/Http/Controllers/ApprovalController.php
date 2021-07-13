<?php

namespace App\Http\Controllers;

use App\Reason;
use App\CustomClass\Email;
use App\GeneralInformation;
use App\History;
use Illuminate\Http\Request;
use App\Mail\AfterProcessMail;
use Illuminate\Support\Facades\Mail;

class ApprovalController extends Controller
{
    public function MultipleDisapproveApplication(Request $req)
    {

        foreach ($req->MpaNos as $MpaNo) {
            $GI = GeneralInformation::where('MpaNo', $MpaNo)->first();
            $GI->Status = 2;
            $GI->save();

            $reason = new Reason;
            $reason->MpaNo =  $MpaNo;
            $reason->Reason = $req->ReasonForDisapproval;
            $reason->save();
            $email = new Email;
            $email->DisapproveEmailBody($MpaNo, $req->ReasonForDisapproval);
            $reciever =  $email->DisapproveEmailRecipient($MpaNo);

            Mail::to($reciever->to)->cc($reciever->cc)->send(new AfterProcessMail($email));

            // Mail::to('sd1test@hrd-s.com')->cc('sd1test@hrd-s.com')->send(new AfterProcessMail($email));

        }
    }

    public function DisapproveApplication(Request $req)
    {
        $GI = GeneralInformation::where('MpaNo', $req->MpaNo)->first();
        $GI->Status = 2;
        $GI->save();

        $reason = new Reason;
        $reason->MpaNo = $req->MpaNo;
        $reason->Reason = $req->ReasonForDisapproval;
        $reason->save();

        $email = new Email;
        $email->DisapproveEmailBody($req->MpaNo, $req->ReasonForDisapproval);
        $reciever =  $email->DisapproveEmailRecipient($req->MpaNo);

        Mail::to($reciever->to)->cc($reciever->cc)->send(new AfterProcessMail($email));
        // Mail::to('sd1test@hrd-s.com')->cc('sd1test@hrd-s.com')->send(new AfterProcessMail($email));
    }

    public function MultipleApproveApplication(Request $req)
    {
        foreach ($req->MpaNos as $MpaNo) {
            $GI = GeneralInformation::where('MpaNo', $MpaNo)->first();
            $GI->Status = 1;
            $GI->ApprovalDate = date('Y-m-d H:i:s');
            $GI->save();
            $email = new Email;
            $email->ApproveEmailBody($MpaNo);
            $reciever = $email->SuccessEmailRecipient($MpaNo);
            Mail::to($reciever->to)->cc($reciever->cc)->send(new AfterProcessMail($email));

            // Mail::to('sd1test@hrd-s.com')->cc('sd1test@hrd-s.com')->send(new AfterProcessMail($email));
        }
    }
    public function ApproveApplication(Request $req)
    {
        $history =  History::where('MpaNo', $req->MpaNo)->orderBy('id', 'desc')->first();
        $GI = GeneralInformation::where('MpaNo', $req->MpaNo)->first();

        $GI->Status = 1;
        $GI->ApprovalDate = date('Y-m-d H:i:s');
        $GI->save();


        $email = new Email;
        $MpaNo =  $req->MpaNo;
        if (isset($history->RevisedFieldItems)) {
            if (strpos($history->RevisedFieldItems, 'UnitPrice') !== false ||  strpos($history->RevisedFieldItems, 'Quantity')) {
                $email->ApproveEmailBodyWithPriceRevision($MpaNo, $history);
            } else {
                $email->ApproveEmailBody($MpaNo);
            }
        } else {
            $email->ApproveEmailBody($MpaNo);
        }

        $reciever = $email->SuccessEmailRecipient($MpaNo);

        Mail::to($reciever->to)->cc($reciever->cc)->send(new AfterProcessMail($email));
        // Mail::to('sd1test@hrd-s.com')->cc('sd1test@hrd-s.com')->send(new AfterProcessMail($email));
    }
}
