package com.dh.proyectointegradorctd.repository;

import com.dh.proyectointegradorctd.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
@Transactional
public interface IRoleRepository extends JpaRepository<Role, Integer> {

    Optional<Role> findByName(String name);

}
