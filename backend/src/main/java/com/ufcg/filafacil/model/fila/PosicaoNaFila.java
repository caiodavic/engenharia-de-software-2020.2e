package com.ufcg.filafacil.model.fila;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class PosicaoNaFila {

    @Id
    private String codigo;

    private Integer senha;

    public PosicaoNaFila(String codigo) {
        this.codigo = codigo;
    }

    public PosicaoNaFila() {

    }

    public String getCodigo() {
        return codigo;
    }

    public Integer getSenha() {
        return senha;
    }

    public void setSenha(Integer senha) {
        this.senha = senha;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PosicaoNaFila that = (PosicaoNaFila) o;
        return codigo.equals(that.codigo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(codigo);
    }
}
