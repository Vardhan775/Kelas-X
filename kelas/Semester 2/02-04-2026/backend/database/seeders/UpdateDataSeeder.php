<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Profile;
use App\Models\Skill;
use Illuminate\Support\Facades\DB;

class UpdateDataSeeder extends Seeder
{
    public function run()
    {
        DB::table('profiles')->truncate();
        DB::table('skills')->truncate();

        Profile::create([
            'nama' => 'Aditya Vardhan Irwansyah',
            'kelas' => 'RPL',
            'sekolah' => 'SMK Negeri 2 Buduran',
            'hobi' => 'Bersepeda, bermain basket, dan memasak',
            'motto' => '"Arsitektur adalah puisi yang diukir dengan batu dan baja."',
            'bio' => "Nama saya Aditya Vardhan Irwansyah. Saat ini saya berusia 16 tahun dan tahun ini akan menginjak usia 17 tahun. Saya memiliki beberapa hobi yang saya sukai, seperti bersepeda, bermain basket, dan memasak. Bagi saya, hobi tersebut bukan hanya sekadar kegiatan mengisi waktu luang, tetapi juga menjadi cara untuk menjaga kesehatan, melatih kerja sama, dan menambah kreativitas.\n\nSaya memiliki cita-cita menjadi seorang arsitek karena saya tertarik dengan dunia desain bangunan dan seni dalam menciptakan sebuah karya. Saya ingin bisa membuat bangunan yang tidak hanya indah, tetapi juga nyaman dan bermanfaat bagi banyak orang.\n\nSaat ini saya bersekolah di SMK Negeri 2 Buduran dan mengambil jurusan Rekayasa Perangkat Lunak (RPL). Saya memilih jurusan ini karena saya ingin mempelajari lebih dalam tentang dunia coding dan teknologi. Selain itu, saya juga ingin mengembangkan kemampuan di bidang pemrograman agar dapat mengikuti perkembangan zaman yang semakin maju. Saya percaya bahwa dengan belajar sungguh-sungguh, kerja keras, dan terus mencoba hal baru, saya bisa meraih cita-cita yang saya impikan di masa depan.",
        ]);

        Skill::create([
            'icon' => '✍️',
            'name' => 'Sketsa manual',
            'desc' => 'Kemampuan menggambar murni dengan tangan untuk visualisasi ide.',
            'level' => 85,
            'urutan' => 1
        ]);

        Skill::create([
            'icon' => '💻',
            'name' => 'Digital drawing',
            'desc' => 'Teknik pembuatan sketsa secara digital menggunakan perangkat lunak.',
            'level' => 80,
            'urutan' => 2
        ]);

        Skill::create([
            'icon' => '🎨',
            'name' => 'Creative design',
            'desc' => 'Kreativitas dalam merancang solusi visual yang unik dan fungsional.',
            'level' => 80,
            'urutan' => 3
        ]);

        Skill::create([
            'icon' => '🎯',
            'name' => 'Accuracy',
            'desc' => 'Ketelitian tinggi dalam memastikan setiap detail karya divisualisasikan dengan tepat.',
            'level' => 90,
            'urutan' => 4
        ]);
    }
}
