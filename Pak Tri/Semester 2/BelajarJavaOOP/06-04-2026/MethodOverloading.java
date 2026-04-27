public class MethodOverloading {

    //Perkalian dengan 2 parameter int
    static int Perkalian(int a, int b) {
        return a * b;
    }

    //Perkalian dengan 3 parameter int
    static int Perkalian(int a, int b, int c) {
        return a * b * c;
    }

    //Perkalian dengan 2 parameter double
    static double Perkalian(double a, double b) {
        return a * b;
    }

    public static void main(String[] args) {

        System.out.println("Perkalian 2 int: " + Perkalian(5, 4));
        System.out.println("Perkalian 3 int: " + Perkalian(2, 3, 4));
        System.out.println("Perkalian 2 double: " + Perkalian(2.5, 4.0));

    }
}