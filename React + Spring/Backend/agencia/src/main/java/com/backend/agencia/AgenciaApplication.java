package com.backend.agencia;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.backend.agencia.entities.Passageiro;
import com.backend.agencia.entities.Passagem;
import com.backend.agencia.repositorys.PassageiroRepository;
import com.backend.agencia.repositorys.PassagemRepository;

@SpringBootApplication
public class AgenciaApplication implements CommandLineRunner {
@Autowired
PassagemRepository passrepo;
@Autowired
PassageiroRepository passagerepo;
	public static void main(String[] args) {
		SpringApplication.run(AgenciaApplication.class, args);
	}
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
Passagem passagem1= new Passagem("Pacote de Viagem - Japão (Tóquio) - 2023 e 2024", "1000.00",4,70,"3000.00","/Fotos/viagens-personalizadas-para-o-japao.jpg");
Passagem passagem2= new Passagem("Pacote de Viagem - Fortaleza + Beach Park - 2023", "2400.00",4,20,"3000.00","/Fotos/1_bp.jpg");

		
		Passageiro passageiro= new Passageiro("Fulano","Santos",31,2,passagem1);
		passrepo.save(passagem1);
		passrepo.save(passagem2);
		passagerepo.save(passageiro);	
		
	}

}
