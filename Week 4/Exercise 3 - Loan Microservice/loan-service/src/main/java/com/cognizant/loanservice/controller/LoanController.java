package com.cognizant.loanservice.controller;

import com.cognizant.loanservice.model.Loan;
import com.cognizant.loanservice.service.LoanService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/loans")
public class LoanController {

    private static final Logger LOGGER = LoggerFactory.getLogger(LoanController.class);

    @Autowired
    private LoanService loanService;

    /**
     * Get all loans.
     * GET /loans
     */
    @GetMapping
    public ResponseEntity<List<Loan>> getAllLoans() {
        LOGGER.info("Start - Get all loans");
        List<Loan> loans = loanService.getAllLoans();
        LOGGER.info("End - Retrieved {} loans", loans.size());
        return ResponseEntity.ok(loans);
    }

    /**
     * Get loan by ID.
     * GET /loans/{id}
     */
    @GetMapping("/{id}")
    public ResponseEntity<Loan> getLoanById(@PathVariable Long id) {
        LOGGER.info("Start - Get loan by ID: {}", id);
        Loan loan = loanService.getLoanById(id);
        if (loan != null) {
            LOGGER.info("End - Loan found");
            return ResponseEntity.ok(loan);
        }
        LOGGER.warn("Loan not found with ID: {}", id);
        return ResponseEntity.notFound().build();
    }

    /**
     * Create a new loan.
     * POST /loans
     */
    @PostMapping
    public ResponseEntity<Loan> createLoan(@RequestBody Loan loan) {
        LOGGER.info("Start - Create loan for: {}", loan.getBorrowerName());
        Loan createdLoan = loanService.createLoan(loan);
        LOGGER.info("End - Loan created with ID: {}", createdLoan.getLoanId());
        return ResponseEntity.status(HttpStatus.CREATED).body(createdLoan);
    }

    /**
     * Update an existing loan.
     * PUT /loans/{id}
     */
    @PutMapping("/{id}")
    public ResponseEntity<Loan> updateLoan(@PathVariable Long id, @RequestBody Loan loan) {
        LOGGER.info("Start - Update loan ID: {}", id);
        Loan updatedLoan = loanService.updateLoan(id, loan);
        if (updatedLoan != null) {
            LOGGER.info("End - Loan updated");
            return ResponseEntity.ok(updatedLoan);
        }
        LOGGER.warn("Loan not found for update with ID: {}", id);
        return ResponseEntity.notFound().build();
    }

    /**
     * Delete a loan.
     * DELETE /loans/{id}
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLoan(@PathVariable Long id) {
        LOGGER.info("Start - Delete loan ID: {}", id);
        loanService.deleteLoan(id);
        LOGGER.info("End - Loan deleted");
        return ResponseEntity.noContent().build();
    }
}
