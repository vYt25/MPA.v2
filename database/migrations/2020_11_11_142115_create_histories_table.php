<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('histories', function (Blueprint $table) {
            $table->id();
            $table->string('MpaNo', 10);
            $table->longText('GeneralInformations');
            $table->longText('Items');
            $table->longText('OtherInformations');
            $table->longText('PaymentSchedules');
            $table->longText('RevisedFieldGeneralInformations')->nullable();
            $table->longText('RevisedFieldItems')->nullable();
            $table->longText('RevisedFieldOtherInformations')->nullable();
            $table->longText('RevisedFieldPaymentSchedules')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('histories');
    }
}
