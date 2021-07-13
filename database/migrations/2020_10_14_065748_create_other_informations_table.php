<?php

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOtherInformationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('other_informations', function (Blueprint $table) {
            $table->id();
            $table->string('MpaNo', 10);

            $table->smallInteger('PackingExpenseStatus')->nullable();
            $table->string('PackingExpenseCurrency', 6)->nullable();
            $table->integer('PackingExpenseAmount', false, true)->length(10)->nullable();

            $table->smallInteger('DistributionExpenseStatus')->nullable();
            $table->string('DistributionExpenseCurrency', 6)->nullable();
            $table->integer('DistributionExpenseAmount', false, true)->length(10)->nullable();

            $table->smallInteger('InstallationExpenseStatus')->nullable();
            $table->string('InstallationExpenseCurrency', 6)->nullable();
            $table->integer('InstallationExpenseAmount', false, true)->length(10)->nullable();

            $table->smallInteger('OtherExpenseStatus')->nullable();
            $table->string('OtherExpenseCurrency', 6)->nullable();
            $table->integer('OtherExpenseAmount',  false, true)->length(20)->nullable();

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
        Schema::dropIfExists('other_informations');
    }
}
