import java.util.Scanner;

public class BelajarLooping {
    public static void main(String[] args) {
        //Looping nama
        Scanner sc = new Scanner(System.in);

        System.out.print("Masukkan Nama : ");
        String nama = sc.nextLine();

        System.out.print("Masukkan Jumlah : ");
        int jumlah = sc.nextInt();

        for (int i = 1; i <=jumlah; i++) {
            System.out.println(i + ". " + nama);
        }
        sc.close();

        //Segitiga Siku-siku Kiri
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(" * ");
            }
            System.out.println();
        }

        //Segitiga Siku-siku Terbalik Kiri
        System.out.println();

        for (int i = 1; i <= 5; i++) {
            for (int j = 5; j >= i; j--) {
                System.out.print(" * ");
            }
            System.out.println();
        }

        //Segitiga Siku-siku Kanan
        System.out.println();

        for (int i = 1; i <= 5; i++) {
            for (int j = 5; j >= i; j--) {
                System.out.print("   ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print(" * ");
            }
            System.out.println();
        }

        //Segitiga Siku-siku Terbalik Kanan
        System.out.println();

        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("   ");
            }
            for (int j = 5; j >= i; j--) {
                System.out.print(" * ");
            }
            System.out.println();
        }
    }
}