package com.cognizant.user;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

//import com.mentor.pojo.MentorDetails;

public interface UserRepository extends CrudRepository<User,String>{
    @Query(value = "select *from user u where u.user_name = ?1",nativeQuery = true)
    User getUser(String userName);
}
