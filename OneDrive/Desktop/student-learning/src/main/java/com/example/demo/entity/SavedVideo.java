package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
public class SavedVideo {

@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private int id;

private String subject;
private String videoUrl;

public int getId(){ return id; }

public String getSubject(){ return subject; }
public void setSubject(String subject){ this.subject=subject; }

public String getVideoUrl(){ return videoUrl; }
public void setVideoUrl(String videoUrl){ this.videoUrl=videoUrl; }
}