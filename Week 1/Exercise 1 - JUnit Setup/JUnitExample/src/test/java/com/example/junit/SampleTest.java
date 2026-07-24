package com.example.junit;

/**
 * Exercise 1: Setting Up JUnit
 *
 * Maven Dependency (add to pom.xml):
 * <dependency>
 *     <groupId>junit</groupId>
 *     <artifactId>junit</artifactId>
 *     <version>4.13.2</version>
 *     <scope>test</scope>
 * </dependency>
 *
 * This is a sample test class demonstrating JUnit setup.
 */

import org.junit.Test;
import static org.junit.Assert.*;

public class SampleTest {

    @Test
    public void testAddition() {
        int result = 2 + 3;
        assertEquals("2 + 3 should equal 5", 5, result);
    }

    @Test
    public void testStringNotNull() {
        String str = "Hello JUnit";
        assertNotNull("String should not be null", str);
    }
}
