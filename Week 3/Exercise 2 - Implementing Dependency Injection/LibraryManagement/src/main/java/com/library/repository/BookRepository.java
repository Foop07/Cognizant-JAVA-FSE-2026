package com.library.repository;

import java.util.ArrayList;
import java.util.List;

public class BookRepository {

    private List<String> books = new ArrayList<>();

    public BookRepository() {
        books.add("Introduction to Spring Framework");
        books.add("Java Design Patterns");
        books.add("Clean Code by Robert C. Martin");
    }

    public List<String> findAllBooks() {
        return books;
    }

    public void addBook(String book) {
        books.add(book);
    }

    public String findBookByTitle(String title) {
        return books.stream()
                .filter(book -> book.equalsIgnoreCase(title))
                .findFirst()
                .orElse(null);
    }
}
