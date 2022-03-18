package com.backend.agencia.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.agencia.entities.Passageiro;
import com.backend.agencia.entities.Passagem;

@Repository
public interface PassageiroRepository extends JpaRepository<Passageiro,Long> {

}
