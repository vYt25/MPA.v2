<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class ExcelExport implements FromCollection, WithHeadings, ShouldAutoSize
{

    private $values = null;
    /**
     * @return \Illuminate\Support\Collection
     */

    public function __construct($values)
    {
        $this->values = $values;
    }

    public function collection()
    {
        return collect($this->values);
    }

    public function headings(): array
    {
        return [
            [
                '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
            ],
            [
                'COMPANY NAME', '', '', '', 'EXTRACTED DATE', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
            ],
            [
                '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
            ],
            [
                'FA(MPA) No.',
                'MAKER',
                'SUPPLIER',
                'DESCRIPTION',
                'CURRENCY',
                'AMOUNT',
                'COMPANY',
                'DEPARTMENT',
                'ACQUISITION DATE',
                'INVOICE No.',
                'USEFUL LIFE',
                'PHP AMT',
                'JPY AMT',
                'Monthly Depreciation PHP',
                'Monthly Depreciation JPY',
                'NBV in PHP',
                'NBV in JPY',
                'REMAINING LIFE',
                'DEPRECIATION START DATE',
                'PARENT FA No.',
                'LOCATION',
            ]
        ];
    }
}
