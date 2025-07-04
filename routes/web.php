<?php

use App\Http\Controllers\Admin\AdminTeacherController;
use App\Http\Controllers\Admin\StudentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
    Route::get('/', function () {
        return Inertia::render('admin/dashboard');
    })->name('admin.dashboard');

    Route::resource('students', StudentController::class);

    Route::resource('teachers', AdminTeacherController::class);
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
