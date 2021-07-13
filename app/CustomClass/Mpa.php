<?php

namespace App\CustomClass;

use App\Items;
use App\Department;
use App\OtherInformation;
use App\GeneralInformation;
use App\PaymentSchedule;
use Illuminate\Support\Facades\DB;

class Mpa
{

    protected $req, $MpaNo;

    public function __construct($req)
    {
        $this->req = $req;
    }

    public function CreateSerial()
    {
        $values = $this->req;

        // GET DATA NEEDED TO GENERATE MPA NO
        $department = Department::where('id', $values->general_informations->DepartmentCode)->first();
        $serial =  GeneralInformation::select(DB::raw('max(id)+1 as serial'))->first()->serial;

        // MPA GENERATE
        $MpaNo = '';
        if (isset($values->general_informations->HrdSingapore) && $values->general_informations->HrdSingapore) {
            $MpaNo .= "HS";
        } else {
            $MpaNo .= $values->general_informations->PayerCompanyCode;
        }
        $MpaNo .= $department->AccountingCode;
        $MpaNo .= date('y');

        for ($x = 0; $x < 4 - strlen($serial); $x++) {
            $MpaNo .= "0";
        }
        $MpaNo .= $serial;

        $this->MpaNo = $MpaNo;

        return $MpaNo;
    }

    public function SaveApplication()
    {
        try {
            DB::beginTransaction();
            $this->SaveGeneralInformations();
            $this->SaveItems();
            $this->SaveOtherCosts();
            $this->SavePaymentSchedules();
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            echo $e->getMessage();
        }
    }

    public function TotalPriceJPY()
    {
        $items = $this->req->items;
        $TotalPriceJPY = 0;
        $items =  json_decode(json_encode($items));
        foreach ($items as $item) {

            $UnitPrice = !strpos($item->UnitPrice, ',') ? (int)$item->UnitPrice : (int)implode('', explode(',', $item->UnitPrice));
            $Quantity =  !strpos($item->Quantity, ',') ? (int)$item->Quantity : (int)implode('', explode(',', $item->Quantity));

            if ($item->Currency == 'JPY') {
                $TotalPriceJPY += ($UnitPrice *  $Quantity);
            }
            if ($item->Currency == 'USD') {
                $TotalPriceJPY += ($UnitPrice * $Quantity) * 100;
            }
            if ($item->Currency == 'EUR') {
                $TotalPriceJPY += ($UnitPrice * $Quantity) * 133.333333333333;
            }
            if ($item->Currency == 'PHP') {
                $TotalPriceJPY += ($UnitPrice * $Quantity) * 2;
            }
            if ($item->Currency == 'TWD') {
                $TotalPriceJPY += ($UnitPrice * $Quantity) * 3.333333333333;
            }
        }

        return $TotalPriceJPY;
    }

    public function SaveGeneralInformations()
    {
        $values = $this->req->general_informations;
        $GeneralInformation = new GeneralInformation;
        $GeneralInformation->MpaNo = $this->MpaNo;
        $GeneralInformation->Status = 0;
        $GeneralInformation->Applicant =  $values->Applicant;
        $GeneralInformation->TotalPriceJPY = $this->TotalPriceJPY();
        $GeneralInformation->NihonSangyou = (isset($values->NihonSangyou) &&  $values->NihonSangyou) ? 1 : 0;
        $GeneralInformation->VendorNameEng =  $values->VendorNameEng;
        $GeneralInformation->VendorNameJap =  $values->VendorNameJap;

        if (isset($values->HrdSingapore) && $values->HrdSingapore) {
            $GeneralInformation->PayerCompanyCode = "HS";
        } else {
            $GeneralInformation->PayerCompanyCode =  $values->PayerCompanyCode;
        }

        $GeneralInformation->DepartmentCode =  $values->DepartmentCode;
        $GeneralInformation->Purpose =  $values->Purpose;
        $GeneralInformation->Ratio = 100;
        $GeneralInformation->TradeTermCode =  $values->TradeTermCode;
        $GeneralInformation->SubmissionMatters = isset($values->SubmissionMatters) ? $values->SubmissionMatters : null;
        if (isset($values->QuotedPrice) && $values->NihonSangyou) {
            $GeneralInformation->QuotedPrice = $values->QuotedPrice;
        }
        $GeneralInformation->save();
    }
    public function SaveItems()
    {
        $Items =  new Items;
        $items = $this->req->items;
        foreach ($items as $item) {
            $Items->MpaNo =  $this->MpaNo;
            $Items->ItemNameEng =  $item->ItemNameEng;
            $Items->ItemNameJap =  $item->ItemNameJap;
            $Items->DepartmentCode =  $item->DepartmentCode;
            $Items->ItemID =  isset($item->ItemID) ? $item->ItemID : null;
            $Items->UnitPrice =  !strpos($item->UnitPrice, ',') ? (int)$item->UnitPrice : (int)implode('', explode(',', $item->UnitPrice));
            $Items->Quantity =  !strpos($item->Quantity, ',') ? (int)$item->Quantity : (int)implode('', explode(',', $item->Quantity));
            $Items->Currency =  $item->Currency;
            $Items->save();
        }
    }
    public function SaveOtherCosts()
    {
        $values = (object)$this->req->other_informations;
        $OtherInformation = new OtherInformation;
        $OtherInformation->MpaNo = $this->MpaNo;

        $OtherInformation->PackingExpenseStatus = $values->PackingExpenseStatus;
        $OtherInformation->DistributionExpenseStatus = $values->DistributionExpenseStatus;
        $OtherInformation->InstallationExpenseStatus = $values->InstallationExpenseStatus;
        $OtherInformation->OtherExpenseStatus = $values->OtherExpenseStatus;

        $OtherInformation->PackingExpenseAmount = isset($values->PackingExpenseAmount) ?  implode('', explode(',', $values->PackingExpenseAmount)) : 0;
        $OtherInformation->DistributionExpenseAmount =  isset($values->PackingExpenseAmount) ? implode('', explode(',', $values->DistributionExpenseAmount)) : 0;
        $OtherInformation->InstallationExpenseAmount =  isset($values->PackingExpenseAmount) ? implode('', explode(',', $values->InstallationExpenseAmount)) : 0;
        $OtherInformation->OtherExpenseAmount =  isset($values->PackingExpenseAmount) ? implode('', explode(',', $values->OtherExpenseAmount)) : 0;

        $OtherInformation->PackingExpenseCurrency = isset($values->PackingExpenseCurrency) ? $values->PackingExpenseCurrency : null;
        $OtherInformation->DistributionExpenseCurrency = isset($values->DistributionExpenseCurrency) ? $values->DistributionExpenseCurrency : null;
        $OtherInformation->InstallationExpenseCurrency = isset($values->InstallationExpenseCurrency) ? $values->InstallationExpenseCurrency : null;
        $OtherInformation->OtherExpenseCurrency = isset($values->OtherExpenseCurrency) ? $values->OtherExpenseCurrency : null;

        $OtherInformation->save();
    }
    public function SavePaymentSchedules()
    {

        $values = $this->req->payment_schedules;
        $values->NihonSangyou = isset($this->req->general_informations->NihonSangyou) ? $this->req->general_informations->NihonSangyou : false;
        // return dd(!$values->NihonSangyou);
        $PaymentSchedules = new PaymentSchedule;
        if (!$values->NihonSangyou) {
            $PaymentSchedules->MpaNo = $this->MpaNo;
            if ($values->PoRatio > 0) {
                $PaymentSchedules->PoSchedule = $values->PoSchedule;
                $PaymentSchedules->PoMonth = $values->PoMonth;
                $PaymentSchedules->PoRatio = $values->PoRatio;
                $PaymentSchedules->PoDue = $values->PoDue;
            }

            if ($values->RecievingBlRatio > 0) {
                $PaymentSchedules->RecievingBlSchedule = $values->RecievingBlSchedule;
                $PaymentSchedules->RecievingBlMonth = $values->RecievingBlMonth;
                $PaymentSchedules->RecievingBlRatio = $values->RecievingBlRatio;
                $PaymentSchedules->RecievingBlDue = $values->RecievingBlDue;
            }

            if ($values->InspectionRatio > 0) {
                $PaymentSchedules->InspectionSchedule = $values->InspectionSchedule;
                $PaymentSchedules->InspectionMonth = $values->InspectionMonth;
                $PaymentSchedules->InspectionRatio = $values->InspectionRatio;
                $PaymentSchedules->InspectionDue = $values->InspectionDue;
            }

            if ($values->OthersRatio > 0) {
                $PaymentSchedules->OthersSchedule = $values->OthersSchedule;
                $PaymentSchedules->OthersMonth = $values->OthersMonth;
                $PaymentSchedules->OthersRatio = $values->OthersRatio;
                $PaymentSchedules->OthersDue = $values->OthersDue;
            }
            $PaymentSchedules->save();
        }
    }
}
