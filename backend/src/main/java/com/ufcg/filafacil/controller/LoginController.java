package com.ufcg.filafacil.controller;

import com.ufcg.filafacil.DTO.LoginFormDto;
import com.ufcg.filafacil.service.login.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/api/login")
@CrossOrigin
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/")
    public ResponseEntity<Map<String, String>> login(@RequestBody LoginFormDto loginFormDto) {
        try {
            Map<String, String> tokenResult = new HashMap<>();
            String token = loginService.realizarLogin(loginFormDto.getLogin(), loginFormDto.getSenha(), loginFormDto.getTipoLogin());
            tokenResult.put("token", token);
            return new ResponseEntity<>(tokenResult, HttpStatus.OK);
        } catch (IllegalArgumentException exception) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

    }
}
