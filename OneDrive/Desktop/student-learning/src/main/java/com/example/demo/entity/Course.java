package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String language;
    private String videoUrl;

    @Column(length=5000)
    private String content;

    public Long getId(){ return id; }
    public void setId(Long id){ this.id=id; }

    public String getTitle(){ return title; }
    public void setTitle(String title){ this.title=title; }

    public String getLanguage(){ return language; }
    public void setLanguage(String language){ this.language=language; }

    public String getVideoUrl(){ return videoUrl; }
    public void setVideoUrl(String videoUrl){ this.videoUrl=videoUrl; }

    public String getContent(){ return content; }
    public void setContent(String content){ this.content=content; }
}
