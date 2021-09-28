package com.ufcg.filafacil.service;

import com.ufcg.filafacil.DTO.LoteDTO;
import com.ufcg.filafacil.model.posto_vacinacao.PostoDeVacinacao;
import com.ufcg.filafacil.model.vacina.Lote;
import com.ufcg.filafacil.model.vacina.Vacina;
import com.ufcg.filafacil.repository.LoteRepository;
import com.ufcg.filafacil.repository.VacinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoteServiceImpl implements LoteService {

    @Autowired
    LoteRepository loteRepository;

    @Autowired
    VacinaService vacinaService;

    @Override
    public Lote cadastraLote(LoteDTO loteDTO) {
        Vacina vacina = vacinaService.getVacinaById(loteDTO.getNomeVacina());
        Lote newLote = new Lote(vacina,loteDTO.getQtdDoses(),loteDTO.getDataDeValidade());
        this.salvaLote(newLote);

        return this.getLoteById(newLote.getId());
    }

    @Override
    public List<Lote> listaLote() {
        List<Lote> lotes = loteRepository.findAll();
        if(lotes.isEmpty()){
            throw new IllegalArgumentException("Não existem lotes cadastrados");
        }

        return lotes;
    }

    @Override
    public Lote getLoteById(long id) {
        return this.loteRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Lote não cadastrado"));
    }

    @Override
    public void alocaPosto(PostoDeVacinacao posto, long id) {
        Lote lote = getLoteById(id);
        lote.setPostoDeVacinacao(posto);
        this.salvaLote(lote);
    }

    private void salvaLote(Lote lote){
        this.loteRepository.save(lote);
    }
}
