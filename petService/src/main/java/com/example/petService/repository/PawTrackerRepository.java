package com.example.petService.repository;

import com.example.petService.models.PawTracker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PawTrackerRepository extends JpaRepository<PawTracker, Long> {

    List<PawTracker> findByProfileId(Long profile_id);
}
