<form action="" method="post">
    kategori :
    <input type="text" name="kategori">
    <br>
    <input type="submit" name="simpan" value="simpan">
</form>

<?php 

    require_once "../function.PHP";

    if (isset($_POST['simpan'])) {

    $kategori = $_POST['kategori'];

    $sql = "INSERT INTO tblkategori VALUES ('','$kategori')";

    $result = mysqli_query($koneksi, $sql);

    header("location:http://localhost/kelas%20X-rpl/video/PHP/restoran/kategori/select.PHP");


    }

    
?>