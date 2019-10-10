package com.mentor.Mentor;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Mentor {

    @Id
    private String mentorName;
    private String password;
    private String knownCourse;
    private String experience;

    public String getMentorName() {
        return mentorName;
    }

    public void setMentorName(String mentorName) {
        this.mentorName = mentorName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getKnownCourse() {
        return knownCourse;
    }

    public void setKnownCourse(String knownCourse) {
        this.knownCourse = knownCourse;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }
}
