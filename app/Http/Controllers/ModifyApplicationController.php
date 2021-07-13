<?php

namespace App\Http\Controllers;

use App\Reason;
use App\CustomClass\Email;
use App\CustomClass\Update;
use App\GeneralInformation;
use Illuminate\Http\Request;
use App\Mail\AfterProcessMail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;


class ModifyApplicationController extends Controller
{
    public function CancelApplication(Request $req)
    {



        $GI = GeneralInformation::where('MpaNo', $req->MpaNo)->first();
        $GI->Status = 3;
        $GI->save();

        $cr = new Reason;
        $cr->MpaNo = $req->MpaNo;
        $cr->Reason = $req->reason;
        $cr->save();

        $email = new Email;

        $email->CancelApplicationEmailBody($req->MpaNo, $req->reason);
        $recipient = $email->CancelApplicationEmailRecipient($req->MpaNo);

        Mail::to($recipient->to)->cc($recipient->cc)->send(new AfterProcessMail($email));

        // Mail::to('sd1test@hrd-s.com')->cc('sd1test@hrd-s.com')->send(new AfterProcessMail($email));
    }

    public function UpdateApplication(Request $req)
    {
        $update = new Update($req);
        $update->checkModifiedFields();
        $update->saveHistory();

        // return false;

        try {
            DB::beginTransaction();

            $update->reason();
            $update->general_informations();
            $update->items();
            $update->other_informations();
            $update->payment_schedules();
            $email = new Email;
            $email->ModifyApplicationEmailBody($req->general_informations['MpaNo'], $update);
            $recipient = $email->ModifyApplicationEmailRecipient($req->general_informations['MpaNo'], $update);

            Mail::to($recipient->to)->cc($recipient->cc)->send(new AfterProcessMail($email));
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            echo $e->getMessage();
        }
    }
}
