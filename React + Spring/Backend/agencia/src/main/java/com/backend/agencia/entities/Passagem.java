package com.backend.agencia.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
public class Passagem implements Serializable {
	
		private static final long serialVersionUID=1L;
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
		private String Destino;
		private String Preço;
		private int diarias;
		private int desconto;
	private String semPromo;
	private String foto;
	
	
	//@OneToMany(mappedBy="passageiro")
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public String getDestino() {
			return Destino;
		}
		public void setDestino(String destino) {
			Destino = destino;
		}
		
		
		public int getDiarias() {
			return diarias;
		}
		public void setDiarias(int diarias) {
			this.diarias = diarias;
		}
		public int getDesconto() {
			return desconto;
		}
		public void setDesconto(int desconto) {
			this.desconto = desconto;
		}
		
	
		public String getPreço() {
			return Preço;
		}
		public void setPreço(String preço) {
			Preço = preço;
		}
		public String getSemPromo() {
			return semPromo;
		}
		public void setSemPromo(String semPromo) {
			this.semPromo = semPromo;
		}
		public String getFoto() {
			return foto;
		}
		public void setFoto(String foto) {
			this.foto = foto;
		}
		public Passagem() {
			super();
		}
		public Passagem(String destino, String preço, int diarias, int desconto, String semPromo, String foto) {
			super();
			Destino = destino;
			Preço = preço;
			this.diarias = diarias;
			this.desconto = desconto;
			this.semPromo = semPromo;
			this.foto = foto;
		}
	
		
		
	
		
	
		

		
		
		
		//@JsonIgnore
		//@OneToMany(mappedBy="autor")
		//private List<Livro> livros = new ArrayList<Livro>();
}

