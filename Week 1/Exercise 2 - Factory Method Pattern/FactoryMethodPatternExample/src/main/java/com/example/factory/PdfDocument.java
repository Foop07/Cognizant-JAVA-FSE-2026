package com.example.factory;

/**
 * Concrete implementation of Document for PDF documents.
 */
public class PdfDocument extends Document {

    @Override
    public void open() {
        System.out.println("Opening PDF Document...");
    }

    @Override
    public void save() {
        System.out.println("Saving PDF Document...");
    }

    @Override
    public void close() {
        System.out.println("Closing PDF Document...");
    }
}
