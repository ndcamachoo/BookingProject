package com.dh.proyectointegradorctd.repository;

import com.dh.proyectointegradorctd.model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
@Transactional
public interface ICityRepository extends JpaRepository<City,Integer> {

    Optional<City> findCityByName(String name);
    Optional<City> findCityByCountryAndName(String country, String name);
}
