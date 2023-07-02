package com.example.petService.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDate;

@Entity
@Table(name = "pawtracker")
public class PawTracker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @JsonIgnoreProperties({"pawtracker"})
    @ManyToOne
    @JoinColumn(name = "pawprofile_id", nullable = false)
    private PawProfile profile;


    @Column(name = "date")
    private LocalDate date;

    @Column(name = "type")
    private String type;

    @Column(name = "minutes")
    private Integer minutes;

    public PawTracker(PawProfile profile, LocalDate date, String type, Integer minutes) {
        this.profile = profile;
        this.date = date;
        this.type = type;
        this.minutes = minutes;
    }

    public PawTracker(){

    }

    public PawProfile getProfile() {
        return profile;
    }

    public void setProfile(PawProfile profile) {
        this.profile = profile;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getMinutes() {
        return minutes;
    }

    public void setMinutes(Integer minutes) {
        this.minutes = minutes;
    }
}
