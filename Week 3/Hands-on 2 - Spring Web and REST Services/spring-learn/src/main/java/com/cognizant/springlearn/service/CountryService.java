package com.cognizant.springlearn.service;

import com.cognizant.springlearn.model.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    private ApplicationContext countryContext;

    public CountryService() {
        this.countryContext = new ClassPathXmlApplicationContext("country.xml");
    }

    /**
     * Returns India country bean from Spring XML configuration.
     */
    public Country getCountryIndia() {
        return countryContext.getBean("india", Country.class);
    }

    /**
     * Returns all countries from country.xml.
     */
    @SuppressWarnings("unchecked")
    public List<Country> getAllCountries() {
        return countryContext.getBean("countryList", List.class);
    }

    /**
     * Returns a specific country based on country code (case insensitive).
     * Uses lambda expression to filter the country list.
     */
    public Country getCountry(String code) {
        List<Country> countries = getAllCountries();
        return countries.stream()
                .filter(country -> country.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);
    }
}
