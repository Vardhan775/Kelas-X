public class aploverloading {

    public static void main(String[] args) {
        overloading objek = new overloading();
        objek.DataKelas("Sepuluh RPL");
        objek.DataKelas("Sepuluh RPL", 36);
        System.out.println("======================");
        objek.Perkenalan("Vardhan", 16, "Sepuluh RPL");
        System.out.println("======================");
        objek.Hobi("Bersepeda", "Bermain Game");
    }

}