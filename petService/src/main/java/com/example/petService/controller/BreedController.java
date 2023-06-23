package com.example.petService.controller;

import com.example.petService.repository.BreedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BreedController {

    @Autowired
    BreedRepository breedRepository;

}
