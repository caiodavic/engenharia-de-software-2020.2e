package com.ufcg.filafacil.controller;


import com.ufcg.filafacil.DTO.LoteDTO;
import com.ufcg.filafacil.DTO.PostoDeVacinacaoDTO;
import com.ufcg.filafacil.DTO.VacinaDTO;
import com.ufcg.filafacil.model.posto_vacinacao.PostoDeVacinacao;
import com.ufcg.filafacil.model.vacina.Lote;
import com.ufcg.filafacil.model.vacina.Vacina;
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

    @RequestMapping(value = "/secretaria/vacina", method = RequestMethod.POST)
    public ResponseEntity<?> cadastrarVacina(@RequestBody VacinaDTO vacinaDTO) {

        try {
            Vacina vacina = vacinaService.cadastraVacina(vacinaDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(vacina);
        }catch (IllegalArgumentException ila){
            return ResponseEntity.badRequest().body(ila.getMessage());
        }

    }

    @RequestMapping(value = "/secretaria/lote", method = RequestMethod.POST)
    public ResponseEntity<?> cadastrarLote(@RequestBody LoteDTO loteDTO) {

        try {
            Lote lote = loteService.cadastraLote(loteDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(lote);
        }catch (IllegalArgumentException ila){
            return ResponseEntity.badRequest().body(ila.getMessage());
        }

    }

    @RequestMapping(value = "/secretaria/vacinas", method = RequestMethod.GET)
    public ResponseEntity<?> listaVacinas() {

        try {
            List<Vacina> vacinas = vacinaService.listaVacina();
            return ResponseEntity.status(HttpStatus.OK).body(vacinas);
        }catch (IllegalArgumentException ila){
            return ResponseEntity.badRequest().body(ila.getMessage());
        }

    }

    @RequestMapping(value = "/secretaria/lotes", method = RequestMethod.GET)
    public ResponseEntity<?> listaLotes() {

        try {
            List<Lote> lotes = loteService.listaLote();
            return ResponseEntity.status(HttpStatus.OK).body(lotes);
        }catch (IllegalArgumentException ila){
            return ResponseEntity.badRequest().body(ila.getMessage());
        }

    }
}

