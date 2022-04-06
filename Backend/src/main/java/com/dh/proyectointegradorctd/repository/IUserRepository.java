package com.dh.proyectointegradorctd.repository;

import com.dh.proyectointegradorctd.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface IUserRepository extends JpaRepository<User, Integer> {

    Optional<User> findUserByEmail(String email);
    Optional<User> findUserByNombreAndApellidoAndEmail(String Nombre, String Apellido, String Email);

}
