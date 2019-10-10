package com.example.Technology;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Technology {

    @Id
    private String technologyName;
    private String prerequisite;

    public String getTechnologyName() {
        return technologyName;
    }

    public void setTechnologyName(String technologyName) {
        this.technologyName = technologyName;
    }

    public String getPrerequisite() {
        return prerequisite;
    }

    public void setPrerequisite(String prerequisite) {
        this.prerequisite = prerequisite;
    }
}
