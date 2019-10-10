package com.mentor.Mentor;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface MentorRepository extends CrudRepository<Mentor,String> {
    @Query(value="select * from mentor m where m.mentor_name = ?1",nativeQuery = true)
    Mentor getMentor(String mentorName);
}
