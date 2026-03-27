import java.util.*;

/**
 * Strategy Interface
 */
interface PalindromeStrategy {
    boolean isValid(String input);
}

/**
 * Stack-based Implementation
 * Logic: Push all chars, then pop to compare.
 */
class StackStrategy implements PalindromeStrategy {
    @Override
    public boolean isValid(String input) {
        String clean = input.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        Stack<Character> stack = new Stack<>();
        for (char c : clean.toCharArray()) stack.push(c);
        
        StringBuilder reversed = new StringBuilder();
        while (!stack.isEmpty()) reversed.append(stack.pop());
        
        return clean.equals(reversed.toString());
    }
}

/**
 * Deque-based Implementation
 * Logic: Add to ends, then remove and compare from both sides simultaneously.
 */
class DequeStrategy implements PalindromeStrategy {
    @Override
    public boolean isValid(String input) {
        String clean = input.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        Deque<Character> deque = new LinkedList<>();
        for (char c : clean.toCharArray()) deque.addLast(c);
        
        while (deque.size() > 1) {
            if (!deque.removeFirst().equals(deque.removeLast())) {
                return false;
            }
        }
        return true;
    }
}

/**
 * Context Class
 */
class PalindromeContext {
    private PalindromeStrategy strategy;

    public void setStrategy(PalindromeStrategy strategy) {
        this.strategy = strategy;
    }

    public boolean executeStrategy(String input) {
        return strategy.isValid(input);
    }
}

/**
 * Main Application
 */
public class UseCase12PalindromeCheckerApp {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        PalindromeContext context = new PalindromeContext();

        System.out.println("--- Advanced Palindrome Checker (Strategy Pattern) ---");
        System.out.print("Enter string: ");
        String input = sc.nextLine();

        System.out.println("Choose Algorithm: 1. Stack (LIFO)  2. Deque (Two-ended)");
        int choice = sc.nextInt();

        // Injecting the strategy at runtime (Polymorphism)
        if (choice == 1) {
            context.setStrategy(new StackStrategy());
            System.out.println("Using Stack Strategy...");
        } else {
