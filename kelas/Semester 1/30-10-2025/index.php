<form action="" method="post">
    Tanggal:
    <input type="number" name="Tanggal" placeholder="Masukkan Tanggal"> <br>
    Bulan:
    <input type="number" name="Bulan" placeholder="Masukkan Bulan"> <br>
    <input type="submit" name="kirim" Value="zodiak anda">
</form>

<form action="" method="post">
    <input type="number" name="a" placeholder="angka 1">
    <input type="number" name="b" placeholder="angka 2">
    <select name="hitung" id="">
        
    </select>
</form>


<?php 

    if (isset($_POST['kirim'])){
        $Tanggal = $_POST['Tanggal'];
        $Bulan = $_POST['Bulan'];

        zodiak($Bulan, $Tanggal);
    }

    
    // function belajar() {
    //     echo "Hari ini saya belajar function";
    // }

    //Memanggil function
    //belajar();

    

    // function cekTanggal($tanggal) {
        

    // if($tanggal > 0 && $tanggal < 32) {
    //     echo "tanggal benar !";
    // } else {
    //     echo "tanggal salah !";
    // }
    // }

    // cekTanggal(12);
    // cekTanggal(100);
    // cekTanggal(10);

    // $Tanggal = ;
    // $Bulan = ;

    function zodiak($tanggal , $bulan) {
        if  ($tanggal > 0 && $tanggal < 32 && $bulan > 0 && $bulan < 13) {
            
            if ($bulan == 1){
                if ($tanggal > 0 && $tanggal < 20){
                    echo "Zodiak mu capricorn";
                }else{
                    echo "Zodiak mu aquarius";
                }
            }
            if ($bulan)
        
        }
    }


    //cekBulan();
//     if(cekBulan(1)) {
//         echo "Bulan Benar";
//     }else {
//         echo "Bulan Salah";
//     }


//     function luasPersegiPanjang($p, $l){
//         $luas = $p * $l;
//         return $luas;
//     }
//     $p = 55;
//     $l = 33;
//     $t = 155;
//     echo "volume balok dengan panjang $p, lebar $l,  dan  tinggi $t adalah: <br>";
//     echo luasPersegiPanjang($p, $l) * $t;

//     // +-*/
// function tambah(){
//     return $a + $b;
// }

// function kurang(){
//     return $a - $b;
// }

// function kali(){
//     return $a * $b;
// }

// function bagi(){
//     return $a / $b;
// }




?>