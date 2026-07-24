package com.example.factory;

/**
 * Abstract factory class for creating documents.
 * Subclasses implement createDocument() to produce specific document types.
 */
public abstract class DocumentFactory {

    /**
     * Factory method to create a Document.
     *
     * @return a new Document instance
     */
    public abstract Document createDocument();
}
