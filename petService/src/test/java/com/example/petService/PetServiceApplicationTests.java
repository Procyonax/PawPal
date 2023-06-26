package com.example.petService;

import com.example.petService.models.Breed;
import com.example.petService.repository.BreedRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class PetServiceApplicationTests {

	@Autowired
	BreedRepository breedRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canCreateBreed(){
		Breed scooby = new Breed("Scooby",
				3,
				3,
				4,
				"Large",
				2,
				3,
				4,
				5,
				3,
				4,
				3,
				4,
				4,
				"scooby.jpg",
				"Classic virtual cartoon great dane");
		breedRepository.save(scooby);
	}

	@Test
	public void canFindBreedTrainability(){
		Breed scooby = new Breed("Scooby",
				3,
				3,
				4,
				"Large",
				2,
				3,
				4,
				5,
				3,
				4,
				3,
				4,
				4,
				"scooby.jpg",
				"Classic virtual cartoon great dane");
		breedRepository.save(scooby);
		List<Breed> found = breedRepository.findByTrainability(3);
		assertTrue(found.size()>0);
	}

	@Test
	public void canFindBreedTrainabilityAndSize(){
		Breed scooby = new Breed("Scooby",
				3,
				3,
				4,
				"Large",
				2,
				3,
				4,
				5,
				3,
				4,
				3,
				4,
				4,
				"scooby.jpg",
				"Classic virtual cartoon great dane");
		breedRepository.save(scooby);
		List<Breed> found = breedRepository.findByTrainabilityAndSize(3, "Large");
		assertTrue(found.size()>0);
	}

}
