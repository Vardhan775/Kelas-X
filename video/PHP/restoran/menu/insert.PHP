<?php 

$rowkategori = $db->getAll("SELECT * FROM tblkategori ORDER BY kategori ASC");

if (isset($_POST['simpan'])) {
    $idkategori = $_POST['idkategori'];
    $menu = $_POST['menu'];
    $harga = $_POST['harga'];
    $gambar = $_FILES['gambar']['name'];
    $temp = $_FILES['gambar']['tmp_name'];

    if (empty($gambar)) {
        echo "<h3>GAMBAR KOSONG</h3>";
    }else {
        $sql = "INSERT INTO tblmenu VALUES (NULL,$idkategori,'$menu','$gambar',$harga)";
        move_uploaded_file($temp,'../Upload/'.$gambar);
        $db->runSQL($sql);
    }
    header("location:?f=menu&m=select");
    

}

?>

<h3>Insert Menu</h3>
<div class="form-group">
    <form action="" method="post" enctype="multipart/form-data">
        <div class="form-group w-50">
            <label for="">Kategori</label><br>
            <select name="idkategori">
                <?php foreach($rowkategori as $row): ?>
                    <option value="<?= $row['idkategori']; ?>">
                        <?= $row['kategori']; ?>
                    </option>
                <?php endforeach; ?>
            </select>
        </div>

        <div class="form-group w-50">
            <label>Nama menu</label>
            <input type="text" name="menu" required placeholder="isi menu" class="form-control">
        </div>

        <div class="form-group w-50">
            <label>Harga</label>
            <input type="number" name="harga" required placeholder="isi harga" class="form-control">
        </div>

        <div class="form-group w-50">
            <label>Gambar</label><br>
            <input type="file" name="gambar">
        </div>

        <div>
            <input type="submit" name="simpan" value="simpan" class="btn btn-primary">
        </div>
    </form>
</div>
