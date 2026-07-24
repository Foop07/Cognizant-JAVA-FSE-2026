-- Exercise 3: Stored Procedures (PL/SQL)
-- =========================================

-- Scenario 1: ProcessMonthlyInterest
-- Calculates and updates the balance of all savings accounts by applying 1% interest rate.
-- ========================================================================================

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    UPDATE accounts
    SET balance = balance + (balance * 0.01)
    WHERE account_type = 'Savings';
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Monthly interest of 1% applied to all savings accounts successfully.');
END ProcessMonthlyInterest;
/


-- Scenario 2: UpdateEmployeeBonus
-- Updates the salary of employees in a given department by adding a bonus percentage.
-- ========================================================================================

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department_id IN employees.department_id%TYPE,
    p_bonus_percentage IN NUMBER
) IS
    v_rows_updated NUMBER;
BEGIN
    UPDATE employees
    SET salary = salary + (salary * p_bonus_percentage / 100)
    WHERE department_id = p_department_id;
    
    v_rows_updated := SQL%ROWCOUNT;
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Bonus of ' || p_bonus_percentage || '% applied to ' || v_rows_updated || ' employees in department ' || p_department_id || '.');
END UpdateEmployeeBonus;
/


-- Scenario 3: TransferFunds
-- Transfers a specified amount from one account to another with balance check.
-- ========================================================================================

CREATE OR REPLACE PROCEDURE TransferFunds(
    p_source_account_id IN accounts.account_id%TYPE,
    p_target_account_id IN accounts.account_id%TYPE,
    p_amount IN NUMBER
) IS
    v_source_balance accounts.balance%TYPE;
BEGIN
    -- Check source account balance
    SELECT balance INTO v_source_balance
    FROM accounts
    WHERE account_id = p_source_account_id;
    
    -- Verify sufficient funds
    IF v_source_balance < p_amount THEN
        DBMS_OUTPUT.PUT_LINE('ERROR: Insufficient balance in account ' || p_source_account_id || 
                             '. Available: $' || v_source_balance || ', Requested: $' || p_amount);
        RETURN;
    END IF;
    
    -- Debit from source account
    UPDATE accounts
    SET balance = balance - p_amount
    WHERE account_id = p_source_account_id;
    
    -- Credit to target account
    UPDATE accounts
    SET balance = balance + p_amount
    WHERE account_id = p_target_account_id;
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Successfully transferred $' || p_amount || 
                         ' from account ' || p_source_account_id || 
                         ' to account ' || p_target_account_id || '.');
                         
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('ERROR: One or both account IDs are invalid.');
        ROLLBACK;
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('ERROR: ' || SQLERRM);
        ROLLBACK;
END TransferFunds;
/
