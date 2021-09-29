package com.ufcg.filafacil.controller;

import com.ufcg.filafacil.DTO.PostoDeVacinacaoDTO;
import com.ufcg.filafacil.model.posto_vacinacao.PostoDeVacinacao;
import com.ufcg.filafacil.model.vacina.Lote;
import com.ufcg.filafacil.service.PostoDeVacinacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posto")
@CrossOrigin
public class PostoController {

    @Autowired
    PostoDeVacinacaoService postoService;

    @GetMapping("/lotes/")
    public ResponseEntity<List<Lote>> listaLotesDoPosto(@RequestBody long idPosto) {
        List<Lote> lista = postoService.listaLotesPosto(idPosto);
        return new ResponseEntity<>(lista, HttpStatus.OK);
    }
}
