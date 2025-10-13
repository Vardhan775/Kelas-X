<?php 

    $menu = ['Profil','Kontak','Kegiatan','Jadwal'];
    $profil = "SMP Negeri 6 Sidoarjo adalah salah satu Sekolah Penggerak di Kabupaten Sidoarjo, melalui Program Sekolah Penggerak SMPN 6 Sidoarjo medeklarasikan ROOTS DAY yang dihadiri oleh Kepala Dinas Pendidikan Kabupaten Sidoarjo, Bapak Dr Tirto Adi M.Pd. Selain pendeklarasian 30 Agen perubahan anti perundungan di lingkungan sekolah, SMPN 6 Sidoarjo telah meresmikan peluncuran Perpustakaan berbasis digital bertajuk Jelajah Aksara. “Peluncuran perpustakaan digital bersama Gramedia adalah salah satu wujud program Sekolah Penggerak untuk Digitalisasi sekolah melalui dana BOS Kinerja, dan bisa dinikmati siswa dan guru dimana saja, dan menjadi salah satu nilai tambah untuk SMPN 6 Sidoarjo”, Terima kasih kami ucapkan kepada semua pihak yang telah mendukung kesuksesan di SMPN 6 Sidoarjo, semoga berkah dan sukses di selanjutnya. Wassalamualaikum Wr. Wb Kepala Sekolah";
    $kontak = "(031) 99034358 atau 031-8953888, dan email di smpn6sda@gmail.com";
    $kegiatan = "Kegiatan di SMP Negeri 6 Sidoarjo meliputi kegiatan ekstrakurikuler seperti Pramuka, olahraga (futsal, basket, voli), dan seni (tari, teater, karawitan). Selain itu, ada kegiatan akademik, program pengembangan karakter seperti '7 Kebiasaan Anak Indonesia Hebat', dan program inklusi untuk siswa berkebutuhan khusus.";
    $img = ["images/logo2_spenam.jpeg","images/spenam.jpeg","images/SMP_6.jpeg","images/kegiatan.jpeg"];
    $jadwal = ""

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web SMP Negeri 6 Sidoarjo</title>
</head>
<body>
    <h1>SMP Negeri 6 Sidoarjo</h1>
    <div>
        <img width="400" src="<?= $img[0];?>" alt="">
    </div>
    <div>
        <div>
            <ul>
                <li><?=$menu [1];?></li>
                <p><?= $kontak?></p>
                <img width="250" src="<?= $img[1]; ?>" alt="">
                <li><?=$menu [0];?></li>
                <p><?= $profil?></p>
                <img width="400" src="<?= $img[3]; ?>" alt="">
                <li><?=$menu [2];?></li>
                <p><?=$kegiatan ?></p>
            </ul>
        </div>
    </div>
    <div>

    </div>
</body>
</html>