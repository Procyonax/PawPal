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
                "boxer.jpg",
                "Boxers are medium-sized dogs known for their muscular build and playful nature. They are energetic and require regular exercise to stay happy and healthy. Boxers are loyal and protective, making them great companions and family dogs.");
        breedRepository.save(boxer);

        Breed berneseMountainDog = new Breed("Bernese Mountain Dog",
                3,
                4,
                4,
                "Large",
                4,
                4,
                1,
                2,
                4,
                5,
                5,
                5,
                2,
                "bernese_mountain_dog.jpg",
                "Bernese Mountain Dogs are large and sturdy working dogs originating from Switzerland. They have a thick, tri-colored coat and a gentle and friendly nature. Bernese Mountain Dogs are known for their loyalty and make excellent family pets.");
        breedRepository.save(berneseMountainDog);

        Breed pomeranian = new Breed("Pomeranian",
                3,
                3,
                3,
                "Small",
                1,
                4,
                1,
                4,
                2,
                4,
                3,
                3,
                2,
                "pomeranian.jpq",
                "Pomeranians are small and lively dogs known for their fluffy double coat. They are confident and outgoing and often have a bold personality. Pomeranians require regular grooming to maintain their coat's appearance.");
        breedRepository.save(pomeranian);

        Breed rhodesianRidgeback = new Breed("Rhodesian Ridgeback",
                3,
                4,
                5,
                "Large",
                2,
                2,
                1,
                2,
                4,
                4,
                3,
                3,
                4,
                "rhodesian_ridgeback.jpq",
                "Rhodesian Ridgebacks are large and athletic dogs originally bred in Southern Africa. They are known for the ridge of hair along their back that grows in the opposite direction. Rhodesian Ridgebacks are loyal, protective, and make excellent guard dogs.");
        breedRepository.save(rhodesianRidgeback);

        Breed caneCorse = new Breed("Cane Corso",
                4,
                3,
                4,
                "Large",
                3,
                2,
                1,
                3,
                5,
                3,
                3,
                3,
                4,
                "cane_corse.jpg",
                "Cane Corsos are powerful and muscular dogs originating from Italy. They have a strong guarding instinct and are known for their loyalty and protective nature. Cane Corsos require early socialization and consistent training.");
        breedRepository.save(caneCorse);


    }
}

