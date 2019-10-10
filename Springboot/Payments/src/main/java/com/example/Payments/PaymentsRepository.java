package com.example.Payments;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface PaymentsRepository extends CrudRepository<Payments,String> {
    @Query(value = "select *from payments p where p.card_number = ?1",nativeQuery = true)
    Payments getPayments(String payments);
}
