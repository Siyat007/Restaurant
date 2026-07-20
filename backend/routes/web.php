<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\ApiController;

Route::get('/', function () {
    return view('welcome');
});

// Session-based administration. These routes deliberately use the web
// middleware group for encrypted, HttpOnly cookies and CSRF protection.
Route::prefix('api/admin')->group(function () {
    Route::get('/csrf-token', [AdminAuthController::class, 'csrfToken'])->middleware('throttle:60,1');
    Route::post('/login', [AdminAuthController::class, 'login'])->middleware('throttle:admin-login');
});

Route::prefix('api/admin')->middleware(['auth', 'admin', 'throttle:admin-actions'])->group(function () {
    Route::get('/me', [AdminAuthController::class, 'me']);
    Route::post('/logout', [AdminAuthController::class, 'logout']);
    Route::get('/memories', [ApiController::class, 'getAllMemoriesAdmin']);
    Route::patch('/memories/{id}', [ApiController::class, 'updateMemoryStatus']);
    Route::delete('/memories/{id}', [ApiController::class, 'deleteMemoryAdmin']);
});
