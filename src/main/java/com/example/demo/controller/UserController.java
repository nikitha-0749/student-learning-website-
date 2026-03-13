package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins="*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public User register(@RequestBody User user){
        return userRepository.save(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user){

        User existingUser = userRepository.findByEmail(user.getEmail());

        if(existingUser == null){
            return "User not found";
        }

        if(existingUser.getPassword().equals(user.getPassword())){
            return "Login successful";
        }

        return "Invalid password";
    }
}