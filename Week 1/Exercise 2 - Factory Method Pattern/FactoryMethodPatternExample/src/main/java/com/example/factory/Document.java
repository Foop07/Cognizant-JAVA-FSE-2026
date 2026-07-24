package com.example.factory;

/**
 * Abstract base class for all document types.
 * Part of the Factory Method Pattern implementation.
 */
public abstract class Document {

    /**
     * Opens the document.
     */
    public abstract void open();

    /**
     * Saves the document.
     */
    public abstract void save();

    /**
     * Closes the document.
     */
    public abstract void close();
}
