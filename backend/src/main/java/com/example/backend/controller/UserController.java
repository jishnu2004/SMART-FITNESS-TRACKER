package com.example.backend.controller;

import com.example.backend.entity.User;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import java.util.HashMap;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200") // Allow Angular frontend
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        Optional<User> existingUser = userService.findByUsername(user.getUsername());
        if (existingUser.isPresent() && existingUser.get().getPassword().equals(user.getPassword())) {
            // Create a response object to send back user details
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Login successful");
            response.put("userId", existingUser.get().getId());
            response.put("username", existingUser.get().getUsername());

            return ResponseEntity.ok(response); // Send the response map
        }
        return ResponseEntity.badRequest().body("Invalid username or password");
    }


    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user) {
        if (userService.findByUsername(user.getUsername()).isPresent()) {
            return ResponseEntity.badRequest().body("Username already exists");
        }
        userService.saveUser(user);
        return ResponseEntity.ok("Signup successful");
    }
}
