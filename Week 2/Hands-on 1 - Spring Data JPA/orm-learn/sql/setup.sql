-- SQL Setup for ORM Learn Project
-- ==================================

-- Create the database schema
CREATE SCHEMA IF NOT EXISTS ormlearn;
USE ormlearn;

-- Create country table
CREATE TABLE country (
    co_code VARCHAR(2) PRIMARY KEY,
    co_name VARCHAR(50)
);

-- Insert sample records
INSERT INTO country VALUES ('IN', 'India');
INSERT INTO country VALUES ('US', 'United States of America');
