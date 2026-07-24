package com.example.factory;

/**
 * Concrete factory for creating PdfDocument instances.
 */
public class PdfDocumentFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new PdfDocument();
    }
}
