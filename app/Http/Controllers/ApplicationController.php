<?php

namespace App\Http\Controllers;


use App\Item;
use App\User;
use App\Draft;
use App\Items;
use App\BlAttachment;
use App\CustomClass\Mpa;
use App\PaymentSchedule;
use App\CustomClass\File;
use App\OtherInformation;
use App\CustomClass\Email;
use App\InvoiceAttachment;
use App\GeneralInformation;
use Illuminate\Http\Request;
use App\Mail\AfterProcessMail;
use App\PoAttachment;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class ApplicationController extends Controller
{

    public function DeleteBlAttachment(Request $req)
    {
        $Attachment = BlAttachment::find($req->BlAttachmentID);
        $Attachment->delete();
    }

    public function DeleteInvoiceAttachment(Request $req)
    {
        $Attachment = InvoiceAttachment::find($req->InAttachmentID);
        $Attachment->delete();
    }

    public function DeletePoAttachment(Request $req)
    {
        $Attachment = PoAttachment::find($req->PoAttachmentID);
        $Attachment->delete();
    }

    public function UploadPo(Request $req)
    {
        // return $req;
        return File::UploadPo($req);

        foreach ($req->file('files') as $val) {
            return $val->getClientOriginalName();
        };
    }

    public function DeleteAttachment(Request $req)
    {
        // return $req;
        if ($req->type == 'invoice') {
            $inv = InvoiceAttachment::find($req->id);
            $inv->delete();
        } else {
            $bl = BlAttachment::find($req->id);
            $bl->delete();
        }
    }

    public function UploadInvoice(Request $req)
    {
        // return $req->file('files');
        return File::UploadInvoice($req);
        // return $req->MpaNo;
    }

    public function UploadBl(Request $req)
    {
        // return $req->file('files');

        return File::UploadBl($req);
        // return $req->MpaNo;

        // foreach ($req->file('bl') as $file) {
        //     echo $file->getClientOriginalName() . "<br>";
        // }
    }

    public function ConfirmDoneInspection(Request $req)
    {
        $GI = GeneralInformation::where('MpaNo', $req->MpaNo)->first();
        $GI->InspectedBy = $req->EmployeeID;
        $GI->InspectionDate = date('Y-m-d H:i:s');
        $GI->save();
    }

    public function GetApplicationDetails(Request $req)
    {
        return [
            "general_informations" => GeneralInformation::where('MpaNo', $req->MpaNo)->first(),
            "items" => Item::where('MpaNo', $req->MpaNo)->get(),
            "other_informations" => OtherInformation::where('MpaNo', $req->MpaNo)->first(),
            "payment_schedules" => PaymentSchedule::where('MpaNo', $req->MpaNo)->first(),
        ];
    }

    public function SearchApplicationItems(Request $req)
    {
        $MpaNos = [];
        $MpaNos2 = [];
        $FinalMpaNos = [];
        if (isset($req->ItemName)) {
            $items = Items::select('MpaNo')->where('ItemNameEng', 'LIKE', "%$req->ItemName%")->orWhere('ItemNameJap', 'LIKE', "%$req->ItemName%")->distinct('MpaNo')->get()->toArray();
            $MpaNos = array_column($items, 'MpaNo');
        }
        if (isset($req->VendorName)) {
            $MpaNos2 =  GeneralInformation::select('MpaNo')->where('VendorNameEng', 'LIKE', "%$req->VendorName%")->orWhere('VendorNameJap', 'LIKE', "%$req->VendorName%")->distinct('MpaNo')->get()->toArray();
            $MpaNos2 = array_column($MpaNos2, 'MpaNo');
        }

        $FinalMpaNos = array_unique(array_merge($MpaNos, $MpaNos2));
        return GeneralInformation::select(
            'general_informations.id',
            'general_informations.MpaNo',
            'general_informations.VendorNameEng',
            'general_informations.VendorNameJap',
            'items.ItemNameJap',
            'items.ItemNameEng',
            'items.ItemID'
        )->join('items', 'items.MpaNo', 'general_informations.MpaNo')
            ->whereIn('general_informations.MpaNo', $FinalMpaNos)
            ->distinct('general_informations.MpaNo')
            ->get();
    }

    public function DeleteDraft(Request $req)
    {
        $draft = Draft::find($req->DraftID);
        $draft->deleted_at = date('Y-m-d H:i:s');
        $draft->save();
    }

    public function getDate()
    {
        return date('Y/m/d');
    }

    public function GetDrafts(Request $req)
    {
        return Draft::where('EmployeeID', $req->EmployeeID)->where('deleted_at', null)->orderBy('id', 'desc')->get();
    }
    public function SaveDraft(Request $req)
    {
        $draft = new Draft;
        $draft->EmployeeID = $req->EmployeeID;
        $draft->Title = $req->draftName;
        $draft->general_informations = json_encode($req->general_informations);
        $draft->items = json_encode($req->items);
        $draft->other_informations = json_encode($req->other_informations);
        $draft->payment_schedules = json_encode($req->payment_schedule);
        $draft->save();
    }

    public function RegisterApplication(Request $req)
    {

        $Mpa = new Mpa(json_decode($req->values));

        $MpaNo =  $Mpa->CreateSerial();

        File::Upload($req,  $MpaNo);

        $Mpa->SaveApplication();

        $email = new Email;

        $email->RegisterApplicationEmailBody($MpaNo);
        $reciever =  $email->RegisterApplicationEmailRecipient($MpaNo);

        Mail::to($reciever->to)->cc($reciever->cc)->send(new AfterProcessMail($email));
        // Mail::to('sd1test@hrd-s.com')->cc('sd1test@hrd-s.com')->send(new AfterProcessMail($email));
    }
}
