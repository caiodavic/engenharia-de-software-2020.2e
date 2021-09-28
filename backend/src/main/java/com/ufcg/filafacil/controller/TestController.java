package com.ufcg.filafacil.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/test")
public class TestController {

    @GetMapping(value = "")
    public ResponseEntity<String> testEndpoint() {
        return new ResponseEntity<>("Hello, World", HttpStatus.OK);
    }
}
