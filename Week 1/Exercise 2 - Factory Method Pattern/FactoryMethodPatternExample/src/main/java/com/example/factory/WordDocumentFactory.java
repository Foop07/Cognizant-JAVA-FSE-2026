package com.example.factory;

/**
 * Concrete factory for creating WordDocument instances.
 */
public class WordDocumentFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new WordDocument();
    }
}
