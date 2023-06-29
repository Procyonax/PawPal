package com.example.petService.controller;

import com.example.petService.models.DogFact;
import com.example.petService.repository.DogFactsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DogFactController {

    @Autowired
    DogFactsRepository dogFactsRepository;

    @GetMapping(value = "/dogfacts")
    public ResponseEntity<List<DogFact>> getAllDogFacts(){
        return new ResponseEntity<>(dogFactsRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/dogfacts/{id}")
    public ResponseEntity getDogFact(@PathVariable Long id){
        return new ResponseEntity<>(dogFactsRepository.findById(id), HttpStatus.OK);
    }
}
