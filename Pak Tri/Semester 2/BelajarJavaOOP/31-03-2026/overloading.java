public class overloading {

    void DataKelas (String nmkelas) {
        System.out.println("Kelas Kita Adalah : " + nmkelas);
    }

    void DataKelas (String nmkelas, int jmlsiswa) {
        System.out.println("Kelas Kita Adalah : " + nmkelas);
        System.out.println("Jumlah Siswa : " + jmlsiswa);
    }

    void Perkenalan (String nama, int umur, String kelas) {
        System.out.println("Nama Saya : " + nama);
        System.out.println("Umur Saya : " + umur);
        System.out.println("Kelas Saya : " + kelas);
    }

    void Hobi (String hobi1, String hobi2) {
        System.out.println("Hobi Saya Adalah : " + hobi1 + " dan " + hobi2);
    }

}

class FOverloading {
    void Perkenalan (String nama, int umur, String kelas) {
        System.out.println("Nama Saya : " + nama);
        System.out.println("Umur Saya : " + umur);
        System.out.println("Kelas Saya : " + kelas);
    }

    void Hobi (String hobi1, String hobi2) {
        System.out.println("Hobi Saya Adalah : " + hobi1 + " dan " + hobi2);
    }
}    