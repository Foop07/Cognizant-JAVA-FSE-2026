-- Exercise 1: Control Structures (PL/SQL)
-- ==========================================

-- Scenario 1: Apply 1% discount to loan interest rates for customers above 60 years old
-- =======================================================================================

DECLARE
    CURSOR c_customers IS
        SELECT customer_id, age
        FROM customers;
    v_customer_id customers.customer_id%TYPE;
    v_age         customers.age%TYPE;
BEGIN
    FOR rec IN c_customers LOOP
        IF rec.age > 60 THEN
            UPDATE loans
            SET interest_rate = interest_rate - 1.0
            WHERE customer_id = rec.customer_id;
            
            DBMS_OUTPUT.PUT_LINE('Applied 1% discount for customer ID: ' || rec.customer_id || ' (Age: ' || rec.age || ')');
        END IF;
    END LOOP;
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Discount applied successfully for all eligible customers.');
END;
/


-- Scenario 2: Set IsVIP flag to TRUE for customers with balance over $10,000
-- =============================================================================

DECLARE
    CURSOR c_customers IS
        SELECT customer_id, balance
        FROM customers;
BEGIN
    FOR rec IN c_customers LOOP
        IF rec.balance > 10000 THEN
            UPDATE customers
            SET IsVIP = 'TRUE'
            WHERE customer_id = rec.customer_id;
            
            DBMS_OUTPUT.PUT_LINE('Customer ID ' || rec.customer_id || ' promoted to VIP (Balance: $' || rec.balance || ')');
        END IF;
    END LOOP;
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('VIP status update completed.');
END;
/


-- Scenario 3: Send reminders for loans due within the next 30 days
-- ==================================================================

DECLARE
    CURSOR c_due_loans IS
        SELECT l.loan_id, l.customer_id, c.customer_name, l.due_date, l.amount
        FROM loans l
        JOIN customers c ON l.customer_id = c.customer_id
        WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    FOR rec IN c_due_loans LOOP
        DBMS_OUTPUT.PUT_LINE('REMINDER: Dear ' || rec.customer_name || 
                             ', your loan (ID: ' || rec.loan_id || 
                             ', Amount: $' || rec.amount || 
                             ') is due on ' || TO_CHAR(rec.due_date, 'DD-MON-YYYY') || 
                             '. Please ensure timely payment.');
    END LOOP;
    
    DBMS_OUTPUT.PUT_LINE('All reminders sent successfully.');
END;
/
