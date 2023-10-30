package com.demo.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.backend.entitiy.ServiceUser;
import com.demo.backend.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping
public class UserController {

    @Autowired
    UserService userService;

    @ResponseBody
    @PostMapping("/user/register")
    public String userRegister(@RequestBody ServiceUser user) {

        userService.write(user);
        return "registration done";
    }

    @ResponseBody
    @PostMapping("/user/delete")
    public String userDelete(@RequestBody String id) {
        userService.delete(id);
        return "delete done";
    }

    @ResponseBody
    @GetMapping("/user/test")
    public String userPageTest() {
        return "hihihihi";
    }

}
