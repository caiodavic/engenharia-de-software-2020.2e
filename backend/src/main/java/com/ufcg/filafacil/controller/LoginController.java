package com.ufcg.filafacil.controller;

import com.ufcg.filafacil.service.login.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/login")
@CrossOrigin
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/login/")
    public ResponseEntity<String> login(@RequestBody String login, @RequestBody String senha, @RequestBody String tipoLogin) {
        String token = loginService.realizarLogin(login, senha, tipoLogin);
        return new ResponseEntity<>(token, HttpStatus.OK);
    }
}
