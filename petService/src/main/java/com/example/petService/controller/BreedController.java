package com.example.petService.controller;

import com.example.petService.models.Breed;
import com.example.petService.repository.BreedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BreedController {

    @Autowired
    BreedRepository breedRepository;

    @GetMapping(value="/breeds")
    public ResponseEntity<List<Breed>> getAllBreeds(){
        return new ResponseEntity<>(breedRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/breeds/{id}")
    public ResponseEntity getBreed(@PathVariable Long id){
        return new ResponseEntity<>(breedRepository.findById(id), HttpStatus.OK);
    }
    @PostMapping(value="/breeds")
    public ResponseEntity<Breed> postBreed(@RequestBody Breed breed){
        breedRepository.save(breed);
        return new ResponseEntity<>(breed, HttpStatus.OK);
    }
    @DeleteMapping(value="/breeds/{id}")
    public ResponseEntity<Breed> deleteBreed(@PathVariable Long id){
        Breed found = breedRepository.getOne(id);
        breedRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
    @PatchMapping(value = "/breeds/{id}")
    public ResponseEntity<Breed> updateBreed(@RequestBody Breed breed){
        breedRepository.save(breed);
        return new ResponseEntity<>(breed, HttpStatus.OK);
    }



}
