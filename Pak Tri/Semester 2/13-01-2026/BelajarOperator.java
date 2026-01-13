public class BelajarOperator {

    public static void main (String[] args) {
        //Penjumlahan, Pengurangan, Perkalian, Pembagian, Modulus

        int a = 10;
        int b = 3;

        int penjumlahan = a+b;
        int pengurangan = a-b;
        int perkalian = a*b;
        double pembagian = a/b;
        int modulus = a%b;

        System.out.println("hasil penjumlahan 2 angka adalah: " +penjumlahan);
        System.out.println("hasil pengurangan 2 angka adalah: " +pengurangan);
        System.out.println("hasil perkalian 2 angka adalah :" +perkalian);
        System.out.println("hasil pembagian 2 angka adlah :" +pembagian);
        System.out.println("hasil modulus 2 angka adalah :" +modulus);

        //Operator Penguasaan
        //= memberi nilai
        //+=penjumlahan nilai
        //-=
        //*=
        // /=
        // %=

        int c=20;
        c +=5;
        System.out.println("hasil penjumlahan adalah: " +c);

        a -=2;
        System.out.println("hasil pengurangan adalah: " +a);

        b *=100;
        System.out.println("hasil perkalian adalah: " +b);

        a /=2;
        System.out.println("hasil pembagian adalah: " +a);

        b %=10;  
        System.out.println("hasil modulus adalah: " +b);

        //Operator Pembandingan

        int d= 50;
        int e= 10;

        boolean hasil = d==e;
        boolean hasil1 = d>=e;
        boolean hasil2 = d!=e;
        boolean hasil3 = d<=e;

        System.out.println(hasil);
        System.out.println(hasil1);
        System.out.println(hasil2);
        System.out.println(hasil3);


        //Operator Logika

        boolean result = true && true;
        boolean result2 = d>e && d==e;
        boolean result3 = true || true;
        boolean result4 = d!=e || d<e;

        System.out.println("Operator Logika-1"+result);
        System.out.println("Operator Logika-2"+result2);
        System.out.println("Operator Logika-3"+result3);
        System.out.println("Operator Logika-4"+result4);
    }

} 