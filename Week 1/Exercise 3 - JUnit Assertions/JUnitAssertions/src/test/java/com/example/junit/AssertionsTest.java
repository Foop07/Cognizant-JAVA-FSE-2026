package com.example.junit;

/**
 * Exercise 3: Assertions in JUnit
 *
 * Demonstrates various JUnit assertion methods for test validation.
 */

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertEquals() {
        assertEquals(5, 2 + 3);
    }

    @Test
    public void testAssertTrue() {
        assertTrue(5 > 3);
    }

    @Test
    public void testAssertFalse() {
        assertFalse(5 < 3);
    }

    @Test
    public void testAssertNull() {
        assertNull(null);
    }

    @Test
    public void testAssertNotNull() {
        assertNotNull(new Object());
    }

    @Test
    public void testAssertArrayEquals() {
        int[] expected = {1, 2, 3};
        int[] actual = {1, 2, 3};
        assertArrayEquals(expected, actual);
    }

    @Test
    public void testAssertSame() {
        String str = "test";
        assertSame(str, str);
    }
}
