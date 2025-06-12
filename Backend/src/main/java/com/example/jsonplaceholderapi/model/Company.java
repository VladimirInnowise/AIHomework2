package com.example.jsonplaceholderapi.model;

import javax.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class Company {
    private String name;
    private String catchPhrase;
    private String bs;
} 
