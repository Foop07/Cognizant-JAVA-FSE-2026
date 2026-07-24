package com.example.singleton;

/**
 * Logger class implementing the Singleton Design Pattern.
 * Ensures only one instance of the Logger exists throughout the application lifecycle.
 *
 * Scenario: A logging utility class in your application needs to have only one instance
 * to ensure consistent logging.
 */
public class Logger {

    // Private static instance of the Logger class
    private static Logger instance;

    // Private constructor to prevent instantiation from outside
    private Logger() {
        // Initialize logger resources here
    }

    /**
     * Public static method to get the single instance of the Logger class.
     * Uses lazy initialization with synchronized block for thread safety.
     *
     * @return the singleton Logger instance
     */
    public static Logger getInstance() {
        if (instance == null) {
            synchronized (Logger.class) {
                if (instance == null) {
                    instance = new Logger();
                }
            }
        }
        return instance;
    }

    /**
     * Logs an informational message.
     *
     * @param message the message to log
     */
    public void log(String message) {
        System.out.println("[LOG] " + message);
    }
}
