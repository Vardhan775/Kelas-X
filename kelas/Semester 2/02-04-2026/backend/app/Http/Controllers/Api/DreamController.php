<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Dream;

class DreamController extends Controller
{
    public function index()
    {
        return response()->json(Dream::orderBy('urutan')->get());
    }
}
