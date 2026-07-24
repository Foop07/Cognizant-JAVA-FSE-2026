package com.library.repository;

/**
 * BookRepository - Handles data access for Book entities.
 * Defined as a bean in applicationContext.xml.
 */
public class BookRepository {

    public void addBook(String title) {
        System.out.println("BookRepository: Adding book - " + title);
    }

    public void findAllBooks() {
        System.out.println("BookRepository: Finding all books...");
        System.out.println("  - Spring in Action");
        System.out.println("  - Effective Java");
        System.out.println("  - Clean Code");
    }

    public void findBookById(int id) {
        System.out.println("BookRepository: Finding book with ID " + id);
    }
}
