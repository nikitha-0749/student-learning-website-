package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class CourseController {

    @Value("${youtube.api.key}")
    private String apiKey;

    @GetMapping("/search")
    public Map<String, String> search(@RequestParam String subject) {

        try {
            String url = "https://www.googleapis.com/youtube/v3/search"
                    + "?part=snippet"
                    + "&maxResults=1"
                    + "&q=" + subject.replace(" ", "%20")
                    + "&type=video"
                    + "&key=" + apiKey;

            RestTemplate restTemplate = new RestTemplate();
            Map response = restTemplate.getForObject(url, Map.class);

            var items = (java.util.List<Map>) response.get("items");

            if (items != null && !items.isEmpty()) {
                Map firstItem = items.get(0);
                Map id = (Map) firstItem.get("id");
                String videoId = (String) id.get("videoId");

                String videoUrl = "https://www.youtube.com/embed/" + videoId;

                return Map.of(
                        "videoUrl", videoUrl,
                        "notesApi", "https://en.wikipedia.org/api/rest_v1/page/summary/"
                                + subject.replace(" ", "_")
                );
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return Map.of(
                "videoUrl", "",
                "notesApi", ""
        );
    }
}