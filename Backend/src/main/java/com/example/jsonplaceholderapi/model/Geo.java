package com.example.jsonplaceholderapi.model;

import javax.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class Geo {
    private String lat;
    private String lng;
} 
