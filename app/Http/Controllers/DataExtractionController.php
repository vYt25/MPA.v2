<?php

namespace App\Http\Controllers;

use App\Item;
use App\Payer;
use Illuminate\Http\Request;
use App\Exports\ExcelExport;
use Maatwebsite\Excel\Facades\Excel;

class DataExtractionController extends Controller
{
    public function ExtractData(Request $req)
    {
        $dates = json_decode($req->input('dates'));
        $company = $req->input('company');
        $ForExtract =  $this->GetList(
            isset($dates[0]) && $dates[0] != 'null' ? $dates[0] : null,
            isset($dates[1]) && $dates[1] != 'null' ? $dates[1] : null,
            isset($company) && $company != 'null' ? $company : null
        );

        $data = [];
        for ($i = 0; $i <= 3; $i++) {
            $data[$i]['FA(MPA) No.'] = null;
            $data[$i]['MAKER'] = null;
            $data[$i]['SUPPLIER'] = null;
            $data[$i]['DESCRIPTION'] = null;
            $data[$i]['CURRENCY'] = null;
            $data[$i]['AMOUNT'] = null;
            $data[$i]['COMPANY'] = null;
            $data[$i]['DEPARTMENT'] = null;
            $data[$i]['ACQUISITION DATE'] = null;
            $data[$i]['INVOICE No.'] = null;
            $data[$i]['USEFUL LIFE'] = null;
            $data[$i]['JPY AMT'] = null;
            $data[$i]['Monthly Depreciation PHP'] = null;
            $data[$i]['Monthly Depreciation JPY'] = null;
            $data[$i]['NBV in PHP'] = null;
            $data[$i]['NBV in JPY'] = null;
            $data[$i]['REMAINING LIFE'] = null;
            $data[$i]['DEPRECIATION START DATE'] = null;
            $data[$i]['PARENT FA No.'] = null;
            $data[$i]['LOCATION'] = null;
        }


        foreach ($ForExtract as $key => $val) {
            $ctr = 4 + $key;
            $data[$ctr]['FA(MPA) No.'] = $val['MpaNoItems'];
            $data[$ctr]['MAKER'] = $val['Maker'];
            $data[$ctr]['SUPPLIER'] = $val['Supplier'];
            $data[$ctr]['DESCRIPTION'] = $val['Description'];
            $data[$ctr]['CURRENCY'] = $val['Currency'];
            $data[$ctr]['AMOUNT'] = $val['Amount'];
            $data[$ctr]['COMPANY'] = $val['PayerName'];
            $data[$ctr]['DEPARTMENT'] = $val['Department'];
            $data[$ctr]['ACQUISITION DATE'] = null;
            $data[$ctr]['INVOICE No.'] = null;
            $data[$ctr]['USEFUL LIFE'] = null;
            $data[$ctr]['JPY AMT'] = null;
            $data[$ctr]['Monthly Depreciation PHP'] = null;
            $data[$ctr]['Monthly Depreciation JPY'] = null;
            $data[$ctr]['NBV in PHP'] = null;
            $data[$ctr]['NBV in JPY'] = null;
            $data[$ctr]['REMAINING LIFE'] = null;
            $data[$ctr]['DEPRECIATION START DATE'] = null;
            $data[$ctr]['PARENT FA No.'] = null;
            $data[$ctr]['LOCATION'] = null;
        }
        // return $data;
        return Excel::download(new ExcelExport($data), 'Extracted.csv');

        // return $data;
    }

    public function GetCompanies()
    {
        return Payer::all();
    }

    public function GetList($from = null, $to = null, $company = null)
    {
        $items  = Item::select(
            'items.*',
            'GI.VendorNameEng',
            'GI.QuotedPrice',
            'GI.PayerCompanyCode',
            'GI.DepartmentCode',
            'P.payer_name',
            'D.AccountingCode',
            'GI.created_at'
        );
        $items = $items->join('general_informations as GI', 'GI.MpaNo', 'items.MpaNo')
            ->join('payers as P', 'P.payer_code', 'GI.PayerCompanyCode')
            ->join('departments as D', 'D.id', 'GI.DepartmentCode');

        if ($company != null && $company != "") {
            $items = $items->where('GI.PayerCompanyCode', $company);
        }

        if ($from != null && $to != null) {
            $items = $items->whereBetween('GI.created_at', [$from, $to]);
        }

        $items = $items->get();

        $ForExtract = [];
        $ctr = 0;
        foreach ($items as $key => $val) {
            if ($val['Quantity'] > 1) {
                for ($i = 1; $i <= $val['Quantity']; $i++) {
                    $ForExtract[$ctr]['MpaNoItems'] = "$val[MpaNo]-{$i}";
                    $ForExtract[$ctr]['Currency'] = "$val[Currency]";
                    $ForExtract[$ctr]['Amount'] = "$val[UnitPrice]";
                    $ForExtract[$ctr]['Maker'] = "$val[VendorNameEng]";
                    $ForExtract[$ctr]['Supplier'] = $val['QuotedPrice'] == "" ? 'HRD SINGAPORE'  : "$val[QuotedPrice]";
                    $ForExtract[$ctr]['PayerName'] = "$val[payer_name]";
                    $ForExtract[$ctr]['Department'] = "$val[AccountingCode]";
                    $ForExtract[$ctr]['Description'] = "$val[ItemNameEng]";
                    $ForExtract[$ctr]['AquisitionDate'] = null;
                    $ForExtract[$ctr]['InvoiceNo'] = null;
                    $ForExtract[$ctr]['UsefulLife'] = null;
                    $ForExtract[$ctr]['PhpAmount'] = null;
                    $ForExtract[$ctr]['JpyAmount'] = null;
                    $ForExtract[$ctr]['MonthlyDepreciationPhp'] = null;
                    $ForExtract[$ctr]['MonthlyDepreciationJpy'] = null;
                    $ForExtract[$ctr]['NvbJpy'] = null;
                    $ForExtract[$ctr]['NvbPhp'] = null;
                    $ForExtract[$ctr]['RemainingLife'] = null;
                    $ForExtract[$ctr]['DepreciationStartDate'] = null;
                    $ForExtract[$ctr]['ParentFaNo'] = null;
                    $ForExtract[$ctr]['Location'] = null;

                    $ctr++;
                }
            } else {
                $ForExtract[$ctr]['MpaNoItems'] = "$val[MpaNo]";
                $ForExtract[$ctr]['Currency'] = "$val[Currency]";
                $ForExtract[$ctr]['Amount'] = "$val[UnitPrice]";
                $ForExtract[$ctr]['Maker'] = "$val[VendorNameEng]";
                $ForExtract[$ctr]['Supplier'] = $val['QuotedPrice'] == "" ? 'HRD SINGAPORE'  : "$val[QuotedPrice]";
                $ForExtract[$ctr]['PayerName'] = "$val[payer_name]";
                $ForExtract[$ctr]['Department'] = "$val[AccountingCode]";
                $ForExtract[$ctr]['Description'] = "$val[ItemNameEng]";
                $ForExtract[$ctr]['AquisitionDate'] = null;
                $ForExtract[$ctr]['InvoiceNo'] = null;
                $ForExtract[$ctr]['UsefulLife'] = null;
                $ForExtract[$ctr]['PhpAmount'] = null;
                $ForExtract[$ctr]['JpyAmount'] = null;
                $ForExtract[$ctr]['MonthlyDepreciationPhp'] = null;
                $ForExtract[$ctr]['MonthlyDepreciationJpy'] = null;
                $ForExtract[$ctr]['NvbJpy'] = null;
                $ForExtract[$ctr]['NvbPhp'] = null;
                $ForExtract[$ctr]['RemainingLife'] = null;
                $ForExtract[$ctr]['DepreciationStartDate'] = null;
                $ForExtract[$ctr]['ParentFaNo'] = null;
                $ForExtract[$ctr]['Location'] = null;

                $ctr++;
            }
        }
        return $ForExtract;
    }

    public function ForExtract(Request $req)
    {
        return $ForExtract = $this->GetList(
            isset($req->dates[0]) ? $req->dates[0] : null,
            isset($req->dates[1]) ? $req->dates[1] : null,
            isset($req->Company) ? $req->Company : null
        );
    }
}
