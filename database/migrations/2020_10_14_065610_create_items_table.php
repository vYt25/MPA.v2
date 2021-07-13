<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->string('MpaNo', 10);
            $table->longText('ItemNameEng');
            $table->longText('ItemNameJap');
            $table->string('DepartmentCode', 5);
            $table->string('ItemID', 10)->nullable();
            $table->integer('UnitPrice', false, true)->length(20);
            $table->integer('Quantity', false, true)->length(20);
            $table->string('Currency', 5);
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
        Schema::dropIfExists('items');
    }
}
