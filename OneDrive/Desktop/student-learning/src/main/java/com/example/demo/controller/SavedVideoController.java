package com.example.demo.controller;

import com.example.demo.entity.SavedVideo;
import com.example.demo.repository.SavedVideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/videos")
@CrossOrigin(origins = "*")
public class SavedVideoController {

    @Autowired
    private SavedVideoRepository savedVideoRepository;

    // Save video
    @PostMapping("/save")
    public SavedVideo saveVideo(@RequestBody SavedVideo video) {
        return savedVideoRepository.save(video);
    }

    // Get all saved videos
    @GetMapping("/all")
    public List<SavedVideo> getAllVideos() {
        return savedVideoRepository.findAll();
    }

    // Delete saved video
    @DeleteMapping("/{id}")
    public void deleteVideo(@PathVariable Long id) {
        savedVideoRepository.deleteById(id);
    }
}