package com.ufcg.filafacil.controller;

import com.ufcg.filafacil.model.vacina.Lote;
import com.ufcg.filafacil.service.posto_vacina.PostoDeVacinacaoService;
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

    //Gerar código que vai ser utilizado

    //Isso talvez fique na parte de uma espécie de UsuarioComumController algo do tipo
    //O usuário coloca o código do posto e receber a senha dele na fila


    //Confirmar vacinação de um usuário(O usuário passa a senha dele, e é eliminado da fila de vacinação)



}
