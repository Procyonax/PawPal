package com.example.petService;

import com.example.petService.models.Breed;
import com.example.petService.models.PawProfile;
import com.example.petService.models.PawTracker;
import com.example.petService.repository.BreedRepository;
import com.example.petService.repository.PawProfileRepository;
import com.example.petService.repository.PawTrackerRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class PetServiceApplicationTests {

	@Autowired
	BreedRepository breedRepository;

	@Autowired
	PawProfileRepository pawProfileRepository;

	@Autowired
	PawTrackerRepository pawTrackerRepository;

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

	@Test
	public void canCreatePawProfile(){
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
		PawProfile Scooby = new PawProfile("Scooby", LocalDate.of(1980,3,17), scooby, "Mystery machine Vets", "5551234", "Those pesky kids Grooming", "5551951", "1Scooby.jpg");
		pawProfileRepository.save(Scooby);
		assertEquals(5, pawProfileRepository.count());
	}

	@Test
	public void canDeletePawProfile(){
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
		PawProfile Scooby = new PawProfile("Scooby", LocalDate.of(1980,3,17), scooby, "Mystery machine Vets", "5551234", "Those pesky kids Grooming", "5551951", "1Scooby.jpg");
		pawProfileRepository.save(Scooby);
		pawProfileRepository.delete(Scooby);
		assertEquals(4, pawProfileRepository.count());
	}

	@Test
	public void canFindTrackersByPawProfileId(){
		List<PawTracker> found = pawTrackerRepository.findByProfileId(2L);
		assertTrue(found.size()>0);

	}
}
