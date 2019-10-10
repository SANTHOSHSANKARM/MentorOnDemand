package com.cognizant.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin
public class AdminController {
    @Autowired
    private AdminService adminService;
    @RequestMapping("/admin")
    public ArrayList<Admin> getList(){
        return adminService.getAdminList();
    }

    @RequestMapping("getAdmin/{email}")
    public Admin getUser(@PathVariable String email) { return adminService.getAdmin(email);}

    @RequestMapping(method= RequestMethod.POST,value = "/admin")
    public void addUsers(@RequestBody Admin s) {
        adminService.setAdminDetails(s);
    }

}
