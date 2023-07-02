package com.example.petService.models;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "profiles")
public class PawProfile {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "pet_name")
    private String petName;

    @Column(name = "pet_dob")
    private LocalDate petDob;

    @JsonIgnoreProperties({"profiles"})
    @ManyToOne
    @JoinColumn(name = "breed_id", nullable = false)
    private Breed breed;

    @JsonBackReference
    @OneToMany(mappedBy = "profile", fetch = FetchType.LAZY)
    private List<PawTracker> trackers;

    @Column(name = "vet_name")
    private  String vetName;

    @Column(name = "vet_number")
    private String vetNumber;

    @Column(name = "groomer_name")
    private String groomerName;

    @Column(name = "groomer_number")
    private String groomerNumber;

    @Column(name = "pet_image")
    private String petImage;

    public PawProfile(String petName,
                      LocalDate petDob,
                      Breed breed,
                      String vetName,
                      String vetNumber,
                      String groomerName,
                      String groomerNumber,
                      String petImage) {
        this.petName = petName;
        this.petDob = petDob;
        this.breed = breed;
        this.vetName = vetName;
        this.vetNumber = vetNumber;
        this.groomerName = groomerName;
        this.groomerNumber = groomerNumber;
        this.petImage = petImage;
    }

    public PawProfile(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPetName() {
        return petName;
    }

    public void setPetName(String petName) {
        this.petName = petName;
    }

    public LocalDate getPetDob() {
        return petDob;
    }

    public void setPetDob(LocalDate petDob) {
        this.petDob = petDob;
    }

    public Breed getBreed() {
        return breed;
    }

    public void setBreed(Breed breed) {
        this.breed = breed;
    }

    public List<PawTracker> getTrackers() {
        return trackers;
    }

    public void setTrackers(List<PawTracker> trackers) {
        this.trackers = trackers;
    }

    public String getVetName() {
        return vetName;
    }

    public void setVetName(String vetName) {
        this.vetName = vetName;
    }

    public String getVetNumber() {
        return vetNumber;
    }

    public void setVetNumber(String vetNumber) {
        this.vetNumber = vetNumber;
    }

    public String getGroomerName() {
        return groomerName;
    }

    public void setGroomerName(String groomerName) {
        this.groomerName = groomerName;
    }

    public String getGroomerNumber() {
        return groomerNumber;
    }

    public void setGroomerNumber(String groomerNumber) {
        this.groomerNumber = groomerNumber;
    }

    public String getPetImage() {
        return petImage;
    }

    public void setPetImage(String petImage) {
        this.petImage = petImage;
    }
}
