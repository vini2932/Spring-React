package com.backend.agencia.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
@Entity
public class Passageiro implements Serializable{
	private static final long serialVersionUID=1L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String nome;
	private String sobrenome;
	private int idade;
private int acompanhantes;
@ManyToOne
@JoinColumn(name="Passagem_id")
	private Passagem passagem;
public Long getId() {
	return id;
}
public void setId(Long id) {
	this.id = id;
}
public String getNome() {
	return nome;
}
public void setNome(String nome) {
	this.nome = nome;
}
public String getSobrenome() {
	return sobrenome;
}
public void setSobrenome(String sobrenome) {
	this.sobrenome = sobrenome;
}
public int getIdade() {
	return idade;
}
public void setIdade(int idade) {
	this.idade = idade;
}
public int getAcompanhantes() {
	return acompanhantes;
}
public void setAcompanhantes(int acompanhantes) {
	this.acompanhantes = acompanhantes;
}
public Passagem getPassagem() {
	return passagem;
}
public void setPassagem(Passagem passagem) {
	this.passagem = passagem;
}

public Passageiro() {
	super();
}
public Passageiro(String nome, String sobrenome, int idade, int acompanhantes, Passagem passagem) {
	super();
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.acompanhantes = acompanhantes;
	this.passagem = passagem;
}


}

	

