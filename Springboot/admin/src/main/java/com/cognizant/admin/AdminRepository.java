package com.cognizant.admin;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

//import com.mentor.pojo.MentorDetails;

public interface AdminRepository extends CrudRepository<Admin,String>{
    @Query(value = "select *from admin a where a.email = ?1",nativeQuery = true)
    Admin getAdmin(String email);
}
