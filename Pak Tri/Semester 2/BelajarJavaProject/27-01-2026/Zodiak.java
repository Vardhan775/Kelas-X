

import java.util.Scanner;

public class Zodiak {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Masukkan tanggal lahir: ");
        int tanggal = input.nextInt();
        System.out.print("Masukkan bulan lahir: ");
        int bulan = input.nextInt();

        String zodiak = "";
        boolean valid = true;

        if (bulan < 1 || bulan > 12) {
            System.out.println("Bulan tidak valid");
            valid = false;
        } else {
            int maxHari = 31;
            if(bulan == 4 || bulan == 6 || bulan == 9 || bulan == 11) {
                maxHari = 30;
            } else if (bulan == 2) {
                maxHari = 29;
            }

            if (tanggal < 1 || tanggal > maxHari) {
                System.out.println("Tanggal tidak valid");
                valid = false;
            }
        }

        if (valid) {
            
        if ((bulan == 3 && tanggal >= 21) || (bulan == 4 && tanggal <= 19)) {
            zodiak = "Aries";
        } else if ((bulan == 4 && tanggal >= 20) || (bulan == 5 && tanggal <= 20)) {
            zodiak = "Taurus";
        } else if ((bulan == 5 && tanggal >= 21) || (bulan == 6 && tanggal <= 20)) {
            zodiak = "Gemini";
        } else if ((bulan == 6 && tanggal >= 21) || (bulan == 7 && tanggal <= 22)) {
            zodiak = "Cancer";
        } else if ((bulan == 7 && tanggal >= 23) || (bulan == 8 && tanggal <= 22)) {
            zodiak = "Leo";
        } else if ((bulan == 8 && tanggal >= 23) || (bulan == 9 && tanggal <= 22)) {
            zodiak = "Virgo";
        } else if ((bulan == 9 && tanggal >= 23) || (bulan == 10 && tanggal <= 22)) {
            zodiak = "Libra";
        } else if ((bulan == 10 && tanggal >= 23) || (bulan == 11 && tanggal <= 21)) {
            zodiak = "Scorpio";
        } else if ((bulan == 11 && tanggal >= 22) || (bulan == 12 && tanggal <= 21)) {
            zodiak = "Sagittarius";
        } else if ((bulan == 12 && tanggal >= 22) || (bulan == 1 && tanggal <= 19)) {
            zodiak = "Capricorn";
        } else if ((bulan == 1 && tanggal >= 20) || (bulan == 2 && tanggal <= 18)) {
            zodiak = "Aquarius";
        } else if ((bulan == 2 && tanggal >= 19) || (bulan == 3 && tanggal <= 20)) {
            zodiak = "Pisces";
        }

        System.out.println("Zodiak Anda adalah: " + zodiak);
    }
    }
}