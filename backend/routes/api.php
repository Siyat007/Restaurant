<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/menu', [ApiController::class, 'getMenu']);
Route::get('/branches', [ApiController::class, 'getBranches']);
Route::post('/contact', [ApiController::class, 'storeContact']);

// Community Memories wall
Route::get('/memories', [ApiController::class, 'getMemories']);
Route::post('/memories', [ApiController::class, 'storeMemory']);

// Admin moderation (protected by X-Admin-Token header, see ApiController::checkAdminToken)
Route::get('/admin/memories', [ApiController::class, 'getAllMemoriesAdmin']);
Route::patch('/admin/memories/{id}', [ApiController::class, 'updateMemoryStatus']);
Route::delete('/admin/memories/{id}', [ApiController::class, 'deleteMemoryAdmin']);
