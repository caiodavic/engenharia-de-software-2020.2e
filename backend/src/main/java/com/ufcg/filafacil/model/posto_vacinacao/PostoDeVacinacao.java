package com.ufcg.filafacil.model.posto_vacinacao;

import com.ufcg.filafacil.model.vacina.Lote;

import javax.persistence.*;
import java.util.*;


@Entity
public class PostoDeVacinacao {

    @Id
    private long id;

    private String nome;

    private String email;

    private String telefone;

    private String senha;

    @OneToMany
    private List<Lote> lotesDeVacina;

    @OneToOne
    private Endereco endereco;

    private int situacaoFila;

    private int ultimaPosicao;

    @ElementCollection
    private ArrayDeque<String> filaPacientes;

    public PostoDeVacinacao(String nome, String email, String telefone, Endereco endereco, long id, String senha){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
        this.lotesDeVacina = new ArrayList<>();
        this.senha = senha;
        this.situacaoFila = 0;
        this.ultimaPosicao = 0;
        this.filaPacientes = new ArrayDeque<String>();
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    public List<Lote> getLotesDeVacina() {
        return lotesDeVacina;
    }

    public void addLotesDeVacina(Lote lote) {
        this.lotesDeVacina.add(lote);

    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PostoDeVacinacao that = (PostoDeVacinacao) o;
        return id == that.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    private int getQtdVacina(){
        int qtdTotal = 0;
        for(Lote lote : this.lotesDeVacina){
            qtdTotal += lote.getQtdDosesDisponiveis();
        }
        return qtdTotal;
    }
    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String[] addPacienteNaFila(){
        String[] codigoPosicao = null;
        if (this.filaPacientes.size() >= this.getQtdVacina()){
            codigoPosicao = new String[2];
            codigoPosicao[0] = gerarCodigoPaciente();
            this.filaPacientes.addLast(codigoPosicao[0]);
            this.ultimaPosicao ++;
            codigoPosicao[1] = String.valueOf(this.ultimaPosicao);
        }
        return codigoPosicao;
    }

    //fonte: https://www.baeldung.com/java-random-string
    private String gerarCodigoPaciente(){
        int leftLimit = 48; // numeral '0'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = 10;
        Random random = new Random();

        String generatedString = random.ints(leftLimit, rightLimit + 1)
                .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
                .limit(targetStringLength)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();

        return generatedString;
    }

    public String registraVacinacao (String senha){
        String result = null;
        if (this.filaPacientes.peekFirst() != null &&
            this.filaPacientes.peekFirst().equals(senha) &&
            this.getQtdVacina() > 0){

            this.situacaoFila ++;
            this.filaPacientes.removeFirst();

            //Logica de escolher/remover vacina do lote

            result = "nome vacina";
        }
        return result;
    }
}
