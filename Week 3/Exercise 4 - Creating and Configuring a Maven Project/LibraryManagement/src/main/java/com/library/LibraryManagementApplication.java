package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {

    public static void main(String[] args) {
        // Load the Spring application context
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        System.out.println("=== Library Management Application ===");
        System.out.println("Maven project configured successfully!");
        System.out.println("Spring Context loaded with Spring Context, AOP, and WebMVC dependencies.");
    }
}
