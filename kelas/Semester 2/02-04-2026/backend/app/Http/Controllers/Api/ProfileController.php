<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Profile;

class ProfileController extends Controller
{
    public function index()
    {
        $profile = Profile::first();

        if (!$profile) {
            return response()->json([
                'nama'    => 'Kaito',
                'kelas'   => 'X IPA 1',
                'sekolah' => 'SMA Negeri 1',
                'hobi'    => 'Menggambar, Membaca Desain, Travelling',
                'motto'   => '"Arsitektur adalah puisi yang diukir dengan batu dan baja."',
                'bio'     => 'Saya adalah siswa kelas X yang bercita-cita menjadi arsitek.',
                'foto'    => null,
            ]);
        }

        return response()->json($profile);
    }
}
