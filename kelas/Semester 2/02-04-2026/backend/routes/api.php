<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\SkillController;
use App\Http\Controllers\Api\DreamController;
use App\Http\Controllers\Api\ContactController;

Route::get('/profile', [ProfileController::class, 'index']);
Route::get('/skills', [SkillController::class, 'index']);
Route::get('/dreams', [DreamController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);
