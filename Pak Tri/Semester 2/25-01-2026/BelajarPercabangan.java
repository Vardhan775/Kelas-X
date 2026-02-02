import java.util.Scanner;

public class BelajarPercabangan {
    public static void main(String[] args) {

            Scanner Inputuser = new Scanner(System.in);
            System.out.print("Inputkan Nilai anda : ");
            int Nilai = Inputuser.nextInt();

            if (Nilai >= 90) {
                System.out.println("A");
            } else if (Nilai >= 89 && Nilai <= 80) {
                System.out.println("B");
            } else if (Nilai >= 79 && Nilai <= 70) {
                System.out.println("C");
            } else if (Nilai >=  69 && Nilai <= 60) {
                System.out.println("D");
            } else {
                System.out.println("E");
            }
        
    }   
}