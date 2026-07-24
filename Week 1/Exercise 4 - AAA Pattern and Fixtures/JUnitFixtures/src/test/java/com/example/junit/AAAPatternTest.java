package com.example.junit;

/**
 * Exercise 4: Arrange-Act-Assert (AAA) Pattern, Test Fixtures,
 * Setup and Teardown Methods in JUnit.
 *
 * The AAA Pattern:
 * - Arrange: Set up the test data and preconditions
 * - Act: Execute the method under test
 * - Assert: Verify the expected outcome
 *
 * @Before runs before each test method
 * @After runs after each test method
 * @BeforeClass runs once before all tests in the class
 * @AfterClass runs once after all tests in the class
 */

import org.junit.Before;
import org.junit.After;
import org.junit.BeforeClass;
import org.junit.AfterClass;
import org.junit.Test;
import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

public class AAAPatternTest {

    private List<String> itemList;

    @BeforeClass
    public static void setUpClass() {
        System.out.println("@BeforeClass: Setting up test class resources (runs once)");
    }

    @AfterClass
    public static void tearDownClass() {
        System.out.println("@AfterClass: Cleaning up test class resources (runs once)");
    }

    @Before
    public void setUp() {
        // Arrange (Test Fixture): Initialize resources before each test
        System.out.println("@Before: Setting up test fixture");
        itemList = new ArrayList<>();
        itemList.add("Item1");
        itemList.add("Item2");
    }

    @After
    public void tearDown() {
        // Cleanup after each test
        System.out.println("@After: Tearing down test fixture");
        itemList.clear();
        itemList = null;
    }

    @Test
    public void testAddItem() {
        // Arrange
        String newItem = "Item3";

        // Act
        itemList.add(newItem);

        // Assert
        assertEquals(3, itemList.size());
        assertTrue(itemList.contains(newItem));
    }

    @Test
    public void testRemoveItem() {
        // Arrange
        String itemToRemove = "Item1";

        // Act
        boolean removed = itemList.remove(itemToRemove);

        // Assert
        assertTrue(removed);
        assertEquals(1, itemList.size());
        assertFalse(itemList.contains(itemToRemove));
    }

    @Test
    public void testGetItem() {
        // Arrange
        int index = 0;

        // Act
        String item = itemList.get(index);

        // Assert
        assertEquals("Item1", item);
    }
}
