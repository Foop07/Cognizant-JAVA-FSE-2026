package com.cognizant.ormlearn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;

/**
 * Service class for Country operations.
 * Uses CountryRepository for data access.
 */
@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    /**
     * Retrieves all countries from the database.
     *
     * @return list of all Country entities
     */
    @Transactional
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }
}
