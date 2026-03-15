package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
public class SavedVideo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String subject;
    private String videoUrl;

    public Long getId() {
        return id;
    }

    public String getSubject() {
        return subject;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }
}