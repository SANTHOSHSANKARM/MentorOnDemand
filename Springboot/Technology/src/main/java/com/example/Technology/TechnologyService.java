package com.example.Technology;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class TechnologyService {

    @Autowired
    private TechnologyRepository tr;

    public void setTechnologyDetails(Technology technology) {
        tr.save(technology);
    }

    public ArrayList<Technology> getUserList() {

        ArrayList<Technology> UserList = new ArrayList<Technology>();
        tr.findAll().forEach(UserList::add);
//		System.out.println("get request"+userList);
        return UserList;
    }

    public Technology getTechnology(String technologyName) {
        return tr.getTechnology(technologyName);
    }
}
