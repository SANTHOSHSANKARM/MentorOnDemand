package com.example.Payments;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Payments {
    @Id
    private String cardNumber;
    private String cardName;
    private int cvvNumber;
    private String expiryString;


    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getCardName() {
        return cardName;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    public int getCvvNumber() {
        return cvvNumber;
    }

    public void setCvvNumber(int cvvNumber) {
        this.cvvNumber = cvvNumber;
    }

    public String getExpiryString() {
        return expiryString;
    }

    public void setExpiryString(String expiryString) {
        this.expiryString = expiryString;
    }
}
