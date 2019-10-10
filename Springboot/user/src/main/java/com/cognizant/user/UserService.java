package com.cognizant.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserService {

    @Autowired
    private UserRepository ur;

    public void setUserDetails(User user) {
        ur.save(user);
    }

    public ArrayList<User> getUserList() {

        ArrayList<User> UserList = new ArrayList<User>();
        ur.findAll().forEach(UserList::add);
//		System.out.println("get request"+userList);
        return UserList;
    }

    public User getUser(String userName) {
        return ur.getUser(userName);
    }
}
