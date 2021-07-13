<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment_schedules', function (Blueprint $table) {
            $table->id();
            $table->string('MpaNo', 10);

            $table->smallInteger('PoMonth')->nullable();
            $table->smallInteger('PoSchedule')->nullable();
            $table->smallInteger('PoRatio')->nullable();
            $table->smallInteger('PoDue')->nullable();

            $table->smallInteger('RecievingBlMonth')->nullable();
            $table->smallInteger('RecievingBlSchedule')->nullable();
            $table->smallInteger('RecievingBlRatio')->nullable();
            $table->smallInteger('RecievingBlDue')->nullable();

            $table->smallInteger('InspectionMonth')->nullable();
            $table->smallInteger('InspectionSchedule')->nullable();
            $table->smallInteger('InspectionRatio')->nullable();
            $table->smallInteger('InspectionDue')->nullable();

            $table->string('OthersTitle', 100)->nullable();
            $table->smallInteger('OthersMonth')->nullable();
            $table->smallInteger('OthersSchedule')->nullable();
            $table->smallInteger('OthersRatio')->nullable();
            $table->smallInteger('OthersDue')->nullable();
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
        Schema::dropIfExists('payment_schedules');
    }
}
