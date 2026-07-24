package com.example.forecasting;

/**
 * Financial Forecasting Tool using Recursive Algorithm.
 *
 * Recursion Explanation:
 * - Recursion is a technique where a method calls itself to solve smaller subproblems.
 * - It simplifies problems that have a naturally recursive structure (e.g., tree traversal,
 *   factorial, Fibonacci, compound growth calculations).
 * - Every recursive method needs a base case to prevent infinite recursion.
 *
 * Time Complexity Analysis:
 * - calculateFutureValue(): O(n) where n = number of periods
 *   Each recursive call processes one period, and there are n total periods.
 *
 * Optimization:
 * - For this particular problem, memoization isn't needed since each subproblem is unique.
 * - However, the recursive solution can be converted to an iterative one to avoid
 *   stack overflow for very large number of periods.
 * - Alternatively, the direct formula: futureValue = presentValue * (1 + growthRate)^periods
 *   provides O(1) computation (or O(log n) with exponentiation by squaring).
 */
public class FinancialForecasting {

    /**
     * Recursively calculates the future value based on present value and growth rate.
     *
     * @param presentValue the current value
     * @param growthRate   the growth rate per period (e.g., 0.05 for 5%)
     * @param periods      the number of future periods to forecast
     * @return the predicted future value
     */
    public static double calculateFutureValue(double presentValue, double growthRate, int periods) {
        // Base case: no more periods to calculate
        if (periods == 0) {
            return presentValue;
        }

        // Recursive case: apply growth rate for one period and recurse for remaining periods
        return calculateFutureValue(presentValue * (1 + growthRate), growthRate, periods - 1);
    }

    /**
     * Optimized iterative version to avoid stack overflow for large periods.
     *
     * @param presentValue the current value
     * @param growthRate   the growth rate per period
     * @param periods      the number of future periods
     * @return the predicted future value
     */
    public static double calculateFutureValueIterative(double presentValue, double growthRate, int periods) {
        double futureValue = presentValue;
        for (int i = 0; i < periods; i++) {
            futureValue *= (1 + growthRate);
        }
        return futureValue;
    }

    public static void main(String[] args) {
        double presentValue = 10000.0;  // Current investment: $10,000
        double growthRate = 0.08;        // 8% annual growth rate
        int periods = 10;                // 10 years forecast

        System.out.println("=== Financial Forecasting Tool ===\n");
        System.out.printf("Present Value: $%.2f%n", presentValue);
        System.out.printf("Growth Rate:   %.1f%% per period%n", growthRate * 100);
        System.out.printf("Periods:       %d%n%n", periods);

        // Recursive calculation
        double recursiveResult = calculateFutureValue(presentValue, growthRate, periods);
        System.out.printf("Future Value (Recursive):  $%.2f%n", recursiveResult);

        // Iterative calculation (optimized)
        double iterativeResult = calculateFutureValueIterative(presentValue, growthRate, periods);
        System.out.printf("Future Value (Iterative):  $%.2f%n", iterativeResult);

        System.out.println("\n=== Time Complexity Analysis ===");
        System.out.println("Recursive approach:  O(n) - one recursive call per period");
        System.out.println("Iterative approach:  O(n) - one loop iteration per period");
        System.out.println("Formula approach:    O(1) - direct computation using Math.pow()");
        System.out.println("\nOptimization: Convert recursion to iteration to avoid");
        System.out.println("stack overflow and reduce overhead from function calls.");
    }
}
