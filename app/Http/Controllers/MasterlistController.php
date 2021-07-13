<?php

namespace App\Http\Controllers;

use App\Month;
use App\Payer;
use App\Status;
use App\Approver;
use App\Currency;
use App\Schedule;
use App\TradeTerm;
use App\Department;
use App\PaymentDue;
use App\QuotationStatus;
use Illuminate\Http\Request;

class MasterlistController extends Controller
{
    public function getMasterLists()
    {
        return [
            "approvers" => Approver::all(),
            "currencies" => Currency::all(),
            "departments" => Department::all(),
            "months" => Month::all(),
            "payers" => Payer::where('payer_code', "!=", 'HS')->get(),
            "payment_dues" => PaymentDue::all(),
            "schedules" => Schedule::all(),
            "quotation_statuses" => QuotationStatus::all(),
            "trade_terms" => TradeTerm::all(),
            'status' => Status::whereIn('status_id', [1, 0])->get()
        ];
    }
}
