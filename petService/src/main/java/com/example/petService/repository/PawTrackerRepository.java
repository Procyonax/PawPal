package com.example.petService.repository;

import com.example.petService.models.PawTracker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PawTrackerRepository extends JpaRepository<PawTracker, Long> {

}
