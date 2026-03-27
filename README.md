import java.util.*;

/**
 * Strategy Interface
 */
interface PalindromeStrategy {
    boolean isValid(String input);
}

/**
 * Stack Strategy: O(n) Time, O(n) Space
 */
class StackStrategy implements PalindromeStrategy {
    public boolean isValid(String input) {
        Stack<Character> stack = new Stack<>();
        for (char c : input.toCharArray()) stack.push(c);
        StringBuilder sb = new StringBuilder();
        while (!stack.isEmpty()) sb.append(stack.pop());
        return input.equals(sb.toString());
    }
}

/**
 * Deque Strategy: O(n) Time, O(n) Space (Lower constant factor)
 */
class DequeStrategy implements PalindromeStrategy {
    public boolean isValid(String input) {
        Deque<Character> deque = new LinkedList<>();
        for (char c : input.toCharArray()) deque.addLast(c);
        while (deque.size() > 1) {
            if (!deque.removeFirst().equals(deque.removeLast())) return false;
        }
        return true;
    }
}

/**
 * Two-Pointer Strategy: O(n) Time, O(1) Space (Most Efficient)
 */
class TwoPointerStrategy implements PalindromeStrategy {
    public boolean isValid(String input) {
        int left = 0, right = input.length() - 1;
        while (left < right) {
            if (input.charAt(left++) != input.charAt(right--)) return false;
        }
        return true;
    }
}

public class UseCase13PalindromeCheckerApp {
    public static void main(String[] args) {
        // Generate a large string for testing (100,000 characters)
        StringBuilder sb = new StringBuilder("racecar".repeat(15000));
        String testData = sb.toString();

        System.out.println("--- UC13: Performance Comparison ---");
        System.out.println("Testing with string length: " + testData.length());
        System.out.println("-------------------------------------------------");
        System.out.printf("%-20s | %-15s\n", "Strategy", "Execution Time (ns)");
        System.out.println("-------------------------------------------------");

        compare(new StackStrategy(), "Stack Strategy", testData);
        compare(new DequeStrategy(), "Deque Strategy", testData);
        compare(new TwoPointerStrategy(), "Two-Pointer Strategy", testData);
    }

    private static void compare(PalindromeStrategy strategy, String name, String data) {
        long startTime = System.nanoTime();
        strategy.isValid(data);
        long endTime = System.nanoTime();
        
        System.out.printf("%-20s | %-15d\n", name, (endTime - startTime));
    }
}
