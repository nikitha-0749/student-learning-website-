package com.example.demo.repository;

import com.example.demo.entity.SavedVideo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SavedVideoRepository extends JpaRepository<SavedVideo, Long> {
}