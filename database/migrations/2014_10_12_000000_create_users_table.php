<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('EmployeeID', 10);
            $table->string('FirstNameEng', 50);
            $table->string('LastNameEng', 50);
            $table->string('FirstNameJap')->nullable();
            $table->string('LastNameJap')->nullable();
            $table->string('Department', 50)->nullable();
            $table->string('Email')->unique();
            $table->smallInteger('AccessLevel');
            $table->string('Password');
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
        Schema::dropIfExists('users');
    }
}
