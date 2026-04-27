public class Overloading {

    static int perkalian(int a, int b){
        System.out.println("Perkalian 2 int: " + a * b);
        return a * b;
    }

    static int perkalian(int a, int b, int c){
        System.out.println("Perkalian 3 int: " + a * b * c);
        return a * b * c;
    }

    static double perkalian(double a, double b){
        System.out.println("Perkalian 2 double: " + a * b);
        return a * b;
    }

    static float perkalian(float a, float b){
        System.out.println("Perkalian 2 float: " + a * b);
        return a * b;
    }

    void perkalian(int a, int b, int c, int d){
        System.out.println("Perkalian 4 int: " + a * b * c * d);
    }
}