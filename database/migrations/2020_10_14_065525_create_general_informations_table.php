<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGeneralInformationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('general_informations', function (Blueprint $table) {
            $table->id();
            $table->string('MpaNo', 10);
            $table->smallInteger('Status');
            $table->integer('Applicant', false, true)->length(10);
            $table->integer('TotalPriceJPY', false, true)->length(30);
            $table->smallInteger('NihonSangyou')->nullable();
            $table->string('VendorNameEng', 150);
            $table->string('VendorNameJap', 150);
            $table->string('PayerCompanyCode', 5);
            $table->smallInteger('DepartmentCode');
            $table->longText('Purpose');
            $table->smallInteger('Ratio');
            $table->string('TradeTermCode', 5);
            $table->longText('SubmissionMatters')->nullable();
            $table->timestamp('ApprovalDate')->nullable();
            $table->string('InspectedBy')->nullable();
            $table->timestamp('InspectionDate')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('general_informations');
    }
}
