package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

public class LibraryManagementApplication {

    public static void main(String[] args) {
        // Load the Spring application context
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve the BookService bean (BookRepository is injected via setter DI)
        BookService bookService = context.getBean("bookService", BookService.class);

        // Verify that the dependency injection is working
        System.out.println("=== Library Management Application - Dependency Injection ===");
        System.out.println("BookRepository injected: " + (bookService.getBookRepository() != null));

        List<String> books = bookService.getAllBooks();
        System.out.println("\nAvailable Books:");
        for (String book : books) {
            System.out.println("  - " + book);
        }

        // Test adding a book through the service
        bookService.addBook("Spring in Action");
        System.out.println("\nAfter adding 'Spring in Action':");
        for (String book : bookService.getAllBooks()) {
            System.out.println("  - " + book);
        }

        // Test searching for a book
        String foundBook = bookService.searchBook("Clean Code by Robert C. Martin");
        System.out.println("\nSearch result: " + foundBook);
    }
}
