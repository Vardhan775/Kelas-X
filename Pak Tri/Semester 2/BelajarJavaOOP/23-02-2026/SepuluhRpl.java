public class SepuluhRpl {
    public static void  main(String[] args) {
        MuridRpl objek = new MuridRpl();
        
        System.out.println(objek.nama);
        System.out.println("Nama Anda Adalah : "+ objek.nama);
        System.out.println("No Absen Anda Adalah : "+ objek.absen);
        System.out.println("Umur Anda Adalah : " + objek.usia);

        objek.DataSiswa();

        int Tampilanluas=objek.MenghitungPersegi();

        System.out.println("Luas persegi adalah : " + Tampilanluas);


        SiswaRpl obj = new SiswaRpl();
        System.out.println(obj.nama);
        System.out.println(obj.hobi);
        
    }
}