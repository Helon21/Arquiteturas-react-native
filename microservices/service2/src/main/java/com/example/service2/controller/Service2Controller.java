package com.example.service2.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/service2")
public class Service2Controller {
    @GetMapping("/tapas")
    public String getWaifuPic() {
        RestTemplate restTemplate = new RestTemplate();
        String waifuPicUrl = "https://api.waifu.pics/sfw/slap";
        String result = restTemplate.getForObject(waifuPicUrl, String.class);
        return result;
    }
}
