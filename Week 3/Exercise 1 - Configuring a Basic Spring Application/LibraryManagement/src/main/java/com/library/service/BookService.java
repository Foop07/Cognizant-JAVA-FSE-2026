package com.library.service;

import com.library.repository.BookRepository;

import java.util.List;

public class BookService {

    private BookRepository bookRepository;

    // Default constructor
    public BookService() {
    }

    // Constructor injection
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // Setter for BookRepository
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public BookRepository getBookRepository() {
        return bookRepository;
    }

    public List<String> getAllBooks() {
        return bookRepository.findAllBooks();
    }

    public void addBook(String book) {
        bookRepository.addBook(book);
    }

    public String searchBook(String title) {
        return bookRepository.findBookByTitle(title);
    }
}
