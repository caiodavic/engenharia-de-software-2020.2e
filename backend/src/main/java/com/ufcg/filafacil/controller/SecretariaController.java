package com.ufcg.filafacil.controller;


import com.ufcg.filafacil.DTO.PostoDeVacinacaoDTO;
import com.ufcg.filafacil.model.posto_vacinacao.PostoDeVacinacao;
import com.ufcg.filafacil.service.PostoDeVacinacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api")
@CrossOrigin
public class SecretariaController {

    @Autowired
    PostoDeVacinacaoService postoService;

    @RequestMapping(value = "/secretaria/posto", method = RequestMethod.POST)
    public ResponseEntity<?> cadastraPostoDeVacinacao(@RequestBody PostoDeVacinacaoDTO postoDTO) {

        try {
            PostoDeVacinacao posto = postoService.cadastraPostoVacinacao(postoDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(posto);
        }catch (IllegalArgumentException ila){
            return ResponseEntity.badRequest().body(ila.getMessage());
        }
    }

    @RequestMapping(value = "/secretaria/postos", method = RequestMethod.GET)
    public ResponseEntity<?> listarPostosDeVacinacao() {
        try {
            List<PostoDeVacinacao> postos = postoService.listaPostoDeVacinacao();
            return ResponseEntity.status(HttpStatus.OK).body(postos);
        }catch(IllegalArgumentException ila){
            return ResponseEntity.badRequest().body(ila.getMessage());
        }

    }



}
