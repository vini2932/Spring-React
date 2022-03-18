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
import com.backend.agencia.entities.Passageiro;
import com.backend.agencia.repositorys.PassageiroRepository;

@RestController
@CrossOrigin(origins="http://localhost:3000/")
@RequestMapping(value="/passageiro")
public class PassageiroController {
	

		@Autowired
		PassageiroRepository passageirorepo;


		@GetMapping
		public ResponseEntity<List<Passageiro>> Encontrar(){
			List <Passageiro> passageiros= passageirorepo.findAll();
			return ResponseEntity.ok().body(passageiros);
		}

		@GetMapping(value= "/{id}")
		public ResponseEntity<Passageiro> findById(@PathVariable long id){
			
			Passageiro passageiro=passageirorepo.findById(id).get();
			return ResponseEntity.ok().body(passageiro);
		}

		//Create
		@PostMapping
		public Passageiro create (@RequestBody Passageiro passagemfu) {
			
			return passageirorepo.save(passagemfu);
		}

		//UPDATE
		@PutMapping("{id}")
		public ResponseEntity<Passageiro> update(@PathVariable long id, @RequestBody Passageiro passageirodetails){
		Passageiro updatepass=passageirorepo.findById(id).get();
	
		updatepass.setNome(passageirodetails.getNome());
		updatepass.setIdade(passageirodetails.getIdade());
		updatepass.setSobrenome(passageirodetails.getSobrenome());
		updatepass.setPassagem(passageirodetails.getPassagem());
		passageirorepo.save(updatepass);
		return ResponseEntity.ok(updatepass);
		}
		//DELETE	
		@DeleteMapping("{id}")
		public ResponseEntity<HttpStatus> delete(@PathVariable long id){
			
			Passageiro emploees=passageirorepo.findById(id).get();
			passageirorepo.delete(emploees);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
}

