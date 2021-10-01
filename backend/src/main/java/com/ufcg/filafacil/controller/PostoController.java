package com.ufcg.filafacil.controller;

import com.ufcg.filafacil.model.vacina.Lote;
import com.ufcg.filafacil.service.posto_vacina.PostoDeVacinacaoService;
import com.ufcg.filafacil.utils.AuthenticatedUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/posto")
@CrossOrigin
public class PostoController {

    @Autowired
    PostoDeVacinacaoService postoService;

    @GetMapping("/lotes")
    public ResponseEntity<List<Lote>> listaLotesDoPosto(@RequestParam long idPosto) {
        //int idPosto = AuthenticatedUtils.getEntityId();
        List<Lote> lista = postoService.listaLotesPosto(idPosto);
        return new ResponseEntity<>(lista, HttpStatus.OK);
    }

    // Gerar código que será passado pra o Paciente
    @RequestMapping(value = "/fila", method = RequestMethod.GET)
    public ResponseEntity<?> gerarCodigoDePosto(@RequestParam long idPosto) {
        try {
            //int idPosto = AuthenticatedUtils.getEntityId();
            String codigoDoPosto = postoService.gerarCodigoDoPosto(idPosto);
            return ResponseEntity.status(HttpStatus.OK).body(codigoDoPosto);
        } catch (IllegalArgumentException ila) {
            return ResponseEntity.badRequest().body(ila.getMessage());
        }
    }

    // Isso talvez fique na parte de uma espécie de UsuarioComumController algo do
    // tipo
    // O usuário coloca o código do posto e receber a senha dele na fila
    @RequestMapping(value = "/fila", method = RequestMethod.POST)
    public ResponseEntity<?> adicionaPacienteNaFila(@RequestBody Map<String,String> params) {
        try {
            int senhaPaciente = this.postoService.addPacienteNaFila(params.get("codigoPosto"));
            return ResponseEntity.status(HttpStatus.OK).body(senhaPaciente);
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
    public ResponseEntity<?> confirmarVacinacao(@RequestParam Integer senha, Long idPosto) {

        try {
            String vacinaAplicada = postoService.confirmarVacinacao(senha, idPosto);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(vacinaAplicada);
        } catch (IllegalArgumentException ila) {
            return ResponseEntity.badRequest().body(ila.getMessage());
        }

    }

}
