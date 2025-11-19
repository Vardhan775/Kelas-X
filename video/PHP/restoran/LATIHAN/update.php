update data

<?php 

    require_once "../function.php";

    //echo $id;

    $sql = "SELECT * FROM tblkategori WHERE idkategori = $id";
    $result = mysqli_query($koneksi,$sql);

    $row = mysqli_fetch_assoc($result);


    echo $sql['kategori'];

    // $kategori = 'Makaroni';
    // $id= 43;
    // $sql = "UPDATE tblkategori SET kategori='$kategori' WHERE idkategori= $id";

    // $result = mysqli_query($koneksi, $sql);

    // echo $sql;

?>

<form action="" method="post">
    kategori :
    <input type="text" name="kategori" value="<?php echo $row['kategori']?>">
    <br>
    <input type="submit" name="simpan" value="simpan">
</form>

<?php 

    if (isset($_POST['simpan'])) {
        $kategori = $_POST['kategori'];
        // echo $kategori;
        $sql = "UPDATE tblkategori SET kategori='$kategori' WHERE idkategori= $id";

        $result = mysqli_query($koneksi, $sql);

        header("location:http://localhost/kelas%20X-rpl/video/PHP/restoran/kategori/select.PHP")
    }

?>