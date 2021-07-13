<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDepartmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('departments', function (Blueprint $table) {
            $table->id();
            $table->string('PayerCode', 5)->nullable();
            $table->string('DcCode', 5)->nullable();
            $table->string('AccountingCode', 5)->nullable();
            $table->string('DepartmentNameEng', 100)->nullable();
            $table->string('DepartmentNameJap', 100)->nullable();
            $table->longText('McJaEmails')->nullable();
            $table->longText('McStaffEmails')->nullable();
            $table->longText('ProductionJaEmails')->nullable();
            $table->longText('ProductionStaffEmails')->nullable();
            $table->longText('FaCustotianEmails')->nullable();
            $table->longText('AccountingEmails')->nullable();
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
        Schema::dropIfExists('departments');
    }
}
