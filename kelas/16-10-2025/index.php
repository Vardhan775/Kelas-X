<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="Bootstrap/Doc Bootstrap/css/bootstrap.min.css">
</head>
<body>
    <div>
        <nav class="bg-danger p-2 rounded">
            <ol class="nav justify-content-center">
                <li class="nav-item"><a class="nav-link" class="nav-link text-white" href="?menu=Profil">Profil</a></li>
                <li class="nav-item"><a class="nav-link" class="nav-link text-white" href="?menu=Sejarah">Sejarah</a></li>
                <li class="nav-item"><a class="nav-link" class="nav-link text-white" href="?menu=Jurusan">Jurusan</a></li>
                <li class="nav-item"><a class="nav-link" class="nav-link text-white" href="?menu=Prestasi">Prestasi</a></li>
                <li class="nav-item"><a class="nav-link" class="nav-link text-white" href="?menu=Kegiatan">Kegiatan</a></li>
                <li class="nav-item"><a class="nav-link" class="nav-link text-white" href="?menu=Kontak">Kontak</a></li>
            </ol>
        </nav>
        <section>
            <!-- <form action="" method="GET">
                <input type="submit" name="Kirim" value="Klik">
            </form> -->
            <?php 
                if (isset($_GET['menu'])) {
                    $isi = $_GET['menu'];
                    // echo $isi;
                    if($isi == "Sejarah"){
                    require_once"pages/Sejarah.php";
                    }
                    if($isi == "Jurusan"){
                    require_once"pages/Jurusan.php";
                    }
                    if($isi == "Prestasi"){
                    require_once"pages/Prestasi.php";
                    }
                    if($isi == "Profil"){
                    require_once"pages/Profil.php";
                    }
                    if($isi == "Kegiatan"){
                    require_once"pages/Kegiatan.php";
                    }
                    if($isi == "Kontak"){
                    require_once"pages/Kontak.php";
                    }
                }else{
                    require_once "pages/Profil.php";
                }if(isset($_POST['tombol'])){
                    $nama = $_POST['nama'];
                    $pesan = $_POST['pesan'];
                    $email = $_POST['email'];

                    echo $nama;
                    echo "<br>";
                    echo $email;
                    echo "<br>";
                    echo $pesan;
                }
            ?>
        </section>
        <footer>
                <p>
                    Web ini dibuat oleh Aditya Vardhan I.
                </p>
        </footer>
    </div>
</body>
</html>