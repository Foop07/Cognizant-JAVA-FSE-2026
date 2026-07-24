package com.example.mockito;

import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Exercise 1: Mocking and Stubbing with Mockito
 * Tests a service that depends on an external API using mock objects.
 */
public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // Create a mock object for the external API
        ExternalApi mockApi = mock(ExternalApi.class);

        // Stub the method to return a predefined value
        when(mockApi.getData()).thenReturn("Mock Data");

        // Use the mock in the service
        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        // Verify the result
        assertEquals("Mock Data", result);
    }

    /**
     * Exercise 2: Verifying Interactions
     * Ensures that a method is called with specific arguments.
     */
    @Test
    public void testVerifyInteraction() {
        // Create a mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Call the method
        MyService service = new MyService(mockApi);
        service.fetchData();

        // Verify the interaction - ensure getData() was called
        verify(mockApi).getData();
    }
}
