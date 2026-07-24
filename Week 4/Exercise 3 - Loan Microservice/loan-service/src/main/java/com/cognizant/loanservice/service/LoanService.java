package com.cognizant.loanservice.service;

import com.cognizant.loanservice.model.Loan;
import com.cognizant.loanservice.repository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class LoanService {

    @Autowired
    private LoanRepository loanRepository;

    @Transactional(readOnly = true)
    public List<Loan> getAllLoans() {
        return loanRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Loan getLoanById(Long id) {
        return loanRepository.findById(id).orElse(null);
    }

    @Transactional(readOnly = true)
    public Loan getLoanByNumber(String loanNumber) {
        return loanRepository.findByLoanNumber(loanNumber);
    }

    @Transactional(readOnly = true)
    public List<Loan> getLoansByBorrower(String borrowerName) {
        return loanRepository.findByBorrowerName(borrowerName);
    }

    @Transactional
    public Loan createLoan(Loan loan) {
        return loanRepository.save(loan);
    }

    @Transactional
    public Loan updateLoan(Long id, Loan loanDetails) {
        Loan loan = loanRepository.findById(id).orElse(null);
        if (loan != null) {
            loan.setBorrowerName(loanDetails.getBorrowerName());
            loan.setLoanType(loanDetails.getLoanType());
            loan.setPrincipalAmount(loanDetails.getPrincipalAmount());
            loan.setInterestRate(loanDetails.getInterestRate());
            loan.setTenureInMonths(loanDetails.getTenureInMonths());
            loan.setStatus(loanDetails.getStatus());
            return loanRepository.save(loan);
        }
        return null;
    }

    @Transactional
    public void deleteLoan(Long id) {
        loanRepository.deleteById(id);
    }
}
