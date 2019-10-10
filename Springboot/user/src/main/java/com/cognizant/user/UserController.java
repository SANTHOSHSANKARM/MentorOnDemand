package com.cognizant.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("/user")
    public ArrayList<User> getList() { return userService.getUserList();}

    @RequestMapping("getUser/{userName}")
    public User getUser(@PathVariable String userName) { return userService.getUser(userName);}

    @RequestMapping(method = RequestMethod.POST,value="/user/signup")
    public void addCourse(@RequestBody User s) {
        userService.setUserDetails(s);
    }
}
