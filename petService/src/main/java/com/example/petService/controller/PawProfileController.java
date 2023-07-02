package com.example.petService.controller;

import com.example.petService.models.PawProfile;
import com.example.petService.repository.PawProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PawProfileController {
    @Autowired
    PawProfileRepository pawProfileRepository;

    @GetMapping(value = "/profiles")
    public ResponseEntity<List<PawProfile>> getAllProfiles(){
        return new ResponseEntity<>(pawProfileRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/profiles/{id}")
    public ResponseEntity getProfile(@PathVariable Long id){
        return new ResponseEntity<>(pawProfileRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/profiles")
    public ResponseEntity<PawProfile> createProfile(@RequestBody PawProfile profile){
        pawProfileRepository.save(profile);
        return new ResponseEntity<>(profile, HttpStatus.OK);
    }

    @DeleteMapping(value = "/profiles/{id}")
    public ResponseEntity<PawProfile> deleteProfile(@PathVariable Long id){
        PawProfile found = pawProfileRepository.getOne(id);
        pawProfileRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PatchMapping(value = "/profile/{id}")
    public ResponseEntity<PawProfile> updateProfile(@RequestBody PawProfile profile){
        pawProfileRepository.save(profile);
        return new ResponseEntity<>(profile, HttpStatus.OK);
    }
}
