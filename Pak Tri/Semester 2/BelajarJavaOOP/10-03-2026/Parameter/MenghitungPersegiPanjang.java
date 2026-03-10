import java.util.Scanner;

public class MenghitungPersegiPanjang {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int panjang, lebar;

        System.out.print("Masukkan panjang: ");
        panjang = input.nextInt();

        System.out.print("Masukkan lebar: ");
        lebar = input.nextInt();

        int luas = panjang * lebar;
        System.out.println("Luas persegi panjang: " + luas);
    }
}