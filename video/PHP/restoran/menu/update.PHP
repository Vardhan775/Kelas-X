<?php 

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "SELECT * FROM tblmenu WHERE idmenu=$id";
    $item = $db->getITEM($sql);

    $idkategori = $item['idkategori'];
    $gambar = $item['gambar'];
}

$rowkategori = $db->getAll("SELECT * FROM tblkategori ORDER BY kategori ASC");

if (isset($_POST['simpan'])) {

    $idkategori = $_POST['idkategori'];
    $menu = $_POST['menu'];
    $harga = $_POST['harga'];

    $newFile = $_FILES['gambar']['name'];
    $temp = $_FILES['gambar']['tmp_name'];

    if ($newFile != "") {
        move_uploaded_file($temp, "../Upload/".$newFile);
        $gambarUpdate = $newFile;
    } else {
        $gambarUpdate = $gambar;
    }

    $sql = "UPDATE tblmenu 
            SET idkategori=$idkategori, menu='$menu', gambar='$gambarUpdate', harga=$harga 
            WHERE idmenu=$id";

    $db->runSQL($sql);
    header("location:?f=menu&m=select");
    exit;



    // if (empty($gambar)) {
    //     echo "<h3>GAMBAR KOSONG</h3>";
    // }else {
    //     $sql = "INSERT INTO tblmenu VALUES (NULL,$idkategori,'$menu','$gambar',$harga)";
    //     move_uploaded_file($temp,'../Upload/'.$gambar);
    //     $db->runSQL($sql);
    // }
    // header("location:?f=menu&m=select");
    

}

?>

<h3>Update Menu</h3>
<form action="" method="post" enctype="multipart/form-data">

    <div class="form-group w-50">
        <label>Kategori</label><br>
        <select name="idkategori">
            <?php foreach ($rowkategori as $r): ?>
                <option 
                    value="<?= $r['idkategori']; ?>"
                    <?= ($idkategori == $r['idkategori']) ? 'selected' : '' ?>
                >
                    <?= $r['kategori']; ?>
                </option>
            <?php endforeach; ?>
        </select>
    </div>

    <div class="form-group w-50">
        <label>Nama menu</label>
        <input type="text" name="menu" required 
            value="<?= $item['menu']; ?>" 
            class="form-control">
    </div>

    <div class="form-group w-50">
        <label>Harga</label>
        <input type="number" name="harga" required 
            value="<?= $item['harga']; ?>" 
            class="form-control">
    </div>

    <div class="form-group w-50">
        <label>Gambar</label><br>
        <input type="file" name="gambar">
        <br><small>Gambar sekarang: <?= $gambar; ?></small>
    </div>

    <div>
        <input type="submit" name="simpan" value="simpan" class="btn btn-primary">
    </div>

</form>