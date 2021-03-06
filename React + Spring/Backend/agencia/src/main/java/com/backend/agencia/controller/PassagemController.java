package com.backend.agencia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.agencia.entities.Passagem;
import com.backend.agencia.repositorys.PassagemRepository;

@RestController
@CrossOrigin(origins="http://localhost:3000/")
@RequestMapping(value="/pass")
public class PassagemController {

	@Autowired
	PassagemRepository passrepo;


	@GetMapping
	public ResponseEntity<List<Passagem>> Encontrar(){
		List <Passagem> passagens= passrepo.findAll();
		return ResponseEntity.ok().body(passagens);
	}

	@GetMapping(value= "/{id}")
	public ResponseEntity<Passagem> findById(@PathVariable long id){
		
		Passagem passagem=passrepo.findById(id).get();
		return ResponseEntity.ok().body(passagem);
	}

	//Create
	@PostMapping
	public Passagem create (@RequestBody Passagem passagemfu) {
		
		return passrepo.save(passagemfu);
	}

	//UPDATE
	@PutMapping("{id}")
	public ResponseEntity<Passagem> update(@PathVariable long id, @RequestBody Passagem passagemdetails){
	Passagem updatepass=passrepo.findById(id).get();
	updatepass.setDestino(passagemdetails.getDestino());
	updatepass.setPreço(passagemdetails.getPreço());
	updatepass.setDiarias(passagemdetails.getDiarias());
	updatepass.setDesconto(passagemdetails.getDesconto());
	updatepass.setSemPromo(passagemdetails.getSemPromo());
	updatepass.setFoto(passagemdetails.getFoto());
	passrepo.save(updatepass);
	return ResponseEntity.ok(updatepass);
	}
	//DELETE	
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable long id){
		
		Passagem emploees=passrepo.findById(id).get();
		passrepo.delete(emploees);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	}
	
