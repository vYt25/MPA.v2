<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PaymentSchedule extends Model
{
    protected $fillable = [
        'MpaNo',
        'PoMonth',
        'PoSchedule',
        'PoRatio',
        'PoDue',
        'RecievingBlMonth',
        'RecievingBlSchedule',
        'RecievingBlRatio',
        'RecievingBlDue',
        'InspectionMonth',
        'InspectionSchedule',
        'InspectionRatio',
        'InspectionDue',
        'OthersTitle',
        'OthersMonth',
        'OthersSchedule',
        'OthersRatio',
        'OthersDue'
    ];
}
