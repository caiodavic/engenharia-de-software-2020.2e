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

    @OneToOne
    private PostoDeVacinacao postoDeVacinacao;

    public Lote() {
    }

    public Lote(Vacina vacina, int qtdDoses, LocalDate dataDeValidade) {
        this.vacina = vacina;
        this.qtdDosesDisponiveis = qtdDoses;
        this.dataDeValidade = dataDeValidade;
        this.postoDeVacinacao = null;
    }

    public Long getId() {
        return id;
    }

    public Vacina getVacina() {
        return vacina;
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


    public PostoDeVacinacao getPostoDeVacinacao() {
        return postoDeVacinacao;
    }

    public void setPostoDeVacinacao(PostoDeVacinacao postoDeVacinacao) {
        this.postoDeVacinacao = postoDeVacinacao;
    }
}