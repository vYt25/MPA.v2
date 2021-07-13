<?php

namespace App\CustomClass;

use App\Item;
use App\Reason;
use App\History;
use App\CustomClass\Mpa;
use App\PaymentSchedule;
use App\OtherInformation;
use App\GeneralInformation;
use Illuminate\Support\Arr;

class Update
{
    public $req;
    protected $timestamp;

    public $general_informations, $general_informations_old, $general_informations_new;
    public $items_old, $items_new, $item_diff, $price_modified;
    public $other_informations, $other_informations_old, $other_informations_new;
    public $payment_schedules, $payment_schedules_old, $payment_schedules_new;

    public function __construct($req)
    {
        $this->req = $req;
        $this->timestamp = date('Y-m-d H:i:s');
    }

    public function saveHistory()
    {

        $history = new History;
        $history->MpaNo = $this->req->general_informations['MpaNo'];
        $history->GeneralInformations = json_encode($this->general_informations_old);
        $history->Items = json_encode($this->items_old);
        $history->OtherInformations = json_encode($this->other_informations_old);
        $history->PaymentSchedules = json_encode($this->payment_schedules_old);
        $history->RevisedFieldGeneralInformations = json_encode($this->general_informations);
        $history->RevisedFieldItems = json_encode($this->item_diff);
        $history->RevisedFieldOtherInformations = json_encode($this->other_informations);
        $history->RevisedFieldPaymentSchedules = json_encode($this->payment_schedules);
        $history->save();
    }


    public function ItemModified()
    {
        $req = $this->req;
        $gi_new = (object)$req->general_informations;

        $items = $req->items;
        foreach ($items as $key => $val) {
            $items[$key]['UnitPrice'] = (int)implode('', explode(',', $val['UnitPrice']));
        }
        $colC = collect(Arr::dot($items));
        $items_old = Item::where('MpaNo', $gi_new->MpaNo)->get()->toArray();
        $colD = collect(Arr::dot($items_old));
        $item_diff = $colC->diffAssoc($colD);

        $pricemodified = 0;
        foreach ($item_diff as $key => $val) {
            if (!!strrpos($key, "UnitPrice") || !!strrpos($key, "Currency") || !!strrpos($key, "Quantity")) {
                // $a =  explode('.', $key)[0];
                // $b =  explode('.', $key)[1];
                // echo $items_old[$a][$b] . '<br>';
                // echo $items[$a][$b];
                $pricemodified++;
            }
        }
        return (object)[
            "items_new" => $items,
            "items_old" => $items_old,
            "item_diff" => $item_diff,
            'price_modified' => $pricemodified
        ];
    }

    public function GeneralInformationsModified()
    {
        $req = $this->req;

        $gi_new = (object)$req->general_informations;
        $gi_new->NihonSangyou = $gi_new->NihonSangyou ? 1 : 0;
        unset($gi_new->ApplicantFullNameEng);
        unset($gi_new->ApplicantFullNameJap);
        unset($gi_new->Attachment);
        unset($gi_new->ItemNameEng);
        unset($gi_new->ItemNameJap);
        unset($gi_new->Approver);
        unset($gi_new->ApproverF);
        unset($gi_new->ApproverFullNameJap);
        unset($gi_new->ApproverFullNameEng);
        unset($gi_new->ApproverEmail);
        unset($gi_new->created_at);
        unset($gi_new->updated_at);

        $gi_old = GeneralInformation::find($gi_new->id);

        $this->general_informations_old = $gi_old;
        $this->general_informations_new = $gi_new;

        $collectionA = collect($gi_old);
        $collectionB = collect($gi_new);
        return $collectionB->diffAssoc($collectionA);
    }

    public function OtherInfoModified()
    {
        $req = $this->req;

        $gi_new = (object)$req->general_informations;

        $oi_new =  (object)$req->other_informations;
        $colE = collect($oi_new);
        $colF =  OtherInformation::where('MpaNo', $gi_new->MpaNo)->first();

        $this->other_informations_new = $colE;
        $this->other_informations_old = $colF;

        return $oi_diff =  $colE->diffAssoc($colF);
    }

    public function PaymentSchedModified()
    {
        $req = $this->req;

        $gi_new = (object)$req->general_informations;
        if ($gi_new->NihonSangyou == 0) {
            $ps_new =  (object)$req->payment_schedules;
            $colG = collect($ps_new);
            $colH = PaymentSchedule::where('MpaNo', $gi_new->MpaNo)->first();
            $this->payment_schedules_new = $colG;
            $this->payment_schedules_old = $colH;
            return $ps_diff =  $colG->diffAssoc($colH);
        } else {
            return [];
        }
    }

    public function checkModifiedFields()
    {
        $GeneralInformationFields =  $this->GeneralInformationsModified();
        $ItemFields = $this->ItemModified();
        $OtherInfoFields = $this->OtherInfoModified();
        $PaymentSchedFields = $this->PaymentSchedModified();

        $this->general_informations = $GeneralInformationFields;
        $this->items_new = $ItemFields->items_new;
        $this->items_old = $ItemFields->items_old;
        $this->item_diff = $ItemFields->item_diff;
        $this->price_modified = $ItemFields->price_modified;
        $this->other_informations = $OtherInfoFields;
        $this->payment_schedules = $PaymentSchedFields;
    }

    public function reason()
    {
        $req = $this->req;
        $reason = new Reason;
        $reason->MpaNo = $req->general_informations['MpaNo'];
        $reason->Reason = $req->Reason;
        $reason->Event = 'Update';
        $reason->save();
    }

    public function issetField($field)
    {
        return isset($field) ? $field : null;
    }

    public function payment_schedules()
    {
        $req = $this->req;
        if ($req->general_informations['NihonSangyou'] == 0) {
            $ps = (object)$req->payment_schedules;
            // return dd(isset($ps->PoMonth) ? $ps->PoMonth : null);
            PaymentSchedule::updateOrCreate(
                ['MpaNo' => $req->general_informations['MpaNo']],
                [
                    'MpaNo' => $req->general_informations['MpaNo'],
                    "PoMonth" => isset($ps->PoMonth) ? (int)$ps->PoMonth : null,
                    "PoSchedule" => isset($ps->PoSchedule) ? (int)$ps->PoSchedule : null,
                    "PoRatio" => isset($ps->PoRatio) ? (int)$ps->PoRatio : null,
                    "PoDue" => isset($ps->PoDue) ? (int)$ps->PoDue : null,
                    "RecievingBlMonth" => isset($ps->RecievingBlMonth) ? (int)$ps->RecievingBlMonth :  null,
                    "RecievingBlSchedule" => isset($ps->RecievingBlSchedule) ? (int)$ps->RecievingBlSchedule :  null,
                    "RecievingBlRatio" => isset($ps->RecievingBlRatio) ? (int)$ps->RecievingBlRatio :  null,
                    "RecievingBlDue" => isset($ps->RecievingBlDue) ? (int)$ps->RecievingBlDue :  null,
                    "InspectionMonth" => isset($ps->InspectionMonth) ? (int)$ps->InspectionMonth :  null,
                    "InspectionSchedule" => isset($ps->InspectionSchedule) ? (int)$ps->InspectionSchedule :  null,
                    "InspectionRatio" => isset($ps->InspectionRatio) ? (int)$ps->InspectionRatio :  null,
                    "InspectionDue" => isset($ps->InspectionDue) ? (int)$ps->InspectionDue :  null,
                    "OthersTitle" => isset($ps->OthersTitle) ? (string)$ps->OthersTitle :  null,
                    "OthersMonth" => isset($ps->OthersMonth) ? (int)$ps->OthersMonth :  null,
                    "OthersSchedule" => isset($ps->OthersSchedule) ? (int)$ps->OthersSchedule :  null,
                    "OthersRatio" => isset($ps->OthersRatio) ? (int)$ps->OthersRatio :  null,
                    "OthersDue" => isset($ps->OthersDue) ? (int)$ps->OthersDue :  null,
                    "created_at" => $this->timestamp,
                    "updated_at" => $this->timestamp
                ]
            );
        }
    }

    public function other_informations()
    {
        $req = $this->req;
        $oi = (object)$req->other_informations;
        $other_info = OtherInformation::find($oi->id);
        $other_info->PackingExpenseStatus = $oi->PackingExpenseStatus;
        $other_info->PackingExpenseCurrency = $oi->PackingExpenseCurrency;
        $other_info->PackingExpenseAmount = (int)implode('', explode(',', $oi->PackingExpenseAmount));
        $other_info->DistributionExpenseStatus = $oi->DistributionExpenseStatus;
        $other_info->DistributionExpenseCurrency = $oi->DistributionExpenseCurrency;
        $other_info->DistributionExpenseAmount = (int)implode('', explode(',', $oi->DistributionExpenseAmount));
        $other_info->InstallationExpenseStatus = $oi->InstallationExpenseStatus;
        $other_info->InstallationExpenseCurrency = $oi->InstallationExpenseCurrency;
        $other_info->InstallationExpenseAmount = (int)implode('', explode(',', $oi->InstallationExpenseAmount));
        $other_info->OtherExpenseStatus = $oi->OtherExpenseStatus;
        $other_info->OtherExpenseCurrency = $oi->OtherExpenseCurrency;
        $other_info->OtherExpenseAmount = (int)implode('', explode(',', $oi->OtherExpenseAmount));
        $other_info->updated_at = $this->timestamp;
        $other_info->save();
    }
    public function items()
    {
        $req = $this->req;
        $items =  json_decode(json_encode($req->items));
        foreach ($items as $key => $val) {
            $item = Item::find($val->id);
            $item->ItemNameEng = $val->ItemNameEng;
            $item->ItemNameJap = $val->ItemNameJap;
            $item->DepartmentCode = $val->DepartmentCode;
            $item->ItemID = $val->ItemID;
            $item->UnitPrice = (int)implode('', explode(',', $val->UnitPrice));
            $item->Quantity = $val->Quantity;
            $item->Currency = $val->Currency;
            $item->updated_at = $this->timestamp;
            $item->save();
        }
    }


    public function general_informations()
    {
        $req = $this->req;

        $mpa = new Mpa($req);

        $gi = (object)$req->general_informations;

        $GI = GeneralInformation::find($gi->id);
        $GI->TotalPriceJPY = $mpa->TotalPriceJPY();
        $GI->NihonSangyou = $gi->NihonSangyou;
        $GI->VendorNameEng = $gi->VendorNameEng;
        $GI->VendorNameJap = $gi->VendorNameJap;
        $GI->PayerCompanyCode = $gi->PayerCompanyCode;
        $GI->DepartmentCode = $gi->DepartmentCode;
        $GI->Purpose = $gi->Purpose;
        $GI->TradeTermCode = $gi->TradeTermCode;
        $GI->SubmissionMatters = $gi->SubmissionMatters;
        $GI->updated_at = $this->timestamp;
        if ($this->price_modified > 0) {
            $GI->Status = 0;
        }
        $GI->save();
    }
}
