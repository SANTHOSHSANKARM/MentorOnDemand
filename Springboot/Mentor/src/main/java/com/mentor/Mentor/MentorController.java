package com.mentor.Mentor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin
public class MentorController {

    @Autowired
    private MentorService mentorService;
    @RequestMapping("/mentor")
    public ArrayList<Mentor> getList(){
        return mentorService.getMentorList();
    }

    @RequestMapping("/getMentor/{mentorName}")
    public Mentor getMentor(@PathVariable String mentorName) {
        return mentorService.getMentor(mentorName);
    }
    @RequestMapping(method= RequestMethod.POST,value = "/mentor/signup")
    public void addMentors(@RequestBody Mentor s) {

        mentorService.setMentorDetails(s);
    }
}
