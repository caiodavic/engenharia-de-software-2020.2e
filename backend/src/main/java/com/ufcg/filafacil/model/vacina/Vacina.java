package com.ufcg.filafacil.model.vacina;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Representa uma Vacina contra a COVID-19. É unicamente identificada pelo nome do seu fabricante (não poderá ter duas
 * Vacinas de uma mesma empresa ou organização). Além disso, pois o número de doses necessárias para atingir a imunização
 * e os dias entre essas doses. Vacinas são ministradas através de Lotes,
 */
@Entity
public class Vacina {

    /**
     * É o nome da fabricante da Vacina. É sua chave primária.
     */
    @Id
    private String nomeVacina;

    /**
     * É o número de doses necessárias para se garantir imunidade.
     */
    private int numDosesNecessarias;

    /**
     * É o periodo (em dias) ideal entre uma dose e outra de Vacina.
     */
    private int diasEntreDoses;

    /**
     * Cria uma vacina a partir do seu nome de fabricante, numero de doses necessarias e os dias entre elas
     */
    public Vacina(){}

    public Vacina(String nomeVacina, int numDosesNecessarias, int numDiasEntreDoses){
        this.nomeVacina = nomeVacina;
        this.numDosesNecessarias = numDosesNecessarias;
        this.diasEntreDoses = numDiasEntreDoses;

    }


    public String getNomeVacina() {
        return nomeVacina;
    }

    public int getNumDosesNecessarias() {
        return numDosesNecessarias;
    }

    public int getDiasEntreDoses() {
        return diasEntreDoses;
    }

}
