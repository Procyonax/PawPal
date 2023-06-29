package com.example.petService.models;

import javax.persistence.*;

@Entity
@Table(name="DogFacts")
public class DogFact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    @Column(name="description", length = 1000)
    private String description;

    public DogFact(String description) {
        this.description = description;
    }

    public DogFact(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
