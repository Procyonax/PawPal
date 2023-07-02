package com.example.petService.models;


import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name="breeds")

public class Breed{

@Column(name="name")
private String name;

@Column(name="trainability")
private int trainability;

@Column(name="health_issues")
private int healthIssues;

@Column(name="exercise_needed")
private int exerciseNeeded;

@Column(name="size")
private String size;

@Column(name="drooling")
private int drooling;

@Column(name="grooming")
private int grooming;

@Column(name="hypoallergenic")
private int hypoallergenic;

@Column(name="barking")
private int barking;

@Column(name="protective_rating")
private int protectiveRating;

@Column(name="sociability")
private int sociability;

@Column(name="friendliness_to_other_dogs")
private int friendlinessToOtherDogs;

@Column(name="child_friendly")
private int childFriendly;

@Column(name="independence")
private int independence;

@Column(name="image")
private String image;

@Column(name="description", length = 1000)
private String description;

@Id
@GeneratedValue(strategy= GenerationType.IDENTITY)
@Column(name="id")
private Long id;

@JsonBackReference
@OneToMany(mappedBy = "breed", fetch = FetchType.LAZY)
private List<PawProfile> profiles;

        public Breed(String name,
        int trainability,
        int healthIssues,
        int exerciseNeeded,
        String size,
        int drooling,
        int grooming,
        int hypoallergenic,
        int barking,
        int protectiveRating,
        int sociability,
        int friendlinessToOtherDogs,
        int childFriendly,
        int independence,
        String image,
        String description){

        this.name=name;
        this.trainability=trainability;
        this.healthIssues=healthIssues;
        this.exerciseNeeded=exerciseNeeded;
        this.size=size;
        this.drooling=drooling;
        this.grooming=grooming;
        this.hypoallergenic=hypoallergenic;
        this.barking=barking;
        this.protectiveRating=protectiveRating;
        this.sociability=sociability;
        this.friendlinessToOtherDogs=friendlinessToOtherDogs;
        this.childFriendly=childFriendly;
        this.independence=independence;
        this.image=image;
        this.description=description;
        }

        public Breed(){

        }

        public String getName() {
                return name;
        }

        public void setName(String name) {
                this.name = name;
        }

        public int getTrainability() {
                return trainability;
        }

        public void setTrainability(int trainability) {
                this.trainability = trainability;
        }

        public int getHealthIssues() {
                return healthIssues;
        }

        public void setHealthIssues(int healthIssues) {
                this.healthIssues = healthIssues;
        }

        public int getExerciseNeeded() {
                return exerciseNeeded;
        }

        public void setExerciseNeeded(int exerciseNeeded) {
                this.exerciseNeeded = exerciseNeeded;
        }

        public String getSize() {
                return size;
        }

        public void setSize(String size) {
                this.size = size;
        }

        public int getDrooling() {
                return drooling;
        }

        public void setDrooling(int drooling) {
                this.drooling = drooling;
        }

        public int getGrooming() {
                return grooming;
        }

        public void setGrooming(int grooming) {
                this.grooming = grooming;
        }

        public int getHypoallergenic() {
                return hypoallergenic;
        }

        public void setHypoallergenic(int hypoallergenic) {
                this.hypoallergenic = hypoallergenic;
        }

        public int getBarking() {
                return barking;
        }

        public void setBarking(int barking) {
                this.barking = barking;
        }

        public int getProtectiveRating() {
                return protectiveRating;
        }

        public void setProtectiveRating(int protectiveRating) {
                this.protectiveRating = protectiveRating;
        }

        public int getSociability() {
                return sociability;
        }

        public void setSociability(int sociability) {
                this.sociability = sociability;
        }

        public int getFriendlinessToOtherDogs() {
                return friendlinessToOtherDogs;
        }

        public void setFriendlinessToOtherDogs(int friendlinessToOtherDogs) {
                this.friendlinessToOtherDogs = friendlinessToOtherDogs;
        }

        public int getChildFriendly() {
                return childFriendly;
        }

        public void setChildFriendly(int childFriendly) {
                this.childFriendly = childFriendly;
        }

        public int getIndependence() {
                return independence;
        }

        public void setIndependence(int independence) {
                this.independence = independence;
        }

        public String getImage() {
                return image;
        }

        public void setImage(String image) {
                this.image = image;
        }

        public String getDescription() {
                return description;
        }

        public void setDescription(String description) {
                this.description = description;
        }

        public Long getId() {
                return id;
        }

        public void setId(Long id) {
                this.id = id;
        }
}
