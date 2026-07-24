package com.example.search;

/**
 * Test class to demonstrate and compare Linear Search and Binary Search
 * on the e-commerce platform product catalog.
 *
 * Analysis:
 * - Linear Search: O(n) - suitable for small, unsorted datasets
 * - Binary Search: O(log n) - much faster for large, sorted datasets
 *
 * For an e-commerce platform with thousands of products, Binary Search
 * is more suitable because:
 * 1. Products can be maintained in sorted order (by name or ID)
 * 2. The performance difference is significant at scale
 *    (e.g., for 1,000,000 products: linear = up to 1M comparisons, binary = ~20 comparisons)
 * 3. The one-time cost of sorting is amortized over many searches
 */
public class SearchTest {

    public static void main(String[] args) {
        // Create product catalog
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Smartphone", "Electronics"),
            new Product(3, "Desk Chair", "Furniture"),
            new Product(4, "Running Shoes", "Footwear"),
            new Product(5, "Backpack", "Accessories"),
            new Product(6, "Headphones", "Electronics"),
            new Product(7, "Water Bottle", "Kitchen"),
            new Product(8, "Notebook", "Stationery"),
            new Product(9, "Monitor", "Electronics"),
            new Product(10, "Keyboard", "Electronics")
        };

        String searchTarget = "Headphones";

        // --- Linear Search ---
        System.out.println("=== Linear Search ===");
        long startTime = System.nanoTime();
        Product linearResult = SearchAlgorithms.linearSearch(products, searchTarget);
        long linearTime = System.nanoTime() - startTime;

        if (linearResult != null) {
            System.out.println("Found: " + linearResult);
        } else {
            System.out.println("Product not found.");
        }
        System.out.println("Time taken: " + linearTime + " ns\n");

        // --- Binary Search (requires sorted array) ---
        System.out.println("=== Binary Search ===");
        Product[] sortedProducts = SearchAlgorithms.sortByName(products);
        startTime = System.nanoTime();
        Product binaryResult = SearchAlgorithms.binarySearch(sortedProducts, searchTarget);
        long binaryTime = System.nanoTime() - startTime;

        if (binaryResult != null) {
            System.out.println("Found: " + binaryResult);
        } else {
            System.out.println("Product not found.");
        }
        System.out.println("Time taken: " + binaryTime + " ns\n");

        // --- Comparison ---
        System.out.println("=== Time Complexity Comparison ===");
        System.out.println("Linear Search: O(n)   - Best: O(1), Average: O(n), Worst: O(n)");
        System.out.println("Binary Search: O(log n) - Best: O(1), Average: O(log n), Worst: O(log n)");
        System.out.println("\nFor large datasets, Binary Search is significantly more efficient.");
        System.out.println("Binary Search is more suitable for the e-commerce platform because");
        System.out.println("products can be pre-sorted, and search operations are frequent.");
    }
}
