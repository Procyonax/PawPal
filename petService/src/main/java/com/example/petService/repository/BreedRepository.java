package com.example.petService.repository;

import com.example.petService.models.Breed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BreedRepository extends JpaRepository<Breed, Long> {

    List<Breed> findByTrainability(Integer trainability);

    List<Breed> findByTrainabilityAndSize(Integer trainability, String size);

}
