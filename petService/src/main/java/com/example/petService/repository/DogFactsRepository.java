package com.example.petService.repository;

import com.example.petService.models.DogFact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DogFactsRepository extends JpaRepository<DogFact, Long> {

}
