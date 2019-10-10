package com.example.Technology;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin
public class TechnologyController {
    @Autowired
    private TechnologyService technologyService;

    @RequestMapping("/technology")
    public ArrayList<Technology> getList() { return technologyService.getUserList();}

    @RequestMapping("getTechnology/{technologyName}")
    public Technology getTechnology(@PathVariable String technologyName) { return technologyService.getTechnology(technologyName);}

    @RequestMapping(method = RequestMethod.POST,value="/technology/signup")
    public void addTechnology(@RequestBody Technology t) {
        technologyService.setTechnologyDetails(t);
    }
}
