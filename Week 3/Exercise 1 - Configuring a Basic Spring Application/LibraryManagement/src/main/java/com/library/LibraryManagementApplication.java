package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

public class LibraryManagementApplication {

    public static void main(String[] args) {
        // Load the Spring application context
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve the BookService bean
        BookService bookService = context.getBean("bookService", BookService.class);

        // Test the configuration
        System.out.println("=== Library Management Application ===");
        System.out.println("Spring context loaded successfully!");

        List<String> books = bookService.getAllBooks();
        System.out.println("\nAvailable Books:");
        for (String book : books) {
            System.out.println("  - " + book);
        }

        // Add a new book
        bookService.addBook("Spring in Action");
        System.out.println("\nAfter adding 'Spring in Action':");
        for (String book : bookService.getAllBooks()) {
            System.out.println("  - " + book);
        }
    }
}
