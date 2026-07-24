package com.cognizant.loanservice.repository;

import com.cognizant.loanservice.model.Loan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LoanRepository extends JpaRepository<Loan, Long> {

    Loan findByLoanNumber(String loanNumber);

    List<Loan> findByBorrowerName(String borrowerName);

    List<Loan> findByLoanType(String loanType);

    List<Loan> findByStatus(String status);
}
