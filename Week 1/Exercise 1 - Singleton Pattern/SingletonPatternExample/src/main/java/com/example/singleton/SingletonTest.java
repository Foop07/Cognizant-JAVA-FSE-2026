package com.example.singleton;

/**
 * Test class to verify that the Singleton pattern is correctly implemented.
 * Ensures that only one instance of Logger is created and used across the application.
 */
public class SingletonTest {

    public static void main(String[] args) {
        // Get the first instance of Logger
        Logger logger1 = Logger.getInstance();
        logger1.log("This is the first log message.");

        // Get the second instance of Logger
        Logger logger2 = Logger.getInstance();
        logger2.log("This is the second log message.");

        // Verify both references point to the same instance
        System.out.println("\nSingleton Verification:");
        System.out.println("logger1 hashCode: " + logger1.hashCode());
        System.out.println("logger2 hashCode: " + logger2.hashCode());
        System.out.println("Are both instances the same? " + (logger1 == logger2));

        if (logger1 == logger2) {
            System.out.println("✓ Singleton pattern is correctly implemented!");
        } else {
            System.out.println("✗ Singleton pattern is NOT correctly implemented!");
        }
    }
}
