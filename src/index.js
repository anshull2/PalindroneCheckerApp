import java.util.Stack;
import java.util.Scanner;

/**
 * PalindromeChecker Class
 * Encapsulates the logic for palindrome validation.
 */
class PalindromeChecker {

    /**
     * Checks if a string is a palindrome using a Stack.
     * SRP: This method only handles the validation logic.
     */
    public boolean checkPalindrome(String input) {
        if (input == null || input.isEmpty()) {
            return false;
        }

        // Clean the input: remove non-alphanumeric and convert to lowercase
        String cleanedStr = input.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        Stack<Character> stack = new Stack<>();

        // Push all characters onto the stack
        for (char c : cleanedStr.toCharArray()) {
            stack.push(c);
        }

        // Build the reversed string by popping from the stack
        StringBuilder reversedStr = new StringBuilder();
        while (!stack.isEmpty()) {
            reversedStr.append(stack.pop());
        }

        return cleanedStr.equals(reversedStr.toString());
    }
}

/**
 * Main Application Class
 */
public class UseCase11PalindromeCheckerApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        PalindromeChecker checker = new PalindromeChecker();

        System.out.println("--- Palindrome Checker App (OOPS Edition) ---");
        System.out.print("Enter a string to check: ");
        String userInput = scanner.nextLine();

        boolean result = checker.checkPalindrome(userInput);

        if (result) {
            System.out.println("Result: '" + userInput + "' is a palindrome.");
        } else {
            System.out.println("Result: '" + userInput + "' is NOT a palindrome.");
        }

        scanner.close();
    }
}
