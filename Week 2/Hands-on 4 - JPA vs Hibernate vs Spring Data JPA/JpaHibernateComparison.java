package com.example.comparison;

/**
 * Hands-on 4: Difference between JPA, Hibernate and Spring Data JPA
 * ==================================================================
 *
 * Java Persistence API (JPA):
 * - JSR 338 Specification for persisting, reading and managing data from Java objects
 * - Does not contain concrete implementation of the specification
 * - Hibernate is one of the implementations of JPA
 *
 * Hibernate:
 * - ORM Tool that implements JPA
 *
 * Spring Data JPA:
 * - Does not have JPA implementation, but reduces boilerplate code
 * - Another level of abstraction over JPA implementation providers like Hibernate
 * - Manages transactions
 */

// ========================
// HIBERNATE APPROACH
// ========================
// Requires explicit session management, transaction handling, and error recovery.

/*
 * Hibernate Example - Manual session and transaction management:
 *
 * public Integer addEmployee(Employee employee) {
 *     Session session = factory.openSession();
 *     Transaction tx = null;
 *     Integer employeeID = null;
 *     try {
 *         tx = session.beginTransaction();
 *         employeeID = (Integer) session.save(employee);
 *         tx.commit();
 *     } catch (HibernateException e) {
 *         if (tx != null) tx.rollback();
 *         e.printStackTrace();
 *     } finally {
 *         session.close();
 *     }
 *     return employeeID;
 * }
 */

// ========================
// SPRING DATA JPA APPROACH
// ========================
// Dramatically reduces boilerplate. Just define an interface and a service method.

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Spring Data JPA Repository - just extend JpaRepository, no implementation needed.
 */
interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    // All CRUD methods are auto-generated!
}

/**
 * Spring Data JPA Service - clean, minimal code with @Transactional support.
 */
@Service
class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional
    public void addEmployee(Employee employee) {
        employeeRepository.save(employee);
    }
}

/**
 * Placeholder Employee entity for comparison purposes.
 */
class Employee {
    private Integer id;
    private String name;
    private Double salary;

    // Getters and setters
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public Double getSalary() { return salary; }
    public void setSalary(Double salary) { this.salary = salary; }
}
