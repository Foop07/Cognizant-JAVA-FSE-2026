package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @Autowired
    private CountryService countryService;

    /**
     * Returns India country details.
     * Sample Request: http://localhost:8083/country
     * Sample Response: {"code": "IN", "name": "India"}
     */
    @RequestMapping("/country")
    public Country getCountryIndia() {
        LOGGER.info("Start");
        Country india = countryService.getCountryIndia();
        LOGGER.info("End");
        return india;
    }

    /**
     * Returns all countries.
     * Sample Request: http://localhost:8083/countries
     */
    @GetMapping("/countries")
    public List<Country> getAllCountries() {
        LOGGER.info("Start");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.info("End");
        return countries;
    }

    /**
     * Returns a specific country based on country code (case insensitive).
     * Sample Request: http://localhost:8083/countries/in
     * Sample Response: {"code": "IN", "name": "India"}
     */
    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        LOGGER.info("Start");
        Country country = countryService.getCountry(code);
        LOGGER.info("End");
        return country;
    }
}
