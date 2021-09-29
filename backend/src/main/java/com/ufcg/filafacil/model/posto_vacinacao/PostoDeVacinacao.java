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

    private int senhaPaciente;

    private String codigoPosto;

    @OneToMany
    private List<Lote> lotesDeVacina;

    @OneToOne
    private Endereco endereco;

    private List<Integer> filaPacientes;

    public PostoDeVacinacao(String nome, String email, String telefone, Endereco endereco, long id){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
        this.lotesDeVacina = new ArrayList<>();
        this.filaPacientes = new ArrayList<>();
        this.senhaPaciente = 0;
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

    public String getCodigoPosto() {
        return this.codigoPosto;
    }

    private int getQtdVacina(){
        int qtdTotal = 0;
        for(Lote lote : this.lotesDeVacina){
            qtdTotal += lote.getQtdDosesDisponiveis();
        }
        return qtdTotal;
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


    public int getSenha() {
        return senhaPaciente;
    }

    public void setSenha(int senha) {
        this.senhaPaciente = senha;
    }

    public int addPacienteNaFila(String codigoPosto){
        if(codigoPosto.equals(this.codigoPosto)) {
            if (this.filaPacientes.size() < this.getQtdVacina()) {
                this.filaPacientes.add(senhaPaciente);
            } else {
                throw new IllegalArgumentException("Estoque de vacinas finalizado!");
            }
        }else{
            throw new IllegalArgumentException("Este código não é o código do Posto onde você se encontra!");
        }

        return this.senhaPaciente++;
    }

    //fonte: https://www.baeldung.com/java-random-string
    public String gerarCodigoPosto(){
        int leftLimit = 48; // numeral '0'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = 10;
        Random random = new Random();

        String generatedString = random.ints(leftLimit, rightLimit + 1)
                .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
                .limit(targetStringLength)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();

        this.codigoPosto = generatedString;
        return generatedString;
    }

    public String confirmarVacinacao(int senha){
        this.filaPacientes.remove(senha);
        Lote lote = this.lotesDeVacina.get(0);
        String vacinaAplicada = lote.getVacina().getNomeVacina();
        lote.diminuiQtdDosesDisponiveis();
        if(lote.getQtdDosesDisponiveis() == 0){
            this.lotesDeVacina.remove(lote);
        }
        return "O Paciente com senha: " + senha+ "recebeu a vacina: " + vacinaAplicada;
    }

}
