package com.ufcg.filafacil.controller;


import com.ufcg.filafacil.DTO.AlocacaoDTO;
import com.ufcg.filafacil.DTO.LoteDTO;
import com.ufcg.filafacil.DTO.PostoDeVacinacaoDTO;
import com.ufcg.filafacil.DTO.VacinaDTO;
import com.ufcg.filafacil.model.posto_vacinacao.PostoDeVacinacao;
import com.ufcg.filafacil.model.vacina.Lote;
import com.ufcg.filafacil.model.vacina.Vacina;
import com.ufcg.filafacil.service.lote.LoteService;
import com.ufcg.filafacil.service.posto_vacina.PostoDeVacinacaoService;
import com.ufcg.filafacil.service.vacina.VacinaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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

    @Autowired
    VacinaService vacinaService;

    @Autowired
    LoteService loteService;

    @PostMapping("/secretaria/posto")
    @PreAuthorize("hasRole('ROLE_SECRETARIA')")
    public ResponseEntity<?> cadastraPostoDeVacinacao(@RequestBody PostoDeVacinacaoDTO postoDTO) {
        try {
            postoService.cadastraPostoVacinacao(postoDTO);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }catch (IllegalArgumentException ila){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/secretaria/postos")
    public ResponseEntity<List<PostoDeVacinacao>> listarPostosDeVacinacao() {
            List<PostoDeVacinacao> postos = postoService.listaPostoDeVacinacao();
            return new ResponseEntity<>(postos, HttpStatus.OK);
    }

    @GetMapping("/secretaria/postos/disponveis")
    public ResponseEntity<List<PostoDeVacinacao>> listarPostoDeVacincacaoDispniveis() {
        List<PostoDeVacinacao> postos = postoService.listaPostoDeVacinacaoDisponiveis();
        return new ResponseEntity<>(postos, HttpStatus.OK);
    }

    @PostMapping("/secretaria/vacina")
    @PreAuthorize("hasRole('ROLE_SECRETARIA')")
    public ResponseEntity<?> cadastrarVacina(@RequestBody VacinaDTO vacinaDTO) {
        try {
            vacinaService.cadastraVacina(vacinaDTO);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }catch (IllegalArgumentException ila){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/secretaria/vacinas")
    @PreAuthorize("hasRole('ROLE_SECRETARIA')")
    public ResponseEntity<List<Vacina>> listaVacinas() {
        List<Vacina> vacinas = vacinaService.listaVacina();
        return new ResponseEntity<>(vacinas, HttpStatus.OK);
    }

    @GetMapping("/secretaria/lotes")
    @PreAuthorize("hasRole('ROLE_SECRETARIA')")
    public ResponseEntity<List<Lote>> listaLotes() {
        List<Lote> lotes = loteService.listaLote();
        return new ResponseEntity<>(lotes, HttpStatus.OK);
    }

    @PostMapping("/secretaria/lote")
    @PreAuthorize("hasRole('ROLE_SECRETARIA')")
    public ResponseEntity<?> cadastrarLote(@RequestBody LoteDTO loteDTO) {
        try {
            loteService.cadastraLote(loteDTO);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }catch (IllegalArgumentException ila){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/secretaria/lotes/disponiveis")
    @PreAuthorize("hasRole('ROLE_SECRETARIA')")
    public ResponseEntity<List<Lote>> listaLotesDisponiveis() {
        List<Lote> lotes = loteService.listaLoteDisponiveis();
        return new ResponseEntity<>(lotes, HttpStatus.OK);
    }

    @PostMapping("/secretaria/alocacao")
    @PreAuthorize("hasRole('ROLE_SECRETARIA')")
    public ResponseEntity<?> alocaLoteNoPosto(@RequestBody AlocacaoDTO alocacaoDTO){
        try {
            postoService.alocaLoteNoPosto(alocacaoDTO.getIdLote(), alocacaoDTO.getIdPosto());
            return new ResponseEntity<>(HttpStatus.CREATED);
        }catch (IllegalArgumentException ila){
            return ResponseEntity.badRequest().body(ila.getMessage());
        }
    }
}

