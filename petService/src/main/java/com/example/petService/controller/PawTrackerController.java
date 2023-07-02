package com.example.petService.controller;

import com.example.petService.models.PawTracker;
import com.example.petService.repository.PawTrackerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PawTrackerController {

    @Autowired
    PawTrackerRepository pawTrackerRepository;

    @GetMapping(value = "/trackers")
    public ResponseEntity<List<PawTracker>> getAllTrackers(){
        return new ResponseEntity<>(pawTrackerRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/trackers/{id}")
    public ResponseEntity getTracker(@PathVariable Long id){
        return new ResponseEntity(pawTrackerRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/trackers")
    public ResponseEntity<PawTracker> postTracker(@RequestBody PawTracker tracker){
        pawTrackerRepository.save(tracker);
        return new ResponseEntity<>(tracker, HttpStatus.OK);
    }

    @DeleteMapping(value = "/trackers/{id}")
    public ResponseEntity<PawTracker> deleteTracker(@PathVariable Long id){
        PawTracker found = pawTrackerRepository.getOne(id);
        pawTrackerRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PatchMapping(value = "/trackers/{id}")
    public ResponseEntity<PawTracker> updateTracker(@RequestBody PawTracker tracker){
        pawTrackerRepository.save(tracker);
        return new ResponseEntity<>(tracker, HttpStatus.OK);
    }
}
