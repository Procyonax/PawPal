package com.example.petService.components;

import com.example.petService.models.Breed;
import com.example.petService.repository.BreedRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Profile("!test") //Run every time EXCEPT tests
@Component

public class DataLoader implements ApplicationRunner {

    @Autowired
    BreedRepository breedRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) throws Exception {

//Breedstobeaddedwillgoinhere...
//BreedBoxer=newBreed();
//BreedRepository.save(Boxer);

        Breed boxer = new Breed("Boxer",
                3,
                4,
                4,
                "Medium",
                3,
                2,
                1,
                3,
                4,
                4,
                3,
                4,
                2,
                "Boxers are medium-sized dogs known for their muscular build and playful nature. They are energetic and require regular exercise to stay happy and healthy. Boxers are loyal and protective, making them great companions and family dogs.");
        breedRepository.save(boxer);

    }



}

