package com.mentor.Mentor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MentorService {

    @Autowired
    private MentorRepository mr;

    public void setMentorDetails(Mentor mentor) {
        mr.save(mentor);
    }

    public ArrayList<Mentor> getMentorList() {

        ArrayList<Mentor> mentorList = new ArrayList<Mentor>();
        mr.findAll().forEach(mentorList::add);
//		System.out.println("get request"+userList);
        return mentorList;
    }

    public Mentor getMentor(String mentorName) {
        return mr.getMentor(mentorName);
    }
}
