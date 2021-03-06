package com.ufcg.filafacil.controller;

import com.ufcg.filafacil.DTO.AddNaFilaDTO;
import com.ufcg.filafacil.model.vacina.Lote;
import com.ufcg.filafacil.service.posto_vacina.PostoDeVacinacaoService;
import com.ufcg.filafacil.utils.AuthenticatedUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/posto")
@CrossOrigin
public class PostoController {

    @Autowired
    PostoDeVacinacaoService postoService;

    @GetMapping("/lotes")
    @PreAuthorize("hasRole('ROLE_POSTO_VACINACAO')")
    public ResponseEntity<List<Lote>> listaLotesDoPosto() {
        int idPosto = AuthenticatedUtils.getEntityId();
        List<Lote> lista = postoService.listaLotesPosto(idPosto);
        return new ResponseEntity<>(lista, HttpStatus.OK);
    }

    @GetMapping("/teste/teste")
    @PreAuthorize("hasRole('ROLE_POSTO_VACINACAO')")
    public ResponseEntity<?> teste(){
        return ResponseEntity.status(HttpStatus.OK).body("entrou");
    }

    // Gerar código que será passado pra o Paciente
    @GetMapping("/fila")
    @PreAuthorize("hasRole('ROLE_POSTO_VACINACAO')")
    public ResponseEntity<?> gerarCodigoDePosto() {

        try {
            int idPosto = AuthenticatedUtils.getEntityId();
            System.out.println(idPosto);
            String codigoDoPosto = postoService.gerarCodigoDoPosto(idPosto);
            System.out.println(codigoDoPosto);
            return ResponseEntity.status(HttpStatus.OK).body(codigoDoPosto);
        } catch (IllegalArgumentException ila) {
            return ResponseEntity.badRequest().body(ila.getMessage());
        }
    }

    // Isso talvez fique na parte de uma espécie de UsuarioComumController algo do
    // tipo
    // O usuário coloca o código do posto e receber a senha dele na fila
    @RequestMapping(value = "/fila", method = RequestMethod.POST)
    public ResponseEntity<?> adicionaPacienteNaFila(@RequestBody AddNaFilaDTO params) {
        try {
            Map<String, Integer> response = new HashMap<>();
            Long idPosto = this.postoService.getIdPostoByCodigo(params.getCodigoPosto());
            response.put("idPosto", idPosto.intValue());
            int senhaPaciente = this.postoService.addPacienteNaFila(params.getCodigoPosto());
            response.put("senhaPaciente", senhaPaciente);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        } catch (IllegalArgumentException ila) {
            return ResponseEntity.badRequest().body(ila.getMessage());
        }
    }

    // Precisamos receber também o token do Posto de Vacinação Autenticado(Nesse
    // caso recebi o Id do Posto diretamente) no qual essa pessoa está sendo
    // vacinada
    // Confirmar vacinação de um usuário(O usuário passa a senha dele, e é eliminado
    // da fila de vacinação)
    @RequestMapping(value = "/confirma", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ROLE_POSTO_VACINACAO')")
    public ResponseEntity<?> confirmarVacinacao(@RequestParam Integer senha) {
        try {
            int idPosto = AuthenticatedUtils.getEntityId();
            String vacinaAplicada = postoService.confirmarVacinacao(senha, idPosto);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(vacinaAplicada);
        } catch (IllegalArgumentException ila) {
            return ResponseEntity.badRequest().body(ila.getMessage());
        }

    }

    @RequestMapping(value = "/fila/posicao", method = RequestMethod.GET)
    public ResponseEntity<?> senhaAtual(@RequestParam(required = false) Integer idPosto) {
        try {
            int idPostoCorreto = AuthenticatedUtils.getEntityId();

            if (idPosto != null) {
                idPostoCorreto = idPosto;
            }

            int posicao = postoService.posicaoAtual(idPostoCorreto);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(posicao);
        } catch (IllegalArgumentException ila) {
            return ResponseEntity.badRequest().body(ila.getMessage());
        }
    }

}
