package com.example.search;

import java.util.Arrays;
import java.util.Comparator;

/**
 * Search algorithm implementations for the e-commerce platform.
 *
 * Big O Notation Analysis:
 * - Big O notation describes the upper bound of an algorithm's time complexity,
 *   helping us understand how performance scales with input size.
 *
 * Linear Search:
 *   Best Case:  O(1) - Element found at the first position
 *   Average Case: O(n) - Element found somewhere in the middle
 *   Worst Case: O(n) - Element is at the last position or not present
 *
 * Binary Search:
 *   Best Case:  O(1) - Element found at the middle position
 *   Average Case: O(log n) - Element found after several divisions
 *   Worst Case: O(log n) - Element is at the extreme end or not present
 *   Requirement: The array MUST be sorted beforehand.
 */
public class SearchAlgorithms {

    /**
     * Linear Search - searches through the array sequentially.
     * Time Complexity: O(n)
     *
     * @param products array of products to search
     * @param targetName the product name to search for
     * @return the Product if found, null otherwise
     */
    public static Product linearSearch(Product[] products, String targetName) {
        for (Product product : products) {
            if (product.getProductName().equalsIgnoreCase(targetName)) {
                return product;
            }
        }
        return null;
    }

    /**
     * Binary Search - searches through a sorted array by dividing it in half each step.
     * Time Complexity: O(log n)
     * Precondition: The array must be sorted by productName.
     *
     * @param products sorted array of products to search
     * @param targetName the product name to search for
     * @return the Product if found, null otherwise
     */
    public static Product binarySearch(Product[] products, String targetName) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;
            int comparison = products[mid].getProductName().compareToIgnoreCase(targetName);

            if (comparison == 0) {
                return products[mid];
            } else if (comparison < 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }

    /**
     * Sorts products by name for binary search compatibility.
     *
     * @param products array to sort
     * @return sorted copy of the array
     */
    public static Product[] sortByName(Product[] products) {
        Product[] sorted = Arrays.copyOf(products, products.length);
        Arrays.sort(sorted, Comparator.comparing(p -> p.getProductName().toLowerCase()));
        return sorted;
    }
}
