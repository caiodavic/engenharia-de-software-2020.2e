package com.ufcg.filafacil.model.vacina;

import com.sun.istack.NotNull;
import com.ufcg.filafacil.model.posto_vacinacao.PostoDeVacinacao;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Lote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * É uma referência ao objeto Vacina.
     */
    @OneToOne
    private Vacina vacina;

    /**
     * Inteiro identificando quantas doses há disponíveis para serem mistradas nesse lote
     */
    private int qtdDosesDisponiveis;

    /**
     * Variável LocalDate com a Data de Validade desse Lote. Após essa data o Lote será inutilizado e potencialmente removido automaticamente
     * pelo sistema.
     */
    private LocalDate dataDeValidade;

    private long idPosto;

    public Lote() {
    }

    public Lote(Vacina vacina, int qtdDoses, LocalDate dataDeValidade) {
        this.vacina = vacina;
        this.qtdDosesDisponiveis = qtdDoses;
        this.dataDeValidade = dataDeValidade;
        this.idPosto = -1;
    }

    public Long getId() {
        return id;
    }

    public Vacina getVacina() {
        return vacina;
    }

    public void setPostoDeVacinacao(long postoDeVacinacao) {
        this.idPosto = postoDeVacinacao;
    }

    public long getPostoDeVacinacao() {
        return idPosto;
    }

    public int getQtdDosesDisponiveis() {
        return qtdDosesDisponiveis;
    }

    public LocalDate getDataDeValidade() {
        return dataDeValidade;
    }

    public void diminuiQtdDosesDisponiveis() {
        qtdDosesDisponiveis--;
    }

}