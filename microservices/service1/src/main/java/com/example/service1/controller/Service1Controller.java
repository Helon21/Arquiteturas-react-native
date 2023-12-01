package com.example.service1.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/service1")
public class Service1Controller {
    @GetMapping("/waifus")
    public String getWaifuPic() {
        RestTemplate restTemplate = new RestTemplate();
        String waifuPicUrl = "https://api.waifu.pics/sfw/waifu";
        String result = restTemplate.getForObject(waifuPicUrl, String.class);
        return result;
    }
}
