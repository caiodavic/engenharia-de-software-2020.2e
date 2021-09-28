package com.ufcg.filafacil.controller;


import com.ufcg.filafacil.DTO.PostoDeVacinacaoDTO;
import com.ufcg.filafacil.model.posto_vacinacao.PostoDeVacinacao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
@CrossOrigin
public class SecretariaController {

    @Autowired
    PostoDeVacinacaoService postoService;

    @RequestMapping(value = "/secretaria/", method = RequestMethod.POST)
    public ResponseEntity<?> cadastraPostoDeVacinacao(@RequestBody PostoDeVacinacaoDTO postoDTO) {

        try {
            PostoDeVacinacao posto = postoService.cadastraPostoVacinacao(postoDTO);
        }catch (IllegalArgumentException ila){
            System.out.println(ila.getMessage());
        }



    }

}
