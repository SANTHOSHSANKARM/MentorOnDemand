package com.example.Payments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class PaymentsService {

    @Autowired
    private PaymentsRepository pr;

    public void setPaymentsDetails(Payments payments) {
        pr.save(payments);
    }

    public ArrayList<Payments> getUserList() {

        ArrayList<Payments> UserList = new ArrayList<Payments>();
        pr.findAll().forEach(UserList::add);
//		System.out.println("get request"+userList);
        return UserList;
    }

    public Payments getPayments(String cardNumber) {
        return pr.getPayments(cardNumber);
    }

}
