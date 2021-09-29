package com.ufcg.filafacil.controller;

import com.ufcg.filafacil.DTO.PostoDeVacinacaoDTO;
import com.ufcg.filafacil.model.posto_vacinacao.PostoDeVacinacao;
import com.ufcg.filafacil.model.vacina.Lote;
import com.ufcg.filafacil.service.PostoDeVacinacaoService;
import org.apache.coyote.Response;
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


    // Gerar código que será passado pra o Paciente
    @RequestMapping(value = "posto/fila", method = RequestMethod.POST)
    public ResponseEntity<?> gerarCodigoDePosto(@RequestBody long idPosto){
        try{
            String codigoDoPosto = postoService.gerarCodigoDoPosto(idPosto);
            return ResponseEntity.status(HttpStatus.OK).body(codigoDoPosto);
        }catch (IllegalArgumentException ila){
            return ResponseEntity.badRequest().body(ila.getMessage());
        }
    }



    //Isso talvez fique na parte de uma espécie de UsuarioComumController algo do tipo
    //O usuário coloca o código do posto e receber a senha dele na fila
    @RequestMapping(value = "posto/fila", method = RequestMethod.GET)
    public ResponseEntity<?> adicionaPacienteNaFila(@RequestBody String codigoPosto){
        try{
            int senhaPaciente = this.postoService.addPacienteNaFila(codigoPosto);
            return ResponseEntity.status(HttpStatus.OK).body(senhaPaciente);
        }catch(IllegalArgumentException ila){
            return ResponseEntity.badRequest().body(ila.getMessage());
        }
    }

    //  Precisamos receber também o token do Posto de Vacinação Autenticado no qual essa pessoa está sendo vacinada
    //Confirmar vacinação de um usuário(O usuário passa a senha dele, e é eliminado da fila de vacinação)
//    public ResponseEntity<?> confirmarVacinacao(@RequestBody int senhaPaciente){
//        try{
//            postoService.confirmarVacinacao(senhaPaciente);
//        }catch(IllegalArgumentException ila){
//            return ResponseEntity.badRequest().body(ila.getMessage());
//        }
//
//    }

}
