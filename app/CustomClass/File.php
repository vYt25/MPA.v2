<?php

namespace App\CustomClass;

use App\Attachment;
use App\BlAttachment;
use App\PoAttachment;
use App\InvoiceAttachment;
use Illuminate\Support\Facades\Storage;

class File
{

    public static function UploadPo($req)
    {
        $MpaNo = $req->MpaNo;
        // return $req->file('files');
        foreach ($req->file('files') as $key => $file) {
            $attachment = new PoAttachment;
            $attachment->MpaNo = $MpaNo;
            $attachment->Filename =  $file->getClientOriginalName();
            $attachment->save();
            Storage::disk('local')->put("public/$MpaNo/{$file->getClientOriginalName()}", file_get_contents($file->getRealPath()));
        }
    }

    public static function UploadInvoice($req)
    {
        $MpaNo = $req->MpaNo;
        $attachment = new InvoiceAttachment;
        foreach ($req->file('files') as $key => $file) {
            $attachment = new InvoiceAttachment;
            $attachment->MpaNo = $MpaNo;
            $attachment->Path =  $file->getClientOriginalName();
            $attachment->save();
            Storage::disk('local')->put("public/$MpaNo/{$file->getClientOriginalName()}", file_get_contents($file->getRealPath()));
        }
    }

    public static function UploadBl($req)
    {
        $MpaNo = $req->MpaNo;
        foreach ($req->file('files') as $key => $file) {
            $attachment = new BlAttachment;
            $attachment->MpaNo = $MpaNo;
            $attachment->Path =  $file->getClientOriginalName();
            $attachment->save();
            Storage::disk('local')->put("public/$MpaNo/{$file->getClientOriginalName()}", file_get_contents($file->getRealPath()));
        }
    }

    public static function Upload($req, $MpaNo)
    {
        $attachment =  new Attachment;
        foreach ($req->file('AttachmentFiles') as $file) {

            //INSERT TO ATTACHMENT TABLE
            $attachment->MpaNo = $MpaNo;
            $attachment->Attachment =  "$MpaNo.pdf";
            $attachment->save();

            //PUT ATTACHMENT TO STORAGE
            Storage::disk('local')->put("public/$MpaNo/$MpaNo.pdf", file_get_contents($file->getRealPath()));
        }
    }
}
