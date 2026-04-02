<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Profile;
use App\Models\Skill;
use App\Models\Dream;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Profile data
        Profile::create([
            'nama'    => 'Aditya Vardhan Irwansyah',
            'kelas'   => 'X RPL',
            'sekolah' => 'SMK Negeri 2 Buduran',
            'hobi'    => 'Menggambar, Membaca Desain, Bersepeda',
            'motto'   => '"Kode adalah puisi logika yang mewujudkan imajinasi menjadi realitas platform."',
            'bio'     => 'Halo! Saya Aditya Vardhan Irwansyah, siswa kelas X RPL di SMK Negeri 2 Buduran. Saya sangat menyukai dunia pemrograman, teknologi informasi, komputasi, dan kecerdasan buatan (AI). Saya sangat menikmati proses mengubah baris-baris kode menjadi sebuah aplikasi yang bermanfaat dan fungsional.',
            'foto'    => null,
        ]);

        // Skills data
        $skills = [
            ['icon' => '💻', 'name' => 'HTML & CSS',             'desc' => 'Membangun kerangka dasar struktur dan tampilan website yang indah (Frontend).',      'level' => 80, 'urutan' => 1],
            ['icon' => '🟨', 'name' => 'JavaScript',             'desc' => 'Membuat website menjadi hidup, interaktif, dan penuh animasi.',                      'level' => 70, 'urutan' => 2],
            ['icon' => '⚛️', 'name' => 'React JS',               'desc' => 'Mengembangkan aplikasi antarmuka yang modern, reaktif, serta cepat.',                'level' => 50, 'urutan' => 3],
            ['icon' => '🤖', 'name' => 'Artificial Intelligence','desc' => 'Mempelajari dasar-dasar AI, manipulasi data, dan integrasi API AI generatif.',       'level' => 60, 'urutan' => 4],
            ['icon' => '🎨', 'name' => 'UI/UX Design',           'desc' => 'Merancang prototipe antarmuka aplikasi yang ramah pengguna sebelum tahap koding.',   'level' => 75, 'urutan' => 5],
            ['icon' => '📐', 'name' => 'Berpikir Logis',         'desc' => 'Kemampuan merancang algoritma dan problem solving (pemecahan masalah teknis).',      'level' => 85, 'urutan' => 6],
        ];

        foreach ($skills as $skill) {
            Skill::create($skill);
        }

        // Dreams (timeline cita-cita)
        $dreams = [
            ['year' => 'Sekarang — 2026',   'title' => 'Belajar Dasar-Dasar Koding dan AI',        'desc' => 'Menguasai HTML, CSS, JavaScript, dan AI untuk membangun website dan aplikasi kecil-kecilan.',                                                           'urutan' => 1],
            ['year' => 'SMK — 2025-2028',   'title' => 'Membangun Portofolio Awal',                'desc' => 'Membuat proyek website sungguhan, berpartisipasi di komunitas koding lokal, serta mengikuti dan memenangkan lomba IT.',                                 'urutan' => 2],
            ['year' => 'Kuliah — 2029-2034','title' => 'Studi Teknik Informatika Impian',          'desc' => 'Mengejar beasiswa terbaik di prodi Ilmu Komputer/T.Informatika dan berkesempatan magang di perusahaan teknologi (startup) berkembang.',               'urutan' => 3],
            ['year' => 'Karier — 2034-2040','title' => 'Full-Stack Developer Profesional',         'desc' => 'Bekerja secara profesional di perusahaan bergengsi dalam merancang ekosistem perangkat lunak skala besar yang handal.',                               'urutan' => 4],
            ['year' => 'Masa Depan — 2040+','title' => 'Membangun Startup Teknologi Sendiri',      'desc' => 'Berinovasi dengan teknologi dan AI, memiliki tech startup sendiri untuk menyelesaikan masalah besar nyata dengan sebuah klik di layar aplikasi.',       'urutan' => 5],
        ];

        foreach ($dreams as $dream) {
            Dream::create($dream);
        }
    }
}
