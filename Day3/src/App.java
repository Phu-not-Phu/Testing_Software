import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        String greeting = "";
        Scanner sc = new Scanner (System.in);
        System.out.println("Enter your greeting: ");
        greeting = sc.nextLine();
        System.out.println("This is your greeting: " + greeting);
    }
}
