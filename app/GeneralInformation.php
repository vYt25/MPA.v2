<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GeneralInformation extends Model
{
    protected $table = 'general_informations';

    public function items()
    {
        return $this->hasMany(Item::class, 'MpaNo', 'MpaNo')->select('MpaNo');
    }
}
