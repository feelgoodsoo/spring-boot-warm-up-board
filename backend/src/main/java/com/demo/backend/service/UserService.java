package com.demo.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.backend.entitiy.ServiceUser;
import com.demo.backend.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void write(ServiceUser user) {
        userRepository.save(user);
    }

    public void delete(String userName) {
        userRepository.deleteById(userName);
    }
}
