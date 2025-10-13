<div style="margin:auto; width:900px;">

<h3><a href="http://localhost/kelas%20X-rpl/video/PHP/restoran/kategori/insert.PHP">Tambah Data</a></h3>

<?php 

require_once "../function.PHP";

$sql = "SELECT idkategori FROM tblkategori";
$result = mysqli_query($koneksi,$sql);

$jumlahdata = mysqli_num_rows($result);



$banyak = 3;

$halaman = ceil($jumlahdata / $banyak) ;

for ($i=1; $i <= $halaman ; $i++) { 
    echo '<a href="?p='.$i.'">'.$i.'</a>';
    echo '&nbsp &nbsp &nbsp';
}

echo '<br> <br>';

if (isset($_GET['p'])) {
    $p=$_GET['p'];
    //echo $p;
    $mulai = ($p * $banyak) - $banyak;
    //    3 = (2 * 3) - 3
}else {
    $mulai = 0;
}

$sql = "SELECT * FROM tblkategori LIMIT $mulai,$banyak";

$result = mysqli_query($koneksi,$sql);

// var_dump($result);

$jumlah = mysqli_num_rows($result);

// echo'<br>';

// echo $jumlah;

echo '
<table border="1px">
    <tr>
        <th>No</th>
        <td>kategori</td>
    </tr>

';
$no=$mulai;
if ($jumlah > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo '<tr>';
        echo '<td>'.$no++.'</td>';
        echo '<td>'.$row['kategori'].'</td>';
        echo '</tr>';
    }
}

echo '</table>';

?>

</div>