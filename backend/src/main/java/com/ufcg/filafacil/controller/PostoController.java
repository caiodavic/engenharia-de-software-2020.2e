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

    @RequestMapping(value = "/lotes/", method = RequestMethod.GET)
    public ResponseEntity<?> listaLotesDoPosto(@RequestBody long idPosto) {
        try {
            List<Lote> lista = postoService.listaLotesPosto(idPosto);
            return ResponseEntity.status(HttpStatus.CREATED).body(lista);
        }catch (IllegalArgumentException ila){
            return ResponseEntity.badRequest().body(ila.getMessage());
        }
    }

    //Gerar código que vai ser utilizado

    //Isso talvez fique na parte de uma espécie de UsuarioComumController algo do tipo
    //O usuário coloca o código do posto e receber a senha dele na fila


    //Confirmar vacinação de um usuário(O usuário passa a senha dele, e é eliminado da fila de vacinação)



}
