package com.cognizant.authenticationservice.controller;

import com.cognizant.authenticationservice.model.AuthenticationResponse;
import com.cognizant.authenticationservice.util.JwtUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @Autowired
    private JwtUtil jwtUtil;

    /**
     * Authenticates user and returns JWT token.
     * 
     * Request: curl -s -u user:pwd http://localhost:8090/authenticate
     * Response: {"token":"eyJhbGciOiJIUzI1NiJ9..."}
     */
    @GetMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestHeader("Authorization") String authHeader) {

        LOGGER.info("Start - Authentication request received");

        // Decode the Authorization header (Basic Auth)
        String base64Credentials = authHeader.substring("Basic ".length()).trim();
        String credentials = new String(Base64.getDecoder().decode(base64Credentials));
        String[] values = credentials.split(":", 2);
        String username = values[0];
        String password = values[1];

        LOGGER.debug("Authenticating user: {}", username);

        // Validate credentials (simplified - in production use UserDetailsService)
        if ("user".equals(username) && "pwd".equals(password)) {
            // Generate JWT token
            String token = jwtUtil.generateToken(username);
            LOGGER.info("End - Token generated successfully");
            return ResponseEntity.ok(new AuthenticationResponse(token));
        }

        LOGGER.warn("Authentication failed for user: {}", username);
        return ResponseEntity.status(401).build();
    }
}
