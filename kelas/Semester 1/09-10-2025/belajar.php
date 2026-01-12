belajar php
<h1>Saya Belajar PHP</h1>
<?php

    $nama = "Aditya Vardhan I";
    $kelas = "10";
    $umur = "15";
    $alamat = "Bluru Permai,  Jl.Lele 3, Blok CK-11";
    $hobi = "Bermain Basket";
    $cita_cita = "Menjadi Pemain Basket Profesional";
    $enter = "<br/>";

    echo $nama;
    echo $enter;

    echo $umur;
    echo $enter;

    echo $kelas;
    echo $enter;

    echo $alamat;
    echo $enter;

    echo $kelas;
    echo $enter;

    echo $hobi;
    echo $enter;

    echo $cita_cita;


    // echo "<h1>saya belajar php</h1>";

    // echo "nama:";
    // echo "Aditya Vardhan I";

    // echo '<br/>';

    // echo "Lahir:";
    // echo "30 Des 2009";

    // echo '<br/>';

    // echo "Sekolah:";
    // echo "SMK Negeri 2 Buduran";
    
    // echo '<br/>';

    // echo "saya kelas:";
    // echo 10;

    // echo '<br/>';

    // echo "Hobi:";
    // echo "Bermain Basket";
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Vardhan</title>
</head>
<body>
    <h1>Identitas</h1>
    <table>
        <tbody>
            <tr>
                <td>nama:</td>
                <td><?= $nama ?></td>
            </tr>
            <tr>
                <td>alamat:</td>
                <td><?= $alamat ?></td>
            </tr>
            <tr>
                <td>Kelas:</td>
                <td><?= $kelas ?></td>
            </tr>
            <tr>
                <td>umur:</td>
                <td><?= $umur ?></td>
            </tr>
            <tr>
                <td>hobi:</td>
                <td><?= $hobi ?></td>
            </tr>
        </tbody>
    </table>
</body>
</html>