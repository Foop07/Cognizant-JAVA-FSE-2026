package com.cognizant.accountservice.controller;

import com.cognizant.accountservice.model.Account;
import com.cognizant.accountservice.service.AccountService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AccountController.class);

    @Autowired
    private AccountService accountService;

    /**
     * Get all accounts.
     * GET /accounts
     */
    @GetMapping
    public ResponseEntity<List<Account>> getAllAccounts() {
        LOGGER.info("Start - Get all accounts");
        List<Account> accounts = accountService.getAllAccounts();
        LOGGER.info("End - Retrieved {} accounts", accounts.size());
        return ResponseEntity.ok(accounts);
    }

    /**
     * Get account by ID.
     * GET /accounts/{id}
     */
    @GetMapping("/{id}")
    public ResponseEntity<Account> getAccountById(@PathVariable Long id) {
        LOGGER.info("Start - Get account by ID: {}", id);
        Account account = accountService.getAccountById(id);
        if (account != null) {
            LOGGER.info("End - Account found");
            return ResponseEntity.ok(account);
        }
        LOGGER.warn("Account not found with ID: {}", id);
        return ResponseEntity.notFound().build();
    }

    /**
     * Create a new account.
     * POST /accounts
     */
    @PostMapping
    public ResponseEntity<Account> createAccount(@RequestBody Account account) {
        LOGGER.info("Start - Create account for: {}", account.getAccountHolderName());
        Account createdAccount = accountService.createAccount(account);
        LOGGER.info("End - Account created with ID: {}", createdAccount.getAccountId());
        return ResponseEntity.status(HttpStatus.CREATED).body(createdAccount);
    }

    /**
     * Update an existing account.
     * PUT /accounts/{id}
     */
    @PutMapping("/{id}")
    public ResponseEntity<Account> updateAccount(@PathVariable Long id, @RequestBody Account account) {
        LOGGER.info("Start - Update account ID: {}", id);
        Account updatedAccount = accountService.updateAccount(id, account);
        if (updatedAccount != null) {
            LOGGER.info("End - Account updated");
            return ResponseEntity.ok(updatedAccount);
        }
        LOGGER.warn("Account not found for update with ID: {}", id);
        return ResponseEntity.notFound().build();
    }

    /**
     * Delete an account.
     * DELETE /accounts/{id}
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAccount(@PathVariable Long id) {
        LOGGER.info("Start - Delete account ID: {}", id);
        accountService.deleteAccount(id);
        LOGGER.info("End - Account deleted");
        return ResponseEntity.noContent().build();
    }
}
