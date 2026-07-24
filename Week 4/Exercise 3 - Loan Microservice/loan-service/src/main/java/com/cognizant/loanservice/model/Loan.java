package com.cognizant.loanservice.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "loans")
public class Loan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long loanId;

    private String loanNumber;
    private String borrowerName;
    private String loanType;
    private double principalAmount;
    private double interestRate;
    private int tenureInMonths;
    private Date startDate;
    private String status;

    // Default constructor
    public Loan() {
    }

    // Parameterized constructor
    public Loan(String loanNumber, String borrowerName, String loanType,
                double principalAmount, double interestRate, int tenureInMonths,
                Date startDate, String status) {
        this.loanNumber = loanNumber;
        this.borrowerName = borrowerName;
        this.loanType = loanType;
        this.principalAmount = principalAmount;
        this.interestRate = interestRate;
        this.tenureInMonths = tenureInMonths;
        this.startDate = startDate;
        this.status = status;
    }

    // Getters and Setters
    public Long getLoanId() {
        return loanId;
    }

    public void setLoanId(Long loanId) {
        this.loanId = loanId;
    }

    public String getLoanNumber() {
        return loanNumber;
    }

    public void setLoanNumber(String loanNumber) {
        this.loanNumber = loanNumber;
    }

    public String getBorrowerName() {
        return borrowerName;
    }

    public void setBorrowerName(String borrowerName) {
        this.borrowerName = borrowerName;
    }

    public String getLoanType() {
        return loanType;
    }

    public void setLoanType(String loanType) {
        this.loanType = loanType;
    }

    public double getPrincipalAmount() {
        return principalAmount;
    }

    public void setPrincipalAmount(double principalAmount) {
        this.principalAmount = principalAmount;
    }

    public double getInterestRate() {
        return interestRate;
    }

    public void setInterestRate(double interestRate) {
        this.interestRate = interestRate;
    }

    public int getTenureInMonths() {
        return tenureInMonths;
    }

    public void setTenureInMonths(int tenureInMonths) {
        this.tenureInMonths = tenureInMonths;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Loan{" +
                "loanId=" + loanId +
                ", loanNumber='" + loanNumber + '\'' +
                ", borrowerName='" + borrowerName + '\'' +
                ", loanType='" + loanType + '\'' +
                ", principalAmount=" + principalAmount +
                ", interestRate=" + interestRate +
                ", tenureInMonths=" + tenureInMonths +
                ", startDate=" + startDate +
                ", status='" + status + '\'' +
                '}';
    }
}
