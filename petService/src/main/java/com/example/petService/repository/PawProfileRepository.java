package com.example.petService.repository;

import com.example.petService.models.PawProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PawProfileRepository extends JpaRepository<PawProfile, Long> {

}
