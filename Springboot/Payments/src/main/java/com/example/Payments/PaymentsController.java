package com.example.Payments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin
public class PaymentsController {

    @Autowired
    private PaymentsService paymentsService;

    @RequestMapping("/payments")
    public ArrayList<Payments> getList() { return paymentsService.getUserList();}

    @RequestMapping("getPayment/{cardNumber}")
    public Payments getPayments(@PathVariable String userName) { return paymentsService.getPayments(userName);}

    @RequestMapping(method = RequestMethod.POST,value="/payments/signup")
    public void addCard(@RequestBody Payments p) {
        paymentsService.setPaymentsDetails(p);
    }
}
