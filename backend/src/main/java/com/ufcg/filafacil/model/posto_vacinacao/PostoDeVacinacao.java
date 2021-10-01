package com.ufcg.filafacil.model.posto_vacinacao;

import com.ufcg.filafacil.model.vacina.Lote;

import javax.persistence.*;
import java.util.*;

@Entity
public class PostoDeVacinacao {

    @Id
    private long id;

    private String nome;

    @Column(name = "email", unique = true)
    private String email;

    private String telefone;

    @ElementCollection
    private List<String> codigosPosto;

    @OneToMany
    private List<Lote> lotesDeVacina;

    @ElementCollection
    private List<Integer> filaPacientes;

    @OneToOne
    private Endereco endereco;

    private String senha;

    public PostoDeVacinacao() {
    }

    public PostoDeVacinacao(String nome, String email, String telefone, Endereco endereco, long id, String senha) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
        this.id = id;
        this.codigosPosto = new ArrayList<>();
        this.lotesDeVacina = new ArrayList<>();
        this.filaPacientes = new ArrayList<>();
        // Gambiarra pra começar a fila com "algum paciente", já que a estratégia é
        // pegar a última senha e somar 1 pra ir incrementando
        // A ideia é quando adicionar realmente o primeiro paciente, esse valor 0 seja
        // removido
        this.senha = senha;
        this.filaPacientes.add(0);
    }

    public long getId() {
        return this.id;
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


    public List<String> getCodigosPosto(){
        return this.codigosPosto;
    }



    public int getQtdVacina() {
        int qtdTotal = 0;
        for (Lote lote : this.lotesDeVacina) {
            qtdTotal += lote.getQtdDosesDisponiveis();
        }
        return qtdTotal;
    }

    public void addLotesDeVacina(Lote lote) {
        this.lotesDeVacina.add(lote);
    }

    public int getUltimaSenha() {
        return this.filaPacientes.get(this.filaPacientes.size() - 1);
    }

    public List<Integer> getFilaPacientes() {
        return this.filaPacientes;
    }

    public int addPacienteNaFila() {
        if (this.filaPacientes.get(0) == 0) {
            this.filaPacientes.add(this.getUltimaSenha() + 1);
            this.filaPacientes.remove(0);
        } else {
            this.filaPacientes.add(this.getUltimaSenha() + 1);
        }
        return this.getUltimaSenha();
    }

    // fonte: https://www.baeldung.com/java-random-string
    public String gerarCodigoPosto() {
        int leftLimit = 48; // numeral '0'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = 10;
        Random random = new Random();

        String generatedString = random.ints(leftLimit, rightLimit + 1)
                .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97)).limit(targetStringLength)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append).toString();

        this.codigosPosto.add(generatedString);
        return generatedString;
    }

    public String confirmarVacinacao(int senha) {
        this.filaPacientes.remove(senha);
        Lote lote = this.lotesDeVacina.get(0);
        String vacinaAplicada = lote.getVacina().getNomeVacina();
        lote.diminuiQtdDosesDisponiveis();
        if (lote.getQtdDosesDisponiveis() == 0) {
            this.lotesDeVacina.remove(lote);
        }
        return "O Paciente com senha: " + senha + "recebeu a vacina: " + vacinaAplicada;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        PostoDeVacinacao that = (PostoDeVacinacao) o;
        return id == that.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    public void removerCodigo(String codigoPosto) {
        this.codigosPosto.remove(codigoPosto);
    }
}
