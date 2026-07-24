package com.library.service;

import com.library.repository.BookRepository;

/**
 * BookService - Business logic for Book operations.
 * Depends on BookRepository (injected via Spring DI).
 */
public class BookService {

    private BookRepository bookRepository;

    // Setter method for Dependency Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println("BookService: Processing add book request...");
        bookRepository.addBook(title);
    }

    public void listAllBooks() {
        System.out.println("BookService: Listing all books...");
        bookRepository.findAllBooks();
    }
}
