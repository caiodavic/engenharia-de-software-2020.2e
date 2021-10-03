package com.ufcg.filafacil.model.posto_vacinacao;

import com.ufcg.filafacil.model.fila.PosicaoNaFila;
import com.ufcg.filafacil.model.vacina.Lote;

import javax.persistence.*;
import java.util.*;
import java.util.stream.Collectors;

@Entity
public class PostoDeVacinacao {

    @Id
    private Long id;

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

    private String endereco;

    private String senha;

    @OneToMany
    private Set<PosicaoNaFila> fila;

    public PostoDeVacinacao() {
    }

    public PostoDeVacinacao(String nome, String email, String telefone, String endereco, long id, String senha) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
        this.id = id;
        this.codigosPosto = new ArrayList<>();
        this.lotesDeVacina = new ArrayList<>();
        this.filaPacientes = new ArrayList<>();
        this.senha = senha;
        this.fila = new HashSet<>();
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

    public String getEndereco() {
        return endereco;
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
        if (!this.filaPacientes.isEmpty()) {
            return this.fila.stream().filter(f -> f.getSenha() != null).collect(Collectors.toList()).size();
        }
        return 0;
    }

    public List<Integer> getFilaPacientes() {
        return this.filaPacientes;
    }

    public int addPacienteNaFila(String codigoPosto) {
        int novaSenha = this.getUltimaSenha() + 1;
        this.filaPacientes.add(novaSenha);

        for (PosicaoNaFila pf : this.fila){
            if (pf.getCodigo().equals(codigoPosto)) {
                if (pf.getSenha() == null){
                    pf.setSenha(novaSenha+1);
                }
                return pf.getSenha();
            }
        }
        throw new IllegalArgumentException("Código invalido");
    }

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
        Lote lote = this.lotesDeVacina
                .stream()
                .filter(l -> l.getQtdDosesDisponiveis() > 0)
                .findAny().get();

        String vacinaAplicada = lote.getVacina().getNomeVacina();
        lote.diminuiQtdDosesDisponiveis();
        if (lote.getQtdDosesDisponiveis() == 0) {
            this.lotesDeVacina.remove(lote);
        }

        for (PosicaoNaFila pf : this.fila){
            if (pf.getSenha().equals(senha)) {
                pf.setVacinaConfirmada(true);
            }
        }

        return "O Paciente com senha " + senha + " recebeu a vacina " + vacinaAplicada;
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

    public int getPosicaoAtual() {
        if (this.fila != null &&
            !this.fila.isEmpty()) {
            return (int) this.fila.stream().filter(f ->
                    f.getVacinaConfirmada() != null && f.getVacinaConfirmada())
                    .count();
        }
        return 0;
    }

    @Override
    public String toString() {
        return "PostoDeVacinacao{" +
                "id=" + id +
                ", codigosPosto=" + codigosPosto +
                '}';
    }

    public void addPosicaoNaFila(PosicaoNaFila posicaoNaFila) {
        this.fila.add(posicaoNaFila);
    }
}
