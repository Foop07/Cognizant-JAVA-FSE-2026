package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;

/**
 * Main class for the Library Management application.
 * Loads the Spring context and tests bean configuration + dependency injection.
 *
 * Covers:
 * - Exercise 1: Configuring a Basic Spring Application
 * - Exercise 2: Implementing Dependency Injection
 */
public class LibraryManagementApplication {

    public static void main(String[] args) {
        // Load the Spring application context
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get the BookService bean from the context
        BookService bookService = context.getBean("bookService", BookService.class);

        // Test the configuration and dependency injection
        System.out.println("=== Library Management System ===\n");

        bookService.listAllBooks();
        System.out.println();

        bookService.addBook("Design Patterns: Elements of Reusable Object-Oriented Software");
        System.out.println();

        System.out.println("Spring context loaded and DI verified successfully!");
    }
}
