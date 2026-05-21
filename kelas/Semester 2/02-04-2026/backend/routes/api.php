<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\SkillController;
use App\Http\Controllers\Api\DreamController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\AuthController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'me']);
});

Route::get('/profile', [ProfileController::class, 'index']);
Route::get('/skills', [SkillController::class, 'index']);
Route::get('/dreams', [DreamController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);
