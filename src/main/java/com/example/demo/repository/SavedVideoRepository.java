package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.SavedVideo;

public interface SavedVideoRepository extends JpaRepository<SavedVideo, Long> {

}