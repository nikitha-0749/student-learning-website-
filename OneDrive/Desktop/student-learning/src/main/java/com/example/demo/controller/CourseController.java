package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class CourseController {

    @Value("${youtube.api.key}")
    private String apiKey;

    @GetMapping("/search")
    public Map<String,Object> search(@RequestParam String subject){

        // words that are NOT related to study
        List<String> blockedTopics = Arrays.asList(
                "food","cricket","movie","movies","song","songs",
                "music","dance","comedy","funny","vlog","gaming",
                "game","pubg","free fire","challenge","prank",
                "celebrity","actor","actress","entertainment"
        );

        String lower = subject.toLowerCase();

        for(String word : blockedTopics){
            if(lower.contains(word)){
                return Map.of(
                        "error","⚠ Please search a study related topic"
                );
            }
        }

        try{

            String url =
                    "https://www.googleapis.com/youtube/v3/search"
                            + "?part=snippet"
                            + "&maxResults=5"
                            + "&q=" + subject.replace(" ","%20")
                            + "&type=video"
                            + "&key=" + apiKey;

            RestTemplate rest = new RestTemplate();

            Map response = rest.getForObject(url, Map.class);

            List<Map> items = (List<Map>) response.get("items");

            List<Map<String,String>> videos = new ArrayList<>();

            for(Map item : items){

                Map id = (Map)item.get("id");
                Map snippet = (Map)item.get("snippet");

                String videoId = (String) id.get("videoId");
                String title = (String) snippet.get("title");

                Map thumbnails = (Map) snippet.get("thumbnails");
                Map medium = (Map) thumbnails.get("medium");

                String thumbnail = (String) medium.get("url");

                Map<String,String> video = new HashMap<>();

                video.put("title",title);
                video.put("url","https://www.youtube.com/embed/"+videoId);
                video.put("thumbnail",thumbnail);

                videos.add(video);
            }

            String notes =
                    "https://en.wikipedia.org/wiki/"
                            + subject.replace(" ","_");

            Map<String,Object> result = new HashMap<>();

            result.put("videos",videos);
            result.put("notes",notes);

            return result;

        }catch(Exception e){
            e.printStackTrace();
        }

        return Map.of();
    }
}