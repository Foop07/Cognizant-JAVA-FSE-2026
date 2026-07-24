package com.example.factory;

/**
 * Concrete factory for creating ExcelDocument instances.
 */
public class ExcelDocumentFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new ExcelDocument();
    }
}
